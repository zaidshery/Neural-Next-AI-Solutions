"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import SectionHeader from "../components/SectionHeader"

const faqs = [
  ["What's the investment for a typical project?", "Most websites begin at ₹14,999, growth systems at ₹34,999, and custom SaaS or automation is scoped after a short discovery call. You receive a fixed proposal before work begins."],
  ["How fast can you actually deliver?", "A focused website typically ships in 7 days, an AI chatbot in 3-5 days, and a connected growth system in 2-4 weeks. Weekly demos keep progress visible."],
  ["Will the WhatsApp bot understand Hindi and Hinglish?", "Yes. We train the assistant on your business language, FAQs, and real customer phrasing so it can switch naturally between English, Hindi, and Hinglish."],
  ["Do you handle the marketing too, or just the tech?", "Both. We can own the landing pages, ad funnels, CRM logic, social automation, reporting, and the technical system connecting them."],
  ["I have a startup idea. Can you build the entire product?", "Yes. We can take an idea through product definition, UX, engineering, AI features, payments, analytics, launch, and iteration as one accountable team."],
  ["I'm a small business. Is this too complex for me?", "No. The goal is the opposite: you get a simple operating system while we handle the complexity behind it. We start with the smallest system that creates measurable value."],
  ["What happens after we go live?", "Every project includes 30 days of support, monitoring, fixes, and handover. Ongoing growth plans cover content, automation improvements, analytics, and conversion experiments."],
]

export default function FAQ() {
  return (
    <section id="faq" className="section-shell faq-section">
      <div className="container faq-container">
        <SectionHeader eyebrow="Clear answers" title="Questions? Answered." description="Everything you need to know before you say yes." />
        <Accordion.Root className="faq-list" type="single" collapsible defaultValue="item-0">
          {faqs.map(([question, answer], index) => (
            <Accordion.Item className="faq-item" value={`item-${index}`} key={question}>
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger"><span><small>{String(index + 1).padStart(2, "0")}</small>{question}</span><Plus aria-hidden="true" /></Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content"><div>{answer}</div></Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
