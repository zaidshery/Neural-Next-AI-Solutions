"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, X } from "lucide-react"
import { useEffect, useRef } from "react"
import SectionHeader from "../components/SectionHeader"

const problems = [
  "Website looks like 2012. No leads. No trust.",
  "Replying to DMs at midnight. Leads go cold.",
  "Social media is a full-time job with zero ROI.",
  "Competitors with worse products win on tech.",
]

const solutions = [
  "Modern, conversion-optimized site live in 7 days",
  "AI chatbot answers instantly, 24/7, in Hindi + English",
  "Automated posting + analytics showing real revenue impact",
  "Full digital stack competing with enterprise brands",
]

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.from(".problem-card", { x: -54, opacity: 0, stagger: 0.12, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: ".comparison-grid", start: "top 76%" } })
      gsap.from(".solution-card", { x: 54, opacity: 0, stagger: 0.12, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: ".comparison-grid", start: "top 76%" } })
      gsap.fromTo(".connector-line-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".comparison-grid", start: "top 72%", end: "bottom 60%", scrub: 0.7 } })
      gsap.from(".connector-node", { scale: 0.4, opacity: 0, stagger: 0.15, duration: 0.55, ease: "back.out(2)", scrollTrigger: { trigger: ".comparison-grid", start: "top 70%" } })
    }, sectionRef)
    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell comparison-section">
      <div className="container">
        <SectionHeader eyebrow="The shift" title="Why Most Indian Businesses Stay Stuck" description="And how intelligent systems change everything." />
        <div className="comparison-grid">
          <div className="comparison-column">
            <p className="comparison-label comparison-label--problem"><X size={14} /> Before NeuralNext</p>
            {problems.map((problem, index) => (
              <article className="comparison-card problem-card" key={problem}><span>{String(index + 1).padStart(2, "0")}</span><X size={17} /><p>{problem}</p></article>
            ))}
          </div>
          <div className="comparison-connector" aria-hidden="true">
            <div className="connector-line"><span className="connector-line-fill" /></div>
            {solutions.map((_, index) => <span key={index} className="connector-node" />)}
          </div>
          <div className="comparison-column">
            <p className="comparison-label comparison-label--solution"><Check size={14} /> With intelligent systems</p>
            {solutions.map((solution, index) => (
              <article className="comparison-card solution-card" key={solution}><span>{String(index + 1).padStart(2, "0")}</span><Check size={17} /><p>{solution}</p></article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
