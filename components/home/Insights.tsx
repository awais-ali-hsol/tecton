import Image from "next/image";
import { posts } from "@/lib/data";
import { ArrowRight } from "@/components/ui/icons";
import { MaskLines, Reveal } from "@/components/ui/Reveal";

const READ_TIME = ["7 min read", "5 min read", "6 min read"];

function Duotone({ src, sizes }: { src: string; sizes: string }) {
  return (
    <div className="duo" aria-hidden>
      <div className="duo__base"><Image src={src} alt="" fill sizes={sizes} /></div>
      <div className="duo__color"><Image src={src} alt="" fill sizes={sizes} /></div>
    </div>
  );
}

/**
 * The journal isn't built yet, so each article links to the newsletter signup
 * ("get notified") rather than to a page that doesn't exist.
 */
export function Insights() {
  const [lead, ...rest] = posts;
  return (
    <section className="insights theme-ink" id="insights" aria-labelledby="insights-title">
      <div className="wrap">
        <header className="sec-head">
          <h2 id="insights-title" className="h-display">
            <MaskLines lines={["Notes from", <span key="l2">the <em>workshop.</em></span>]} />
          </h2>
        </header>

        <Reveal>
          <a href="#newsletter" className="jlead" aria-label={`${lead.title} — coming soon, get notified`}>
            <div className="jlead__media">
              <Duotone src={lead.image} sizes="(max-width: 900px) 100vw, 60vw" />
              <span className="jtag">Featured essay</span>
            </div>
            <div className="jlead__body">
              <div className="jlead__head">
                <span className="jissue">No.<em>01</em></span>
                <span className="label">{lead.date}</span>
              </div>
              <div>
                <span className="label jcat">{lead.category} · {READ_TIME[0]}</span>
                <h3 className="jlead__title">{lead.title}</h3>
                <p className="jexcerpt">{lead.excerpt}</p>
                <span className="jnotify">Publishing soon — get notified <ArrowRight size={16} /></span>
              </div>
            </div>
          </a>
        </Reveal>

        <div className="jgrid">
          {rest.map((p, i) => (
            <Reveal key={p.title} className={`jcard jcard--${i}`} delay={0.1 + i * 0.12}>
              <a href="#newsletter" aria-label={`${p.title} — coming soon, get notified`}>
                <div className="jcard__head">
                  <span className="jissue">No.<em>{String(i + 2).padStart(2, "0")}</em></span>
                  <span className="label">{p.category} · {READ_TIME[i + 1]}</span>
                </div>
                <div className="jcard__media">
                  <Duotone src={p.image} sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
                <h3 className="jcard__title">{p.title}</h3>
                <p className="jexcerpt">{p.excerpt}</p>
                <span className="jnotify">Get notified <ArrowRight size={16} /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
