"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";
import { isEmail, submitInquiry, type Inquiry } from "@/lib/forms";
import { Button } from "@/components/ui/Button";
import { Check, Plus } from "@/components/ui/icons";
import { EASE } from "@/components/ui/hooks";

const SERVICE_OPTIONS = [
  "Product design",
  "Web platform",
  "Mobile app",
  "AI & automation",
  "E-commerce",
  "Backend & APIs",
  "Cloud & DevOps",
  "Not sure yet",
];

/** Maps a /services/[slug] deep link onto the closest brief option. */
const SLUG_TO_OPTION: Record<string, string> = {
  "custom-software": "Web platform",
  "web-mobile": "Mobile app",
  "ai-automation": "AI & automation",
  "saas-platforms": "Web platform",
  "apis-backend": "Backend & APIs",
  "e-commerce": "E-commerce",
  "ui-ux-product-design": "Product design",
  "cloud-devops": "Cloud & DevOps",
  "system-integration": "Backend & APIs",
  "performance-optimization": "Web platform",
};

const BUDGETS = ["< $25k", "$25k – 75k", "$75k – 150k", "$150k +", "Not sure"];
const TIMELINES = ["ASAP", "1 – 3 months", "3 – 6 months", "Flexible"];
const MAX_MESSAGE = 1200;

type Fields = Pick<Inquiry, "name" | "email" | "company" | "message">;
type Errors = Partial<Record<keyof Fields | "services", string>>;

function validate(f: Fields, picked: string[]): Errors {
  const e: Errors = {};
  if (picked.length === 0) e.services = "Pick at least one — “Not sure yet” is fine.";
  if (!f.name.trim()) e.name = "Tell us who we're talking to.";
  if (!isEmail(f.email)) e.email = "We need a valid email to reply.";
  if (f.message.trim().length < 20) e.message = "A sentence or two helps us prepare — 20 characters minimum.";
  return e;
}

export function BriefForm() {
  const params = useSearchParams();
  const fromService = services.find((s) => s.slug === params.get("service"));
  const [picked, setPicked] = useState<string[]>(() =>
    fromService ? [SLUG_TO_OPTION[fromService.slug]] : [],
  );
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [fields, setFields] = useState<Fields>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const toggle = (opt: string) =>
    setPicked((cur) => (cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt]));

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    const next = { ...fields, [k]: e.target.value.slice(0, k === "message" ? MAX_MESSAGE : 200) };
    setFields(next);
    if (touched) setErrors(validate(next, picked));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const found = validate(fields, picked);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(first === "services" ? "brief-services" : `brief-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    const res = await submitInquiry({ ...fields, services: picked, budget, timeline });
    setStatus(res.ok ? "sent" : "failed");
  };

  const reset = () => {
    setPicked([]);
    setBudget("");
    setTimeline("");
    setFields({ name: "", email: "", company: "", message: "" });
    setErrors({});
    setTouched(false);
    setStatus("idle");
  };

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`brief-${k}-error`} className="field-error" role="alert">{errors[k]}</p> : null;

  return (
    <div className="brief">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            className="success"
            role="status"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="success__icon"><Check size={28} /></span>
            <h2 className="success__title">Brief received, <em>{fields.name.split(" ")[0]}.</em></h2>
            <p>Thanks for the context. A partner will reply to {fields.email} within one business day with first thoughts and a time to talk.</p>
            <dl>
              <div><dt className="label">Scope</dt><dd>{picked.join(", ")}</dd></div>
              {budget && <div><dt className="label">Budget</dt><dd>{budget}</dd></div>}
              {timeline && <div><dt className="label">Timeline</dt><dd>{timeline}</dd></div>}
            </dl>
            <div className="hero__actions">
              <Button href="/work/" variant="light">Browse our work</Button>
              <button type="button" className="link-arrow" onClick={reset}>Send another brief</button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <fieldset className="brief__step">
              <legend className="brief__q"><span className="label">01</span> What can we help with?</legend>
              <p className="brief__hint">Choose as many as apply.</p>
              <div
                id="brief-services"
                tabIndex={-1}
                className="chips"
                aria-describedby={errors.services ? "brief-services-error" : undefined}
              >
                {SERVICE_OPTIONS.map((o) => {
                  const on = picked.includes(o);
                  return (
                    <button key={o} type="button" className="opt" aria-pressed={on} onClick={() => {
                      toggle(o);
                      if (touched) setErrors(validate(fields, on ? picked.filter((p) => p !== o) : [...picked, o]));
                    }}>
                      {on ? <Check /> : <Plus />} {o}
                    </button>
                  );
                })}
              </div>
              <div style={{ position: "relative", minHeight: errors.services ? 28 : 0 }}>{err("services")}</div>
            </fieldset>

            <fieldset className="brief__step">
              <legend className="brief__q"><span className="label">02</span> Rough budget?</legend>
              <div className="chips" role="radiogroup" aria-label="Budget">
                {BUDGETS.map((b) => (
                  <button key={b} type="button" role="radio" className="opt" aria-checked={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="brief__step">
              <legend className="brief__q"><span className="label">03</span> Ideal timeline?</legend>
              <div className="chips" role="radiogroup" aria-label="Timeline">
                {TIMELINES.map((t) => (
                  <button key={t} type="button" role="radio" className="opt" aria-checked={timeline === t} onClick={() => setTimeline(timeline === t ? "" : t)}>
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="brief__step">
              <legend className="brief__q"><span className="label">04</span> About you & the project</legend>
              <div className="fields">
                <div className="field">
                  <label htmlFor="brief-name" className="label">Name *</label>
                  <input id="brief-name" autoComplete="name" placeholder="Alex Johnson" value={fields.name} onChange={set("name")}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "brief-name-error" : undefined} />
                  {err("name")}
                </div>
                <div className="field">
                  <label htmlFor="brief-email" className="label">Work email *</label>
                  <input id="brief-email" type="email" inputMode="email" autoComplete="email" placeholder="alex@company.com" value={fields.email} onChange={set("email")}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "brief-email-error" : undefined} />
                  {err("email")}
                </div>
                <div className="field field--full">
                  <label htmlFor="brief-company" className="label">Company</label>
                  <input id="brief-company" autoComplete="organization" placeholder="Company or project name" value={fields.company} onChange={set("company")} />
                </div>
                <div className="field field--full">
                  <label htmlFor="brief-message" className="label">What are you building? *</label>
                  <span className="label field__count" aria-hidden>{fields.message.length}/{MAX_MESSAGE}</span>
                  <textarea id="brief-message" rows={5} placeholder="The problem, who it's for, and what success looks like in a year."
                    value={fields.message} onChange={set("message")}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? "brief-message-error" : undefined} />
                  {err("message")}
                </div>
              </div>
            </fieldset>

            <div className="brief__submit">
              <p className="brief__note">
                We reply within one business day. Prefer a call? <Link href="#faq" className="link-u">Read the FAQ</Link> first.
              </p>
              <Button type="submit" size="lg" disabled={status === "sending"} aria-busy={status === "sending"}
                icon={status === "sending" ? <span className="spinner" /> : undefined}>
                {status === "sending" ? "Sending brief" : "Send brief"}
              </Button>
            </div>
            {status === "failed" && <p className="field-error" role="alert" style={{ position: "static", marginTop: 16 }}>Something went wrong — email us directly instead.</p>}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
