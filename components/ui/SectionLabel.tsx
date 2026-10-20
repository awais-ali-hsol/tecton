export function SectionLabel({ index, title, className }: { index?: string; title: string; className?: string }) {
  return (
    <p className={`sec-label ${className ?? ""}`}>
      {index && <span className="label">({index})</span>}
      <span className="sec-label__rule" aria-hidden />
      <span className="label">{title}</span>
    </p>
  );
}
