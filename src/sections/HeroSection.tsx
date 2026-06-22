import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const video = videoRef.current
    const title = titleRef.current
    const content = contentRef.current
    if (!hero || !video || !title || !content) return

    const ctx = gsap.context(() => {
      // Video dimming on scroll
      gsap.to(video, {
        filter: 'brightness(0.2)',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      })

      // Hero content fade out on scroll
      gsap.to(content, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '40% top',
          scrub: true,
        },
      })

      // 3D Title fly-in animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Title entry: fly in from bottom with 3D rotation
      tl.fromTo(
        title,
        {
          opacity: 0,
          transform: 'translate3d(0, 500px, -300px) rotate3d(1, 0, 0, -30deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotate3d(1, 0, 0, 0deg)',
          duration: 0.5,
          ease: 'power3.out',
        }
      )

      // Title exit: zoom past
      tl.to(
        title,
        {
          scale: 2,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        },
        0.5
      )

      // Entrance animations for hero content
      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.hero-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.hero-subheadline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.9, ease: 'power3.out' }
      )
    }, hero)

    return () => ctx.revert()
  }, [])

  const scrollToServices = () => {
    const el = document.querySelector('#services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="hero relative w-full min-h-[200vh]"
    >
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          <source
            src="https://video-fns.hyperbolic.agency/video-fns/uploads/1742993603221-astronaut.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        {/* 3D Title (scroll-triggered) */}
        <div className="hero-title-wrapper absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div ref={titleRef} className="hero-title opacity-0">
            HUMAN
          </div>
        </div>

        {/* Hero Content */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6"
        >
          {/* Badge */}
          <div className="hero-badge mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <Sparkles className="w-4 h-4 text-nn-indigo" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/80">
              AI-FIRST GROWTH PARTNER
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-center max-w-4xl">
            <span className="block text-white font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
              Websites, AI Bots
            </span>
            <span className="block text-white font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mt-1">
              &{' '}
              <span className="gradient-text">Automation</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline mt-6 text-center text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            NeuralNext builds intelligent digital systems for Indian businesses —
            from conversion-focused websites to AI chatbots and complete
            automation. No tech team needed.
          </p>

          {/* CTAs */}
          <div className="hero-ctas mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            >
              Book Free Strategy Call
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nn-whatsapp" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </span>
            </button>
          </div>

          {/* Trust Bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/50">
            <span>Trusted by 150+ Indian businesses</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-1 text-white/70">4.9/5</span>
            </div>
            <span>Built in India, for India</span>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToServices}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle"
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </button>
        </div>
      </div>
    </section>
  )
}
