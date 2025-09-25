import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
interface WhatsAppButtonMinimalProps {
  message?: string;
  phone?: string;
}
const WhatsAppButtonMinimal = ({
  message = "Olá! Vi o site da Machado Clean e quero saber mais sobre os serviços!",
  phone = "5521999999999"
}: WhatsAppButtonMinimalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    // Mostrar botão após 2 segundos
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    // Mostrar tooltip após 5 segundos
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);

    // Esconder tooltip após 10 segundos
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };
  if (!isVisible) return null;
  return;
};
export default WhatsAppButtonMinimal;