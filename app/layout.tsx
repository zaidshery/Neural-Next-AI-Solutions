import type { Metadata, Viewport } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import "./sections.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://neuralnext.ai"),
  title: "NeuralNext AI Solution | AI-Powered Websites & Automation for Indian Businesses",
  description:
    "We build full-stack websites, AI chatbots, CRM systems, and digital marketing funnels for Indian businesses. Book a free consultation.",
  keywords: [
    "AI chatbot India",
    "website development India",
    "WhatsApp automation",
    "CRM India",
    "digital marketing agency India",
    "SaaS development India",
  ],
  openGraph: {
    title: "NeuralNext AI Solution - AI-First Growth Partner",
    description: "Websites, AI bots and automation that grow your business.",
    type: "website",
    locale: "en_IN",
    siteName: "NeuralNext AI Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralNext AI Solution - AI-First Growth Partner",
    description: "Websites, AI bots and automation that grow your business.",
  },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
