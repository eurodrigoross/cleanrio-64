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

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 w-80 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-neutral-200 relative">
            <button
              onClick={handleCloseTooltip}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X size={16} className="text-neutral-500" />
            </button>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-foreground">Machado Clean Online</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">
              👋 Oi! Como posso ajudar você hoje?
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-accent">⚡</span>
              <span>Resposta em até 5 minutos</span>
            </div>
            
            {/* Seta do tooltip */}
            <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-fixed group relative"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} className="transition-transform duration-200 group-hover:scale-110" />
        
        {/* Indicador de notificação */}
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold text-white">1</span>
        </div>
        
        {/* Ondas de pulso */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </button>

      {/* Badge promocional quando tooltip não está visível */}
      {!showTooltip && (
        <div className="absolute -top-12 -left-16 bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-float shadow-lg whitespace-nowrap">
          🔥 30% OFF Hoje!
          <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-500"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButtonMinimal;