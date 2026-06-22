import { useScrollReveal } from '@/hooks/useScrollReveal'
import { X, Check } from 'lucide-react'

const problems = [
  'Website looks like 2012. No leads. No trust.',
  'Replying to DMs at midnight. Leads go cold by morning.',
  'Social media is a full-time job with zero ROI tracking.',
  'Competitors with worse products win because their tech is better.',
]

const solutions = [
  'Modern, conversion-optimized site live in 7 days',
  'AI chatbot answers instantly, 24/7, in Hindi + English',
  'Automated posting + analytics that show real revenue impact',
  'Full digital stack that competes with enterprise brands',
]

export default function ProblemSolution() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-nn-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Most Indian Businesses <span className="gradient-text">Stay Stuck</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            And how we fix it with intelligent systems.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Common Problems
            </h3>
            <div className="space-y-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="reveal-card flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border-l-2 border-red-500/50"
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-nn-indigo mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nn-indigo" />
              Our Solutions
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className="reveal-card flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border-l-2 border-nn-indigo"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <Check className="w-5 h-5 text-nn-indigo flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-200 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
