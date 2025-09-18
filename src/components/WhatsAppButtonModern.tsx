import { MessageCircle, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface WhatsAppButtonModernProps {
  message?: string;
  phone?: string;
}

const WhatsAppButtonModern = ({ 
  message = "Olá! Vi o site da Machado Clean e quero saber mais sobre os serviços!", 
  phone = "5521999999999" 
}: WhatsAppButtonModernProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Mostrar botão após 2 segundos
    const showTimer = setTimeout(() => setIsVisible(true), 2000);
    
    // Alternar pulso a cada 5 segundos
    const pulseTimer = setInterval(() => {
      setShowPulse(prev => !prev);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(pulseTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-3d">
      {/* Botão principal */}
      <button
        onClick={handleWhatsAppClick}
        className={`whatsapp-float group relative ${showPulse ? 'animate-pulse-neon' : ''}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} className="transition-transform duration-300 group-hover:scale-110" />
        
        {/* Indicador de notificação */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold text-white">1</span>
        </div>
        
        {/* Efeito de ondas */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </button>

      {/* Tooltip animado */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-lg p-4 min-w-72 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-machado-royal">Machado Clean Online</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Oi! 👋 Como posso ajudar você hoje?
          </p>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Zap size={12} className="text-machado-neon" />
            <span>Resposta em até 5 minutos</span>
          </div>
          
          {/* Seta do tooltip */}
          <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      </div>

      {/* Badge promocional */}
      {showPulse && (
        <div className="absolute -top-16 -left-24 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-2xl text-sm font-bold animate-float shadow-lg">
          🔥 30% OFF Hoje!
          <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButtonModern;