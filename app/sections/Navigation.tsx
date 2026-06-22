"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Brand from "../components/Brand"

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
]

export default function Navigation() {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 901px)")
    const onResize = () => {
      if (desktop.matches) setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onResize)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onResize)
    }
  }, [])

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand" aria-label="NeuralNext home"><Brand /></a>
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="button button--primary button--small nav-cta" href="#contact">Book a Free Call <ArrowUpRight size={15} /></a>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation">
            <Menu size={23} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-head"><Brand /><button onClick={() => setOpen(false)} aria-label="Close navigation menu"><X /></button></div>
            <nav aria-label="Mobile navigation">
              {links.map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.07 + 0.08 }}
                >
                  <span>0{index + 1}</span>{label}<ArrowUpRight />
                </motion.a>
              ))}
            </nav>
            <a className="button button--primary" href="#contact" onClick={() => setOpen(false)}>Book a Free Strategy Call</a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
