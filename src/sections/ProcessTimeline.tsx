import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discover',
    duration: '30-min call',
    description: 'We map your goals, audience, and tech needs',
    side: 'left',
  },
  {
    number: '02',
    title: 'Build',
    duration: '1-3 weeks',
    description: 'Design + Development. Weekly demos, your feedback at every step',
    side: 'right',
  },
  {
    number: '03',
    title: 'Automate',
    duration: '1 week',
    description: 'Connect all tools — CRM, WhatsApp, social, ads — one seamless flow',
    side: 'left',
  },
  {
    number: '04',
    title: 'Grow',
    duration: 'Ongoing',
    description: 'Launch + Optimize. We monitor, A/B test, and scale what works',
    side: 'right',
  },
]

export default function ProcessTimeline() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="process" className="py-24 md:py-32 bg-nn-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            From Idea to <span className="gradient-text">Live System</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Transparent process. Predictable timelines. No black boxes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nn-indigo via-nn-violet to-nn-pink md:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => {
              const isLeft = step.side === 'left'
              return (
                <div
                  key={step.number}
                  className={`reveal-card relative flex items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-nn-indigo border-2 border-nn-black md:-translate-x-1.5 translate-y-6 z-10">
                    <div className="absolute inset-0 rounded-full bg-nn-indigo animate-ping opacity-40" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative inline-block rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
                      {/* Step number */}
                      <span className="absolute -top-3 text-6xl font-black text-white/[0.03] select-none">
                        {step.number}
                      </span>

                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span className="px-2.5 py-0.5 rounded-full bg-nn-indigo/10 text-nn-indigo text-xs font-medium">
                          {step.duration}
                        </span>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
