import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Globe,
  Bot,
  MessageCircle,
  Database,
  Target,
  Share2,
  Zap,
} from 'lucide-react'

const services = [
  {
    title: 'Full-Stack Websites',
    description:
      'Custom websites that convert visitors into leads. Fast, mobile-first, SEO-optimized, and built to scale with your business.',
    icon: Globe,
    gradient: 'from-nn-indigo to-nn-violet',
    size: 'large',
  },
  {
    title: 'AI Chatbots',
    description:
      'Intelligent assistants that qualify leads, answer questions, and book meetings — while you sleep.',
    icon: Bot,
    gradient: 'from-nn-violet to-nn-pink',
    size: 'medium',
  },
  {
    title: 'WhatsApp Chatbots',
    description:
      "Turn India's favorite app into your 24/7 sales channel. Auto-replies, broadcasts, and lead capture.",
    icon: MessageCircle,
    gradient: 'from-nn-pink to-nn-indigo',
    size: 'medium',
  },
  {
    title: 'SaaS & CRM Systems',
    description:
      'Custom software and smart CRMs that organize your pipeline and automate follow-ups.',
    icon: Database,
    gradient: 'from-nn-indigo to-nn-pink',
    size: 'medium',
  },
  {
    title: 'Digital Marketing Funnels',
    description:
      'Complete acquisition systems — from ad click to customer conversion.',
    icon: Target,
    gradient: 'from-nn-violet to-nn-indigo',
    size: 'medium',
  },
  {
    title: 'Social Media Automation',
    description:
      'Schedule, respond, and grow across all platforms without spending hours daily.',
    icon: Share2,
    gradient: 'from-nn-pink to-nn-violet',
    size: 'wide',
  },
  {
    title: 'Business Automation',
    description:
      'Connect your tools, eliminate manual work, and let systems run your operations.',
    icon: Zap,
    gradient: 'from-nn-indigo to-nn-violet',
    size: 'tall',
  },
]

export default function ServicesBento() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 bg-nn-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Everything to Build, Automate{' '}
            <span className="gradient-text">& Scale</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            One partner. Full stack. Zero coordination headaches.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Large card - Full-Stack Websites */}
          <div className="reveal-card group relative md:col-span-2 md:row-span-2 rounded-3xl bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-nn-indigo to-nn-violet rounded-full opacity-60" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nn-indigo to-nn-violet flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Full-Stack Websites
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                Custom websites that convert visitors into leads. Fast, mobile-first,
                SEO-optimized, and built to scale with your business.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-nn-indigo text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Medium cards row 1 */}
          {services.slice(1, 3).map((service) => (
            <div
              key={service.title}
              className="reveal-card group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r rounded-full opacity-60" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Medium cards row 2 */}
          {services.slice(3, 5).map((service) => (
            <div
              key={service.title}
              className="reveal-card group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r rounded-full opacity-60" />
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Wide card - Social Media Automation */}
          <div className="reveal-card group relative md:col-span-2 rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-nn-pink to-nn-violet rounded-full opacity-60" />
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nn-pink to-nn-violet flex items-center justify-center flex-shrink-0">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Social Media Automation
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                  Schedule, respond, and grow across all platforms without spending
                  hours daily.
                </p>
              </div>
            </div>
          </div>

          {/* Tall card - Business Automation */}
          <div className="reveal-card group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-nn-indigo to-nn-violet rounded-full opacity-60" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nn-indigo to-nn-violet flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Business Automation
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Connect your tools, eliminate manual work, and let systems run your
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
