import { BriefcaseBusiness, Building2, Factory, GraduationCap, HeartPulse, Radio, Rocket, Store } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeader from "../components/SectionHeader"

type Industry = { name: string; result: string; Icon: LucideIcon; art: string }

const industries: Industry[] = [
  { name: "Real Estate", result: "3x more qualified leads", Icon: Building2, art: "buildings" },
  { name: "Schools", result: "50% less admin workload", Icon: GraduationCap, art: "school" },
  { name: "Clinics", result: "40% more patient bookings", Icon: HeartPulse, art: "clinic" },
  { name: "Local Business", result: "Top 3 Google ranking", Icon: Store, art: "store" },
  { name: "Media Houses", result: "2x subscriber engagement", Icon: Radio, art: "media" },
  { name: "Startups", result: "MVP launched in 4 weeks", Icon: Rocket, art: "rocket" },
  { name: "Consultants", result: "3x more discovery calls", Icon: BriefcaseBusiness, art: "consultant" },
  { name: "Manufacturers", result: "B2B leads on autopilot", Icon: Factory, art: "factory" },
]

function IndustryIllustration({ Icon, art }: Pick<Industry, "Icon" | "art">) {
  return (
    <div className={`industry-art industry-art--${art}`} aria-hidden="true">
      <span className="shape shape--one" />
      <span className="shape shape--two" />
      <span className="shape shape--three" />
      <span className="shape shape--four" />
      <span className="industry-icon"><Icon /></span>
      <span className="dot-field">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</span>
    </div>
  )
}

export default function WhoWeHelp() {
  return (
    <section className="section-shell industries-section">
      <div className="container">
        <Reveal><SectionHeader eyebrow="Industries" title="Built for Every Indian Business" description="From local shops to funded startups. Systems shaped around how your customers actually buy." /></Reveal>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <Reveal className="industry-card" key={industry.name} delay={(index % 4) * 0.07}>
              <IndustryIllustration Icon={industry.Icon} art={industry.art} />
              <div className="industry-copy"><span><industry.Icon size={16} /></span><div><h3>{industry.name}</h3><p>{industry.result}</p></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
