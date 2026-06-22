import { MessageCircle } from "lucide-react"

const whatsappMessage = encodeURIComponent("Hi NeuralNext, I'd like to discuss a growth system for my business.")

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/919876543210?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with NeuralNext on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat with us</span>
      <MessageCircle size={25} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
}
