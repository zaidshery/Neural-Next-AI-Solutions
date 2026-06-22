import { ArrowRight, ArrowUpRight } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeader from "../components/SectionHeader"
import { LocalGrowthPreview, PropertySystemPreview, SchoolSystemPreview } from "../components/Mockups"

const cases = [
  {
    title: "Real Estate Lead Engine",
    description: "Complete lead capture for a Mumbai developer.",
    tags: ["WhatsApp Bot", "CRM", "Landing Page"],
    results: ["3x lead volume", "70% faster response", "₹0 manual follow-up"],
    Preview: PropertySystemPreview,
  },
  {
    title: "AI School Admission Assistant",
    description: "Admissions handled instantly across web and WhatsApp.",
    tags: ["AI Chatbot", "Payment", "Analytics"],
    results: ["50% less calls", "2x inquiries", "Zero delays"],
    Preview: SchoolSystemPreview,
  },
  {
    title: "Local Business Growth Funnel",
    description: "Search, reviews, and bookings working as one system.",
    tags: ["SEO", "Reviews", "Automation"],
    results: ["Top 3 ranking", "40% walk-in increase", "15hrs saved"],
    Preview: LocalGrowthPreview,
  },
]

export default function DemoSystems() {
  return (
    <section id="work" className="section-shell cases-section">
      <div className="container">
        <Reveal><SectionHeader eyebrow="Selected systems" title="Systems We&apos;ve Built" description="Real concepts. Real architecture. Ready for your business." /></Reveal>
        <p className="case-scroll-cue">Swipe to explore systems <ArrowRight size={14} /></p>
        <div className="cases-grid">
          {cases.map((item, index) => (
            <Reveal className="case-card" key={item.title} delay={index * 0.1}>
              <div className="case-preview-wrap"><item.Preview /></div>
              <div className="case-content">
                <div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <h3>{item.title}</h3><p>{item.description}</p>
                <div className="case-results">{item.results.map(result => <span key={result}>{result}</span>)}</div>
                <a href="#contact">View system diagram <ArrowUpRight size={15} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
