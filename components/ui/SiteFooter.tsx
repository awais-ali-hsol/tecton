import Link from "next/link";
import { Logo, LogoMark } from "@/components/Logo";
import { contact, socials } from "@/lib/data";

const NAV = [
  { href: "/work/", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/about/", label: "Studio" },
  { href: "/contact/", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr theme-ink">
      {/* ── Large wordmark band ── */}
      <div className="ftr__wordmark" aria-hidden>
        <LogoMark className="ftr__mark" />
        {"ecton".split("").map((c, i) => (
          <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>{c}</span>
        ))}
      </div>

      {/* ── Bottom strip ── */}
      <div className="ftr__strip">
        <div className="wrap ftr__strip-inner">
          {/* Logo + email */}
          <div className="ftr__strip-brand">
            <Logo width={96} />
            <a href={`mailto:${contact.email}`} className="ftr__email">{contact.email}</a>
          </div>

          {/* Nav links */}
          <nav className="ftr__nav" aria-label="Footer">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="ftr__nav-link">{item.label}</Link>
            ))}
          </nav>

          {/* Socials + copyright */}
          <div className="ftr__strip-end">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="ftr__social label">{s.label}</a>
            ))}
            <span className="ftr__copy label">© {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
