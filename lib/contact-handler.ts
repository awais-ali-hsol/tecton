import { Resend } from "resend";
import { contact } from "./data";
import { isEmail, type SubmitResult } from "./forms";
import { inquiryEmail } from "./inquiry-email";

/** Reads RESEND_API_KEY and RESEND_FROM_EMAIL. */
export type InquiryEnv = Record<string, string | undefined>;

const reply = (body: SubmitResult, status: number) => Response.json(body, { status });

const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const list = (value: unknown) =>
  Array.isArray(value) ? value.map((v) => text(v, 100)).filter(Boolean).slice(0, 20) : [];

/** Shared by `next dev` (app/api/contact) and production (functions/api/contact). */
export async function handleInquiry(request: Request, env: InquiryEnv) {
  const body = await request.json().catch(() => null);
  const name = text(body?.name, 200);
  const email = text(body?.email, 200);
  const company = text(body?.company, 200);
  const message = text(body?.message, 1200);
  const services = list(body?.services);
  const budget = text(body?.budget, 100);
  const timeline = text(body?.timeline, 100);

  if (!name || !isEmail(email) || message.length < 20 || services.length === 0) {
    return reply({ ok: false, error: "Invalid inquiry." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY or RESEND_FROM_EMAIL is not set.");
    return reply({ ok: false, error: "Email is not configured." }, 500);
  }

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to: contact.email,
    replyTo: email,
    ...inquiryEmail({ name, email, company, message, services, budget, timeline }),
  });

  if (error) {
    console.error("Contact form: Resend rejected the email.", error);
    return reply({ ok: false, error: "The email could not be sent." }, 502);
  }

  return reply({ ok: true }, 200);
}
