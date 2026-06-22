import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Brain, Zap, IndianRupee, Layers, Target, Handshake } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Native Architecture',
    description:
      "We don't bolt on AI. We build with it from day one. Every system is designed for intelligence.",
    gradient: 'from-nn-indigo to-nn-violet',
  },
  {
    icon: Zap,
    title: 'Ship in Days, Not Months',
    description:
      'Websites: 7 days. Bots: 3 days. Systems: 2-4 weeks. Speed without compromise.',
    gradient: 'from-nn-violet to-nn-pink',
  },
  {
    icon: IndianRupee,
    title: 'Indian Pricing',
    description:
      'No dollar conversions. Flexible payment terms. Built for the Indian market reality.',
    gradient: 'from-nn-pink to-nn-indigo',
  },
  {
    icon: Layers,
    title: 'Full-Stack Under One Roof',
    description:
      'Design, dev, AI, marketing, automation — zero handoffs, zero coordination chaos.',
    gradient: 'from-nn-indigo to-nn-pink',
  },
  {
    icon: Target,
    title: 'Market-First Thinking',
    description:
      'Built for Indian customers — languages, payments, behavior. Not copy-paste Western templates.',
    gradient: 'from-nn-violet to-nn-indigo',
  },
  {
    icon: Handshake,
    title: 'Partnership Model',
    description:
      '30-day free support. Then monthly growth plans. We succeed when you succeed.',
    gradient: 'from-nn-pink to-nn-violet',
  },
]

export default function WhyUs() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-nn-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Founders Choose <span className="gradient-text">NeuralNext</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            We're not an agency that disappears after delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="reveal-card group rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 hover:border-nn-indigo/30 hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
