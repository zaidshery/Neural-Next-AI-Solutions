import ClientEffects from "./components/ClientEffects"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import Footer from "./sections/Footer"
import Navigation from "./sections/Navigation"
import Hero from "./sections/Hero"
import LogoMarquee from "./sections/LogoMarquee"
import Services from "./sections/Services"
import WhoWeHelp from "./sections/WhoWeHelp"
import ProblemSolution from "./sections/ProblemSolution"
import Packages from "./sections/Packages"
import DemoSystems from "./sections/DemoSystems"
import Process from "./sections/Process"
import WhyUs from "./sections/WhyUs"
import FAQ from "./sections/FAQ"
import Contact from "./sections/Contact"

export default function HomePage() {
  return (
    <>
      <ClientEffects />
      <Navigation />
      <main id="main-content">
        <Hero />
        <LogoMarquee />
        <Services />
        <WhoWeHelp />
        <ProblemSolution />
        <Packages />
        <DemoSystems />
        <Process />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
