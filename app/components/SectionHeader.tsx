type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description: string
  align?: "left" | "center"
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align} ${light ? "section-header--light" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  )
}
