import type { Metadata } from "next"
import Link from "next/link"
import Brand from "../components/Brand"

export const metadata: Metadata = { title: "Terms of Service | NeuralNext AI Solution" }

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/"><Brand /></Link>
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: June 19, 2026</p>
        <section><h2>Project agreements</h2><p>Every engagement is governed by a written proposal defining scope, timeline, fees, responsibilities, and acceptance criteria. The signed proposal takes precedence over these general terms.</p></section>
        <section><h2>Payments and delivery</h2><p>Payment milestones are stated in your proposal. Delivery dates depend on timely access, content, approvals, and feedback from the client.</p></section>
        <section><h2>Intellectual property</h2><p>Upon full payment, clients receive the rights described in their proposal. NeuralNext retains rights to pre-existing tools, reusable libraries, methods, and anonymized portfolio presentation unless otherwise agreed.</p></section>
        <section><h2>Support and liability</h2><p>Included support and service levels are defined per project. Liability is limited to fees paid for the affected service to the extent permitted by applicable law.</p></section>
        <Link className="legal-back" href="/">Return to NeuralNext</Link>
      </div>
    </main>
  )
}
