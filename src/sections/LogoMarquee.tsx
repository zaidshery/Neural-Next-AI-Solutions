const categories = [
  'Real Estate',
  'Schools',
  'Clinics',
  'Startups',
  'Manufacturers',
  'Consultants',
  'Media',
  'Local Business',
]

function MarqueeRow({ direction, speed = 30 }: { direction: 'left' | 'right'; speed?: number }) {
  const items = [...categories, ...categories, ...categories, ...categories]
  const isLeft = direction === 'left'

  return (
    <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className={`flex gap-4 ${isLeft ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((cat, i) => (
          <div
            key={`${direction}-${i}`}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-sm text-zinc-300 whitespace-nowrap hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <section className="py-20 bg-nn-black">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-sm uppercase tracking-[0.15em] text-zinc-500">
          Powering growth for businesses across India
        </p>
      </div>
      <div className="marquee-container flex flex-col gap-4">
        <MarqueeRow direction="left" speed={35} />
        <MarqueeRow direction="right" speed={30} />
      </div>
    </section>
  )
}
