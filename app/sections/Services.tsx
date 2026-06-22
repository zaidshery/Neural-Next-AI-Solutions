import { ArrowRight, Bot, Database, Globe2, MessageCircle, Share2, Target, Zap } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeader from "../components/SectionHeader"
import { CalendarPreview, ChatPreview, DashboardPreview, FunnelPreview, WebsitePreview, WorkflowPreview } from "../components/Mockups"

export default function Services() {
  return (
    <section id="services" className="section-shell services-section">
      <div className="container">
        <Reveal><SectionHeader eyebrow="Capabilities" title="Everything to Build, Automate & Scale" description="One partner. Full stack. Zero coordination." /></Reveal>
        <div className="services-grid">
          <Reveal className="service-card service-card--website" delay={0.02}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Globe2 /></span><span><small>01 / DIGITAL FOUNDATION</small><h3>Full-Stack Websites</h3></span></div>
            <p>Custom websites that convert visitors into leads. Fast, mobile-first, SEO-optimized.</p>
            <WebsitePreview />
            <a href="#contact">Learn more <ArrowRight size={15} /></a>
          </Reveal>

          <Reveal className="service-card service-card--ai" delay={0.1}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Bot /></span><span><small>02 / CONVERSATIONAL AI</small><h3>AI Chatbots</h3></span></div>
            <p>Intelligent assistants that qualify leads, answer questions, and book meetings while you sleep.</p>
            <ChatPreview />
          </Reveal>

          <Reveal className="service-card service-card--whatsapp" delay={0.18}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip icon-chip--green"><MessageCircle /></span><span><small>03 / 24×7 SALES</small><h3>WhatsApp Chatbots</h3></span></div>
            <p>Turn India&apos;s favorite app into your always-on sales channel.</p>
            <ChatPreview whatsapp />
          </Reveal>

          <Reveal className="service-card service-card--crm" delay={0.24}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Database /></span><span><small>04 / OPERATIONS</small><h3>SaaS & CRM Systems</h3></span></div>
            <p>Custom software and smart CRMs that organize your pipeline.</p>
            <DashboardPreview />
          </Reveal>

          <Reveal className="service-card service-card--funnels" delay={0.3}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Target /></span><span><small>05 / ACQUISITION</small><h3>Digital Marketing Funnels</h3></span></div>
            <p>Complete acquisition systems - from ad click to customer.</p>
            <FunnelPreview />
          </Reveal>

          <Reveal className="service-card service-card--social" delay={0.36}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Share2 /></span><span><small>06 / CONTENT ENGINE</small><h3>Social Media Automation</h3></span></div>
            <p>Schedule, respond, and grow across platforms without the daily grind.</p>
            <CalendarPreview />
          </Reveal>

          <Reveal className="service-card service-card--automation" delay={0.42}>
            <div className="service-accent" />
            <div className="service-heading"><span className="icon-chip"><Zap /></span><span><small>07 / SYSTEMS</small><h3>Business Automation</h3></span></div>
            <p>Connect your tools, eliminate manual work, and let systems run operations.</p>
            <WorkflowPreview />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
