import type { Inquiry } from "./forms";

const INK = "#0e0e0c";
const CREAM = "#f1ede4";
const SIGNAL = "#ff4f1f";
const MUTED = "#6f6b62";
const LINE = "#e4dfd4";
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/** Every visitor-supplied value goes through this before it reaches the HTML. */
const esc = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

const summary = (i: Inquiry) =>
  [
    ["Name", i.name],
    ["Email", i.email],
    ["Company", i.company],
    ["Services", i.services.join(", ")],
    ["Budget", i.budget],
    ["Timeline", i.timeline],
  ].filter(([, value]) => value);

const row = (label: string, value: string) => `
  <tr>
    <td width="110" valign="top" style="padding:12px 0;border-bottom:1px solid ${LINE};font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${MUTED};">${esc(label)}</td>
    <td valign="top" style="padding:12px 0;border-bottom:1px solid ${LINE};font-size:15px;color:${INK};">${esc(value)}</td>
  </tr>`;

/** Email clients need tables and inline styles, so this can't reuse the site's CSS. */
export function inquiryEmail(i: Inquiry) {
  const subject = `New brief from ${i.name}${i.company ? ` (${i.company})` : ""}`;
  const mailto = `mailto:${encodeURIComponent(i.email)}?subject=${encodeURIComponent("Re: your Tecton brief")}`;

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:${CREAM};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;font-family:${FONT};">
        <tr><td style="padding:24px 32px;background:${INK};font-size:18px;font-weight:700;letter-spacing:1px;color:${CREAM};">
          <span style="color:${SIGNAL};">T</span>ECTON
        </td></tr>
        <tr><td style="padding:32px 32px 8px;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${SIGNAL};">New project brief</p>
          <h1 style="margin:0;font-size:26px;line-height:1.2;font-weight:600;color:${INK};">${esc(i.name)} sent a brief</h1>
        </td></tr>
        <tr><td style="padding:16px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${summary(i).map(([label, value]) => row(label, value)).join("")}
          </table>
        </td></tr>
        <tr><td style="padding:24px 32px 0;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${MUTED};">What they're building</p>
          <p style="margin:0;padding:16px;background:${CREAM};font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">${esc(i.message)}</p>
        </td></tr>
        <tr><td style="padding:24px 32px 32px;">
          <a href="${esc(mailto)}" style="display:inline-block;padding:12px 24px;background:${SIGNAL};font-size:15px;font-weight:600;color:${INK};text-decoration:none;">Reply to ${esc(i.name)}</a>
        </td></tr>
        <tr><td style="padding:16px 32px;border-top:1px solid ${LINE};font-size:12px;color:${MUTED};">
          Sent from the contact form on tectonsolutions.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // Fallback for clients that don't render HTML.
  const text = [...summary(i).map(([label, value]) => `${label}: ${value}`), "", i.message].join("\n");

  return { subject, html, text };
}
