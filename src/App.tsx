import { useLenis } from '@/hooks/useLenis'
import Navigation from '@/components/Navigation'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import LogoMarquee from '@/sections/LogoMarquee'
import ServicesBento from '@/sections/ServicesBento'
import IndustriesGrid from '@/sections/IndustriesGrid'
import ProblemSolution from '@/sections/ProblemSolution'
import PricingSection from '@/sections/PricingSection'
import CaseStudies from '@/sections/CaseStudies'
import ProcessTimeline from '@/sections/ProcessTimeline'
import WhyUs from '@/sections/WhyUs'
import FAQSection from '@/sections/FAQSection'
import ContactCTA from '@/sections/ContactCTA'

export default function App() {
  useLenis()

  return (
    <div className="relative bg-nn-black min-h-screen">
      <ScrollProgressBar />
      <Navigation />

      <main>
        <HeroSection />
        <LogoMarquee />
        <ServicesBento />
        <IndustriesGrid />
        <ProblemSolution />
        <PricingSection />
        <CaseStudies />
        <ProcessTimeline />
        <WhyUs />
        <FAQSection />
        <ContactCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
