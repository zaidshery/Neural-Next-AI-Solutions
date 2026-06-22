"use client"

import dynamic from "next/dynamic"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown, Clock3, Headphones, MapPin, MessageCircle, Rocket, Sparkles, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { ChatPreview, DashboardPreview, WebsitePreview } from "../components/Mockups"

const HeroScene = dynamic(() => import("../components/HeroScene"), { ssr: false })

const headingLines = ["Websites, AI Bots &", "Automation That", "Grows Your Business"]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [showScene, setShowScene] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setShowScene(desktop.matches && !reduced.matches)
    update()
    desktop.addEventListener("change", update)
    reduced.addEventListener("change", update)
    return () => {
      desktop.removeEventListener("change", update)
      reduced.removeEventListener("change", update)
    }
  }, [])

  return (
    <section id="top" className="hero section-shell">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div className="hero-badge" initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.5 }}>
            <Sparkles size={14} /> AI-first growth partner for Indian businesses
          </motion.div>
          <h1>
            {headingLines.map((line, index) => (
              <span className={index === 2 ? "gradient-text" : ""} key={line}>
                <motion.span
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26 + index * 0.14, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.7 }}>
            NeuralNext builds intelligent digital systems for Indian businesses - from conversion-focused websites to AI chatbots and complete automation. No tech team needed.
          </motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82, duration: 0.7 }}>
            <a className="button button--gradient button--large" href="#contact"><Rocket size={18} /> Book Free Strategy Call <ArrowRight size={17} /></a>
            <a className="button button--whatsapp button--large" href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><MessageCircle size={19} /> WhatsApp Us</a>
          </motion.div>
          <motion.div className="trust-bar" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.7 }}>
            <div className="avatar-stack" aria-label="Five client avatars">{["AS", "RK", "NP", "VM", "SG"].map((initials, index) => <span key={initials} style={{ "--avatar-index": index } as React.CSSProperties}>{initials}</span>)}</div>
            <span>Trusted by 150+ Indian businesses</span><i />
            <span className="rating">★★★★★ <b>4.9/5</b></span><i />
            <span>Built in <b>India</b></span>
          </motion.div>
          <motion.div className="hero-metrics" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08, duration: 0.7 }}>
            <div className="hero-metric"><span><Clock3 /></span><div><b>Fast launches</b><small>Websites from 7 days</small></div></div>
            <div className="hero-metric"><span><Headphones /></span><div><b>Real support</b><small>30 days included</small></div></div>
            <div className="hero-metric"><span><MapPin /></span><div><b>India-first</b><small>Built for local buyers</small></div></div>
          </motion.div>
        </div>

        <motion.div className="hero-visual" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.52, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-canvas" aria-hidden="true">{showScene ? <HeroScene /> : null}</div>
          <div className="hero-card hero-card--website"><WebsitePreview /><span className="floating-label"><span className="status-dot" /> Conversion-ready</span></div>
          <div className="hero-card hero-card--chat"><ChatPreview /></div>
          <div className="hero-card hero-card--analytics"><DashboardPreview /><span className="floating-stat"><TrendingUp size={13} /> +28.4%</span></div>
          <div className="visual-glow" aria-hidden="true" />
        </motion.div>
      </div>
      <a href="#logos" className="scroll-indicator"><span>Scroll to explore</span><ChevronDown /></a>
    </section>
  )
}
