import { handleInquiry, type InquiryEnv } from "../../lib/contact-handler";

// Cloudflare Pages Function: serves POST /api/contact on the static export.
export const onRequestPost = ({ request, env }: { request: Request; env: InquiryEnv }) =>
  handleInquiry(request, env);
