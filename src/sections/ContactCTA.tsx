import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactCTA() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you! We will get back to you within 2 hours.')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nn-indigo/10 via-nn-violet/10 to-nn-pink/10" />
      <div className="absolute inset-0 bg-nn-black/60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-nn-indigo font-medium mb-3">
            Ready to Stop Losing Leads?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's Build Your <span className="gradient-text">Growth System</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Tell us what you're building. We'll reply within 2 hours.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-nn-indigo/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-nn-indigo/50 transition-colors"
                  placeholder="Your business"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Phone *
                </label>
                <div className="flex">
                  <span className="flex-shrink-0 px-3 py-3 rounded-l-xl bg-white/[0.05] border border-r-0 border-white/10 text-zinc-400 text-sm flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-r-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-nn-indigo/50 transition-colors"
                    placeholder="98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-nn-indigo/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                What do you need?
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-nn-indigo/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-nn-indigo to-nn-violet text-white font-semibold hover:brightness-110 transition-all duration-200 hover:scale-[1.01]"
            >
              Send Message →
            </button>

            {/* Book call text */}
            <p className="text-center text-sm text-zinc-500 mt-6">
              Prefer to talk?{' '}
              <button
                type="button"
                className="text-nn-indigo hover:underline"
              >
                Book a 20-min strategy call
              </button>{' '}
              — completely free, zero obligation.
            </p>
          </form>

          {/* Direct Contact */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-nn-whatsapp/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-nn-whatsapp" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">WhatsApp</p>
                  <p className="text-white font-medium">+91-XXXXXXXXXX</p>
                  <button className="mt-2 px-4 py-2 rounded-full bg-nn-whatsapp text-black text-sm font-medium hover:bg-nn-whatsapp/90 transition-colors">
                    Chat Now
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-nn-indigo/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-nn-indigo" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Email</p>
                  <p className="text-white font-medium">hello@neuralnext.ai</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-nn-violet/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-nn-violet" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Response time */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-nn-pink/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-nn-pink" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Response Time</p>
                  <p className="text-white font-medium">Under 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
