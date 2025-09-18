import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
}

const WhatsAppButton = ({ 
  message = "Olá! Gostaria de agendar um serviço de higienização.", 
  phone = "5521999999999" 
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float animate-pulse-glow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default WhatsAppButton;