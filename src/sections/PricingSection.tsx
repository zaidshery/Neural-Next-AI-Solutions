import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹14,999',
    period: 'one-time',
    description: 'Perfect for small businesses getting started.',
    features: [
      '5-page website',
      'Mobile-optimized',
      'Basic SEO',
      'Contact form',
      'WhatsApp button',
      '1 week delivery',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '₹34,999',
    period: 'one-time',
    description: 'Everything you need to scale your growth.',
    features: [
      'Everything in Starter',
      'AI Chatbot',
      'WhatsApp Bot',
      'Lead funnel',
      'CRM setup',
      'Social auto',
      '2-3 weeks delivery',
      'Monthly support',
    ],
    highlighted: true,
    cta: 'Book This Package',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Pricing',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Everything in Growth',
      'Custom SaaS',
      'Advanced CRM',
      'Multi-channel automation',
      'Dedicated team',
      'Priority support',
    ],
    highlighted: false,
    cta: 'Talk to Us',
  },
]

export default function PricingSection() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="pricing" className="py-24 md:py-32 bg-nn-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Invest in Growth. <span className="gradient-text">Not Overhead.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Start where you are. Upgrade as you scale. No surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal-card relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-white/[0.03] border-[1.5px] border-transparent shadow-glow-indigo'
                  : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Gradient border for highlighted card */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-3xl gradient-border" />
              )}

              <div className="relative">
                {/* Badge */}
                {plan.highlighted && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-nn-indigo to-nn-violet text-white text-xs font-medium mb-6">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                {!plan.highlighted && <div className="h-8 mb-6" />}

                {/* Plan name */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 mb-8">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-nn-indigo flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-nn-indigo to-nn-violet text-white hover:brightness-110'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
