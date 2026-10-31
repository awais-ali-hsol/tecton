/*
 * Form submission layer. Inquiries post to /api/contact, which emails them via Resend.
 * The newsletter has no backend yet: it resolves locally after a short delay so the
 * UI states can be exercised. Replace its body once an endpoint exists.
 */

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  message: string;
  services: string[];
  budget: string;
  timeline: string;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export async function submitInquiry(inquiry: Inquiry): Promise<SubmitResult> {
  try {
    // Trailing slash matches `trailingSlash: true`, avoiding a redirect on POST.
    const res = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
    });
    return (await res.json()) as SubmitResult;
  } catch {
    return { ok: false, error: "Network error." };
  }
}

export async function subscribeNewsletter(email: string): Promise<SubmitResult> {
  void email; // TODO(backend): send to the email marketing provider
  await wait(900);
  return { ok: true };
}
