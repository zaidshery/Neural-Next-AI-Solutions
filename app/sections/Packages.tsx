"use client"

import { Check, Sparkles } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import SectionHeader from "../components/SectionHeader"

const plans = [
  {
    name: "Starter",
    oneTime: "₹14,999",
    monthly: "₹4,999",
    suffix: { oneTime: "one-time", monthly: "/ month" },
    description: "A sharp digital foundation for local businesses.",
    features: ["5-page responsive website", "Mobile-optimized", "Basic SEO setup", "Contact form + WhatsApp button", "1 week delivery"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    oneTime: "₹34,999",
    monthly: "₹12,999",
    suffix: { oneTime: "one-time", monthly: "/ month" },
    description: "A complete acquisition and follow-up engine.",
    features: ["Everything in Starter", "AI Chatbot (Website + WhatsApp)", "Lead capture funnel", "CRM integration", "Social media automation", "2-3 weeks delivery", "Monthly support"],
    cta: "Book This Package",
    featured: true,
  },
  {
    name: "Enterprise",
    oneTime: "Custom",
    monthly: "Custom",
    suffix: { oneTime: "pricing", monthly: "retainer" },
    description: "Purpose-built software for serious scale.",
    features: ["Everything in Growth", "Custom SaaS/CRM", "Advanced automation", "Multi-channel funnels", "Dedicated team", "Priority support"],
    cta: "Talk to Us",
  },
]

export default function Packages() {
  const reduceMotion = useReducedMotion()
  const [monthly, setMonthly] = useState(false)
  return (
    <section id="pricing" className="section-shell pricing-section">
      <div className="container">
        <SectionHeader eyebrow="Transparent pricing" title="Invest in Growth. Not Overhead." description="Start where you are. Upgrade as you scale." />
        <div className="billing-toggle" role="group" aria-label="Billing frequency">
          <button className={!monthly ? "active" : ""} onClick={() => setMonthly(false)} aria-pressed={!monthly}>One-time</button>
          <button className={monthly ? "active" : ""} onClick={() => setMonthly(true)} aria-pressed={monthly}>Monthly maintenance</button>
          <motion.span layout className={monthly ? "toggle-indicator toggle-indicator--right" : "toggle-indicator"} transition={{ type: "spring", stiffness: 440, damping: 34 }} />
        </div>
        <div className="pricing-grid">
          {plans.map(plan => (
            <motion.article className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`} key={plan.name} whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
              {plan.featured ? <span className="popular-badge"><Sparkles size={13} /> Most Popular</span> : null}
              <div className="pricing-card-head"><p>{plan.name}</p><span>{plan.description}</span></div>
              <div className="price"><motion.strong key={monthly ? "monthly" : "once"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>{monthly ? plan.monthly : plan.oneTime}</motion.strong><small>{monthly ? plan.suffix.monthly : plan.suffix.oneTime}</small></div>
              <div className="price-divider" />
              <ul>{plan.features.map(feature => <li key={feature}><span><Check size={13} /></span>{feature}</li>)}</ul>
              <a href="#contact" className="pricing-cta">{plan.cta}</a>
            </motion.article>
          ))}
        </div>
        <p className="pricing-note">All packages include 30-day post-launch support, performance tuning, and a recorded handover.</p>
      </div>
    </section>
  )
}
