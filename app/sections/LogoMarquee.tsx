import { Building2, Factory, GraduationCap, HeartPulse, Home, Rocket, ShoppingBag, UserRound } from "lucide-react"

const sectors = [
  [Home, "Real Estate"],
  [GraduationCap, "Schools"],
  [HeartPulse, "Clinics"],
  [ShoppingBag, "Local Business"],
  [Building2, "Media Houses"],
  [Rocket, "Startups"],
  [UserRound, "Consultants"],
  [Factory, "Manufacturers"],
] as const

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const repeated = [...sectors, ...sectors]
  return (
    <div className={`marquee-track ${reverse ? "marquee-track--reverse" : ""}`}>
      {repeated.map(([Icon, label], index) => (
        <span className="sector-pill" key={`${label}-${index}`} aria-hidden={index >= sectors.length}>
          <Icon size={18} /> {label}
        </span>
      ))}
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <section id="logos" className="logo-marquee section-shell" aria-labelledby="logo-title">
      <div className="container"><p id="logo-title">Powering growth across India</p></div>
      <div className="marquee-window"><MarqueeRow /><MarqueeRow reverse /></div>
    </section>
  )
}
