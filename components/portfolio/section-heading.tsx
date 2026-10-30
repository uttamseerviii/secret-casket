type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-index" aria-hidden="true">
        <span>{index}</span>
        <span className="section-heading-line" />
      </div>
      <div className="section-heading-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`section-title-${index}`}>{title}</h2>
        <p className="section-heading-description">{description}</p>
      </div>
    </div>
  )
}
