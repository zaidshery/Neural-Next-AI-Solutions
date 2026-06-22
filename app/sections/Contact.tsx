"use client"

import { ArrowRight, CalendarCheck, Check, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useState } from "react"
import type { FormEvent } from "react"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`New project enquiry from ${data.get("name")}`)
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nBusiness: ${data.get("business")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    )
    window.location.href = `mailto:hello@neuralnext.ai?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-orb contact-orb--one" aria-hidden="true" /><div className="contact-orb contact-orb--two" aria-hidden="true" />
      <div className="container">
        <header className="contact-heading"><p className="eyebrow">Start a conversation</p><h2>Ready to Stop <span>Losing Leads?</span></h2><h3>Let&apos;s build your growth system.</h3><p>Tell us what you&apos;re building. We&apos;ll reply within 2 hours.</p></header>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row"><label>Name<input name="name" placeholder="Your name" autoComplete="name" required /></label><label>Business<input name="business" placeholder="Company or brand" autoComplete="organization" required /></label></div>
            <div className="form-row"><label>Phone<div className="phone-input"><span>+91</span><input name="phone" type="tel" placeholder="98765 43210" autoComplete="tel" required /></div></label><label>Email<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label></div>
            <label>What are you looking to build?<textarea name="message" placeholder="Tell us about your goals, current challenges, and ideal timeline..." rows={5} required /></label>
            <button className="contact-submit" type="submit">{sent ? <><Check size={18} /> Email ready</> : <>Send Message <ArrowRight size={18} /></>}</button>
            <p className="form-note">No spam. No sales pressure. Just a useful first conversation.</p>
          </form>
          <aside className="contact-info">
            <div className="response-badge"><span><Clock3 size={14} /> Typical response</span><strong>Under 2 hours</strong></div>
            <a className="whatsapp-large" href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><span><MessageCircle /><b>Chat on WhatsApp<small>Usually replies instantly</small></b></span><ArrowRight /></a>
            <div className="contact-list">
              <a href="tel:+919876543210"><span><Phone /></span><b>Call us<small>+91 98765 43210</small></b></a>
              <a href="mailto:hello@neuralnext.ai"><span><Mail /></span><b>Email<small>hello@neuralnext.ai</small></b></a>
              <div><span><MapPin /></span><b>Based in India<small>Working with businesses nationwide</small></b></div>
            </div>
            <div className="contact-promise"><CalendarCheck /><p><strong>A useful plan, even if we don&apos;t work together.</strong><span>Every first call ends with clear priorities and practical next steps.</span></p></div>
          </aside>
        </div>
        <div className="contact-bottom"><p>Prefer to talk? Book a 20-min strategy call - free, zero obligation.</p><a href="mailto:hello@neuralnext.ai?subject=Free%20strategy%20call">Book Free Call <ArrowRight size={16} /></a></div>
      </div>
    </section>
  )
}
