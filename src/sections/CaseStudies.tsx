import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'Real Estate Lead Engine',
    tags: ['WhatsApp Bot', 'CRM', 'Landing Page'],
    description:
      'Complete lead capture for a Mumbai developer: Property finder website, WhatsApp qualification bot, automated site visit scheduling, and broker dashboard.',
    result: '3x lead volume · 70% faster response · ₹0 manual follow-up',
    gradient: 'from-nn-indigo/30 to-nn-violet/20',
    accentColor: 'text-nn-indigo',
  },
  {
    title: 'AI School Admission Assistant',
    tags: ['AI Chatbot', 'Payment', 'Analytics'],
    description:
      '24/7 admission assistant for a CBSE school: Multilingual query handling, document collection, fee payment reminders, and parent portal.',
    result: '50% less calls · 2x inquiries · Zero admission delays',
    gradient: 'from-nn-violet/30 to-nn-pink/20',
    accentColor: 'text-nn-violet',
  },
  {
    title: 'Local Business Growth Funnel',
    tags: ['SEO', 'Reviews', 'Automation'],
    description:
      'End-to-end system for a Bangalore clinic: Google-optimized site, appointment bot, review automation, and monthly growth reports.',
    result: 'Top 3 ranking · 40% walk-in increase · 15hrs saved weekly',
    gradient: 'from-nn-pink/30 to-nn-indigo/20',
    accentColor: 'text-nn-pink',
  },
]

export default function CaseStudies() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 bg-nn-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Systems We've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Real concepts. Real architecture. Ready for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.title}
              className={`reveal-card group relative rounded-3xl p-1 bg-gradient-to-br ${item.gradient} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="relative h-full rounded-[22px] bg-[#0a0a0a] p-6 md:p-8 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs border border-white/20 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Result */}
                <p className={`text-sm font-semibold ${item.accentColor} mb-5`}>
                  {item.result}
                </p>

                {/* Link */}
                <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group/link">
                  <span>View System Diagram</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
