import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Zap, Star, Flame, AlertTriangle } from "lucide-react";

const UrgencyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 34
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 2;
          minutes = 15;
          seconds = 34;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "🚨 URGENTE! Quero aproveitar a promoção que termina hoje! Vamos agendar meu serviço agora?";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-32 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white relative overflow-hidden">
      {/* Elementos animados de fundo mais intensos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-400/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-32 w-28 h-28 bg-red-400/30 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        
        {/* Efeito de pulsação no fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-orange-500/20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Ícones de urgência múltiplos */}
        <div className="mb-8 flex justify-center items-center gap-4">
          <Flame className="w-16 h-16 text-orange-400 animate-bounce" />
          <AlertTriangle className="w-20 h-20 text-yellow-400 animate-pulse" />
          <Flame className="w-16 h-16 text-red-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Badge de urgência */}
        <div className="inline-block bg-red-500 text-white px-8 py-3 rounded-full text-lg font-black mb-8 animate-pulse border-4 border-white/50">
          🚨 ÚLTIMAS HORAS! 🚨
        </div>

        <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
          <span className="text-yellow-300 drop-shadow-lg">ÚLTIMA CHANCE!</span><br/>
          <span className="text-white">Promoção Acaba Hoje</span>
        </h2>

        <p className="text-2xl md:text-4xl mb-12 font-bold max-w-4xl mx-auto">
          ⏰ Restam apenas:
        </p>

        {/* Contador regressivo melhorado */}
        <div className="countdown-timer mb-16">
          <div className="countdown-item bg-gradient-to-b from-white/30 to-white/10 border-2 border-white/40 shadow-2xl">
            <div className="text-6xl font-black text-yellow-300 animate-pulse drop-shadow-lg">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-lg font-bold opacity-90 tracking-wider">HORAS</div>
          </div>
          <div className="text-4xl font-black text-white mx-4 animate-pulse">:</div>
          <div className="countdown-item bg-gradient-to-b from-white/30 to-white/10 border-2 border-white/40 shadow-2xl">
            <div className="text-6xl font-black text-yellow-300 animate-pulse drop-shadow-lg">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-lg font-bold opacity-90 tracking-wider">MINUTOS</div>
          </div>
          <div className="text-4xl font-black text-white mx-4 animate-pulse">:</div>
          <div className="countdown-item bg-gradient-to-b from-white/30 to-white/10 border-2 border-white/40 shadow-2xl">
            <div className="text-6xl font-black text-red-300 animate-bounce drop-shadow-lg">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-lg font-bold opacity-90 tracking-wider">SEGUNDOS</div>
          </div>
        </div>

        {/* Destaque da oferta */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-card p-8 border-2 border-yellow-400/30">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
            
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              🔥 OFERTA RELÂMPAGO 🔥
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-bold mb-4 text-white">✨ Você ganha HOJE:</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>30% OFF</strong> em todos os serviços</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Impermeabilização GRÁTIS</strong> (valor R$ 150)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Garantia estendida</strong> para 8 meses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Agendamento prioritário</strong> para esta semana</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-white">⚡ Condições especiais:</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-machado-neon rounded-full"></div>
                    <span>Pagamento facilitado até <strong>12x sem juros</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-machado-neon rounded-full"></div>
                    <span>Atendimento em <strong>toda Zona Sul e Barra</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-machado-neon rounded-full"></div>
                    <span>Resposta no WhatsApp em <strong>até 5 minutos</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-machado-neon rounded-full"></div>
                    <span><strong>Satisfação 100% garantida</strong> ou reembolso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas sociais */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <p className="opacity-90">Clientes Satisfeitos</p>
          </div>
          <div className="glass-card p-6">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="opacity-90">Avaliação 5 Estrelas</p>
          </div>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">8</div>
            <p className="opacity-90">Meses de Garantia</p>
          </div>
        </div>

        {/* CTA Final Ultra Gigante */}
        <div className="mb-12 relative">
          <Button 
            onClick={handleWhatsApp}
            className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-black text-3xl md:text-4xl px-20 py-10 rounded-3xl font-black shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-neon border-4 border-white/50 group overflow-hidden"
          >
            <Flame className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={40} />
            <span className="relative z-10 drop-shadow-lg">AGENDAR PELO WHATSAPP AGORA!</span>
            
            {/* Efeito de brilho que passa */}
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100"></div>
            
            {/* Pulso de borda */}
            <div className="absolute inset-0 rounded-3xl border-4 border-white/60 animate-ping opacity-75"></div>
          </Button>
          
          {/* Setas apontando para o botão */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
            👆
          </div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-yellow-300 text-lg font-bold animate-pulse">
            CLIQUE AQUI AGORA!
          </div>
        </div>

        {/* Urgência final melhorada */}
        <div className="glass-card p-8 max-w-3xl mx-auto border-2 border-red-400/50 bg-red-500/20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <AlertTriangle className="text-yellow-400 animate-pulse" size={32} />
            <p className="text-2xl font-black">
              🚨 <span className="text-yellow-400">ATENÇÃO CRÍTICA:</span>
            </p>
            <AlertTriangle className="text-yellow-400 animate-pulse" size={32} />
          </div>
          
          <p className="text-xl font-bold mb-6 text-center">
            Apenas <span className="text-red-300 text-3xl font-black animate-pulse">8 VAGAS</span> restantes para esta semana!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-bold">Agenda Crítica</span>
              </div>
              <p className="text-sm opacity-90">Últimas vagas da semana</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-bold">Qualidade Premium</span>
              </div>
              <p className="text-sm opacity-90">Resultado garantido</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold">Resposta Imediata</span>
              </div>
              <p className="text-sm opacity-90">Atendimento em 5min</p>
            </div>
          </div>
          
          {/* Contador de pessoas interessadas */}
          <div className="mt-6 text-center">
            <p className="text-sm opacity-90">
              👥 <span className="font-bold text-yellow-300">{23 + Math.floor(Math.random() * 10)}</span> pessoas visualizaram esta oferta na última hora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCountdown;