/*
 * Form submission layer. There is no backend yet: both functions resolve locally
 * after a short delay so the UI states (loading / success / error) can be exercised.
 * Replace the bodies with real API calls once endpoints exist — callers won't change.
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
  void inquiry; // TODO(backend): POST to the inquiry endpoint
  await wait(1200);
  return { ok: true };
}

export async function subscribeNewsletter(email: string): Promise<SubmitResult> {
  void email; // TODO(backend): send to the email marketing provider
  await wait(900);
  return { ok: true };
}
