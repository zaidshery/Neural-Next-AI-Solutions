import { Brain, Handshake, IndianRupee, Layers3, MapPin, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeader from "../components/SectionHeader"

type Reason = { title: string; description: string; Icon: LucideIcon }
const reasons: Reason[] = [
  { title: "AI-Native Architecture", description: "We don't bolt on AI. We architect with intelligence from day one. Every system is designed for scale.", Icon: Brain },
  { title: "Ship in Days, Not Months", description: "Websites: 7 days. Bots: 3 days. Full systems: 2-4 weeks. Speed without cutting corners.", Icon: Zap },
  { title: "Indian Market Pricing", description: "No dollar conversions. Flexible terms. Built for the reality of Indian SMB budgets.", Icon: IndianRupee },
  { title: "Full-Stack Under One Roof", description: "Design, development, AI, marketing, automation. One team. One strategy. Zero handoffs.", Icon: Layers3 },
  { title: "Built for Indian Customers", description: "Hindi, Hinglish, UPI, and local behavior patterns. Never copy-paste Western templates.", Icon: MapPin },
  { title: "Partnership, Not Project", description: "30-day free support. Monthly growth plans. We stay close to the result, not just the release.", Icon: Handshake },
]

export default function WhyUs() {
  return (
    <section className="section-shell why-section">
      <div className="container">
        <Reveal><SectionHeader eyebrow="The NeuralNext standard" title="Why Founders Choose NeuralNext" description="We&apos;re not an agency that disappears after delivery." /></Reveal>
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <Reveal className="why-card" key={reason.title} delay={(index % 3) * 0.08}>
              <span className="why-icon"><reason.Icon /></span><span className="why-number">0{index + 1}</span>
              <h3>{reason.title}</h3><p>{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
