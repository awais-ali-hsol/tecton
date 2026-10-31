import { handleInquiry } from "@/lib/contact-handler";

// Local development only: `output: "export"` drops this route from production builds,
// where functions/api/contact.ts serves the same path on Cloudflare Pages.
export const POST = (request: Request) => handleInquiry(request, process.env);
