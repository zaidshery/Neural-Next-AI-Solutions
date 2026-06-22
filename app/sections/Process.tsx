"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Bot, Compass, Rocket, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import SectionHeader from "../components/SectionHeader"

type Step = { number: string; title: string; timing: string; description: string; Icon: LucideIcon }
const steps: Step[] = [
  { number: "01", title: "Discover", timing: "30-min strategy call", description: "We map your goals, audience, bottlenecks, and the technology that will move the needle.", Icon: Compass },
  { number: "02", title: "Build", timing: "1-3 weeks", description: "Design and development move together, with a working demo in your hands every week.", Icon: Wrench },
  { number: "03", title: "Automate", timing: "1 week", description: "We connect CRM, WhatsApp, social, ads, and the follow-up logic behind every lead.", Icon: Bot },
  { number: "04", title: "Grow", timing: "Ongoing", description: "Launch, monitor, A/B test, and scale what works with clear commercial reporting.", Icon: Rocket },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.fromTo(".timeline-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 68%", scrub: 0.6 } })
      gsap.from(".timeline-card", { opacity: 0, x: (index) => index % 2 === 0 ? -50 : 50, stagger: 0.15, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".timeline", start: "top 72%" } })
      gsap.from(".timeline-node", { scale: 0, stagger: 0.16, duration: 0.5, ease: "back.out(2.1)", scrollTrigger: { trigger: ".timeline", start: "top 72%" } })
    }, sectionRef)
    return () => context.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="section-shell process-section">
      <div className="container">
        <SectionHeader eyebrow="How it works" title="From Idea to Live System" description="Transparent. Predictable. No black boxes." />
        <div className="timeline">
          <div className="timeline-line" aria-hidden="true"><span className="timeline-fill" /></div>
          {steps.map((step, index) => (
            <div className={`timeline-row ${index % 2 ? "timeline-row--right" : ""}`} key={step.number}>
              <article className="timeline-card">
                <div className="timeline-card-top"><span>{step.number}</span><step.Icon size={19} /></div>
                <h3>{step.title}</h3><strong>{step.timing}</strong><p>{step.description}</p>
              </article>
              <span className="timeline-node" aria-hidden="true">{step.number}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
