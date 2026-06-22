import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react"
import Brand from "../components/Brand"

const columns = [
  { title: "Services", links: [["Websites", "#services"], ["AI Chatbots", "#services"], ["SaaS & CRM", "#services"], ["Marketing", "#services"], ["Automation", "#services"]] },
  { title: "Company", links: [["Our work", "#work"], ["Process", "#process"], ["Packages", "#pricing"], ["FAQ", "#faq"], ["Contact", "#contact"]] },
] as const

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand"><a href="#top"><Brand /></a><p>AI-first growth partner for Indian businesses. Strategy, software, and automation under one roof.</p><span>Built for ambitious businesses in India.</span></div>
          {columns.map(column => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
          <div className="footer-column footer-connect"><h3>Connect</h3><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a><a href="#contact">Book a call <ArrowUpRight /></a><div className="socials"><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></div></div>
        </div>
        <div className="footer-bottom"><p>© 2026 NeuralNext AI Solution. Built with care in India.</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/sitemap.xml">Sitemap</a></div></div>
      </div>
    </footer>
  )
}
