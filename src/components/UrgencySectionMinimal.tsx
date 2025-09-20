import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Flame, Zap } from "lucide-react";

const UrgencySectionMinimal = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const handleWhatsApp = () => {
    const message = "🔥 Quero aproveitar a promoção de hoje! Preciso de um orçamento urgente!";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset para 24 horas quando chegar a 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-container bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de urgência */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Flame size={16} />
            OFERTA ESPECIAL DE HOJE
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Última Chance!<br />
            <span className="text-yellow-300">30% OFF</span> Hoje
          </h2>

          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Aproveite nossa promoção especial válida apenas hoje.<br />
            <strong>Agende agora e garante o melhor preço do ano!</strong>
          </p>

          {/* Contador regressivo */}
          <div className="mb-12">
            <div className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <Clock size={20} />
              Esta oferta expira em:
            </div>
            
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="countdown-item bg-white/20 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80">HORAS</div>
              </div>
              
              <div className="text-3xl font-bold text-yellow-300">:</div>
              
              <div className="countdown-item bg-white/20 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80">MIN</div>
              </div>
              
              <div className="text-3xl font-bold text-yellow-300">:</div>
              
              <div className="countdown-item bg-white/20 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80">SEG</div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="mb-12">
            <Button 
              onClick={handleWhatsApp}
              className="bg-white text-orange-500 hover:bg-yellow-50 text-xl px-12 py-6 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105"
              size="lg"
            >
              <Phone size={24} className="mr-3" />
              🚀 GARANTIR DESCONTO AGORA
              <Zap size={24} className="ml-3" />
            </Button>
            
            <p className="text-sm opacity-80 mt-4">
              ⚡ Resposta em até 5 minutos • 📱 Atendimento imediato
            </p>
          </div>

          {/* Benefícios da urgência */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Agendamento Imediato</h3>
              <p className="text-sm opacity-80">Disponibilidade hoje mesmo</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Maior Desconto do Ano</h3>
              <p className="text-sm opacity-80">30% OFF apenas hoje</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Sem Compromisso</h3>
              <p className="text-sm opacity-80">Orçamento grátis via WhatsApp</p>
            </div>
          </div>

          {/* Escassez adicional */}
          <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg font-semibold">
              ⚠️ <strong>ATENÇÃO:</strong> Apenas <span className="text-yellow-300">5 vagas</span> restantes para hoje!
            </p>
            <p className="text-sm opacity-80 mt-2">
              Última oportunidade de garantir o desconto de 30% + nossa garantia premium de 6 meses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySectionMinimal;