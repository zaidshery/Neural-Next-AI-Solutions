import type { Metadata } from "next"
import Link from "next/link"
import Brand from "../components/Brand"

export const metadata: Metadata = { title: "Privacy Policy | NeuralNext AI Solution" }

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/"><Brand /></Link>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: June 19, 2026</p>
        <section><h2>Information we collect</h2><p>We collect the contact and business information you choose to provide when you email us, call us, message us on WhatsApp, or request a strategy call.</p></section>
        <section><h2>How we use information</h2><p>We use your information to respond to enquiries, prepare proposals, deliver contracted services, provide support, and improve our website and client experience.</p></section>
        <section><h2>Sharing and retention</h2><p>We do not sell personal information. We share data only with service providers needed to operate our business or when legally required, and retain it only as long as necessary.</p></section>
        <section><h2>Your choices</h2><p>You can request access, correction, or deletion of your personal information by emailing hello@neuralnext.ai.</p></section>
        <Link className="legal-back" href="/">Return to NeuralNext</Link>
      </div>
    </main>
  )
}
