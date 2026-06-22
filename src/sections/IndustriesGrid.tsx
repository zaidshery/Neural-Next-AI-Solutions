import { useScrollReveal } from '@/hooks/useScrollReveal'

const industries = [
  { name: 'Real Estate', stat: '3x more qualified leads', gradient: 'from-nn-indigo/60 to-nn-violet/40' },
  { name: 'Schools', stat: '50% less admin workload', gradient: 'from-nn-violet/60 to-nn-pink/40' },
  { name: 'Clinics', stat: '40% more patient bookings', gradient: 'from-nn-pink/60 to-nn-indigo/40' },
  { name: 'Local Business', stat: 'Top 3 Google ranking', gradient: 'from-nn-indigo/40 to-nn-violet/60' },
  { name: 'Media Houses', stat: '2x subscriber engagement', gradient: 'from-nn-violet/40 to-nn-pink/60' },
  { name: 'Startups', stat: 'MVP launched in 4 weeks', gradient: 'from-nn-pink/40 to-nn-indigo/60' },
  { name: 'Consultants', stat: '3x more discovery calls', gradient: 'from-nn-indigo/60 to-nn-pink/40' },
  { name: 'Manufacturers', stat: 'B2B leads on autopilot', gradient: 'from-nn-violet/60 to-nn-indigo/40' },
]

export default function IndustriesGrid() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-nn-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Built for Every <span className="gradient-text">Indian Business</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            From local shops to funded startups — we speak your language.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="reveal-card group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`} />

              {/* Glass overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-white/80 font-medium">
                  {industry.stat}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
