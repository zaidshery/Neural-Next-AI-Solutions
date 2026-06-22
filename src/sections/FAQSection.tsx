import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: "What's the investment for a typical project?",
    answer:
      'Starter websites begin at ₹14,999. AI chatbots at ₹9,999. Complete growth systems range from ₹34,999 to ₹1,50,000. We provide a detailed, itemized quote after our discovery call — no hidden costs, no scope creep.',
  },
  {
    question: 'How fast can you actually deliver?',
    answer:
      'A 5-page website: 5-7 days. AI chatbot: 3-5 days. Full automation system with CRM + marketing: 2-4 weeks. We commit to timelines upfront and update you weekly.',
  },
  {
    question: 'Will the WhatsApp bot understand Hindi and Hinglish?',
    answer:
      'Yes — our bots support Hindi, English, Hinglish, Tamil, Telugu, and Marathi. They understand context, local expressions, and can switch languages mid-conversation.',
  },
  {
    question: 'Do you handle the marketing too, or just the tech?',
    answer:
      'Both. We build the tech (website, bot, CRM) AND run the growth (Meta/Google ads, content, email sequences). One team, one strategy, one invoice.',
  },
  {
    question: 'I have a startup idea. Can you build the entire product?',
    answer:
      'Absolutely. We specialize in MVP development for Indian startups — from wireframes to launch to first 100 customers. AI-powered, investor-ready.',
  },
  {
    question: "I'm a small business. Is this too complex for me?",
    answer:
      'Not at all. We design for simplicity. You get a dashboard, a manual, and a 30-minute training call. If you can use WhatsApp, you can use our systems.',
  },
  {
    question: 'What happens after we go live?',
    answer:
      '30 days of free support for tweaks and fixes. Then choose our Growth Plan (₹2,999/month) for hosting, updates, security, and monthly optimization calls.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useScrollReveal<HTMLElement>()

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section ref={sectionRef} id="faq" className="py-24 md:py-32 bg-nn-dark">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything before you say yes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border-b border-white/5 last:border-b-0"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-base md:text-lg font-medium text-white pr-4 group-hover:text-zinc-200 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-nn-indigo border-nn-indigo' : ''
                    }`}
                  >
                    {isOpen ? (
                      <X className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-400" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
