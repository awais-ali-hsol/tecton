import type { Metadata } from "next";
import { contact } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Tecton Solutions",
  description:
    "How Tecton Solutions handles the information you send through our contact form: what we collect, why, who processes it, how long we keep it and your rights.",
  path: "/privacy/",
});

// Draft based on what the site does today. Review with the business owner before relying on it.
const UPDATED = "5 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero kicker="(Legal) — Privacy" meta={`Updated ${UPDATED}`} lines={["Privacy", <em key="p">policy.</em>]} />

        <section className="block theme-bone">
          <div className="wrap split">
            <div className="split__body split__body--narrow legal">
              <p>
                Tecton Solutions (&ldquo;we&rdquo;) runs tectonsolutions.com. This page explains what information
                we collect through the site and what we do with it.
              </p>

              <h2>What we collect</h2>
              <p>
                When you send a project enquiry, we receive what you type into the form: your name, email
                address, company (optional), the services you are interested in, budget and timeline (optional)
                and your message.
              </p>
              <p>
                The site does not use analytics or advertising cookies. If you switch between light and dark
                mode, that choice is saved in your own browser&apos;s local storage and never sent to us.
              </p>

              <h2>Why we use it</h2>
              <p>
                We use your enquiry only to reply to you and to discuss a possible project. We do not sell it,
                share it for marketing or add you to a mailing list.
              </p>

              <h2>Who processes it</h2>
              <p>
                Enquiries are delivered to our inbox by Resend, an email delivery service. The site is served
                through Cloudflare, which processes standard request data such as IP addresses to deliver and
                protect the site.
              </p>

              <h2>How long we keep it</h2>
              <p>
                We keep enquiry emails for as long as needed to respond and, if we work together, for the
                length of the engagement and any record-keeping the law requires.
              </p>

              <h2>Your rights</h2>
              <p>
                You can ask us to see, correct or delete the information you sent us. Email{" "}
                <a href={`mailto:${contact.email}`} className="link-u">{contact.email}</a> and we will respond
                within 30 days.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
