import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Flame, Zap, Star, Target, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const UrgencySectionModern = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    const message = "Quero aproveitar a promoção de hoje! Preciso de um orçamento urgente!";
    const phone = "5521991612893";
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

  const urgencyBenefits = [
    {
      icon: Zap,
      title: "Agendamento Imediato",
      description: "Disponibilidade hoje mesmo",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: Star,
      title: "Maior Desconto do Ano",
      description: "30% OFF apenas hoje",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: Target,
      title: "Sem Compromisso",
      description: "Orçamento grátis via WhatsApp",
      gradient: "from-blue-600 to-blue-500"
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
            }
            50% {
              box-shadow: 0 0 40px rgba(251, 191, 36, 0.8);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.8s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          .animate-pulse-scale {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className="relative py-16 md:py-24 lg:py-32 bg-blue-600"
      >
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="urgencyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#urgencyGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-5xl mx-auto text-center">
            {/* Urgency Badge */}
            <div 
              className={cn(
                "inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold mb-8 opacity-0",
                "bg-white/20 backdrop-blur-sm border border-white/30 animate-pulse-scale",
                isVisible && "animate-slide-in-up"
              )}
            >
              <Flame size={20} className="text-yellow-400" />
              OFERTA ESPECIAL DE HOJE
              <Flame size={20} className="text-yellow-400" />
            </div>

            {/* Main Title */}
            <h2 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight opacity-0",
                isVisible && "animate-slide-in-up [animation-delay:200ms]"
              )}
            >
              Última Chance!
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-glow">
                30% OFF
              </span>{" "}
              Hoje
            </h2>

            <p 
              className={cn(
                "text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto opacity-0",
                isVisible && "animate-slide-in-up [animation-delay:400ms]"
              )}
            >
              Aproveite nossa promoção especial válida apenas hoje.
              <br />
              <strong className="text-yellow-300">Agende agora e garanta o melhor preço do ano!</strong>
            </p>

            {/* Countdown Timer */}
            <div 
              className={cn(
                "mb-12 opacity-0",
                isVisible && "animate-scale-in [animation-delay:600ms]"
              )}
            >
              <div className="text-lg font-semibold mb-6 flex items-center justify-center gap-3">
                <Clock size={24} className="text-yellow-400" />
                Esta oferta expira em:
              </div>
              
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
                {/* Hours */}
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 text-center animate-pulse-scale">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 mb-2">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-semibold opacity-80">HORAS</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg -z-10"></div>
                </div>
                
                <div className="text-4xl font-bold text-yellow-300 animate-pulse">:</div>
                
                {/* Minutes */}
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 text-center animate-pulse-scale" style={{ animationDelay: '0.5s' }}>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 mb-2">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-semibold opacity-80">MIN</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg -z-10"></div>
                </div>
                
                <div className="text-4xl font-bold text-yellow-300 animate-pulse">:</div>
                
                {/* Seconds */}
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 text-center animate-pulse-scale" style={{ animationDelay: '1s' }}>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 mb-2">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-semibold opacity-80">SEG</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg -z-10"></div>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div 
              className={cn(
                "mb-12 opacity-0",
                isVisible && "animate-scale-in [animation-delay:800ms]"
              )}
            >
              <Button 
                onClick={handleWhatsApp}
                className={cn(
                  "bg-white text-orange-600 hover:bg-yellow-50 text-xl md:text-2xl px-8 md:px-16 py-6 md:py-8",
                  "rounded-2xl font-black shadow-2xl transition-all duration-300",
                  "hover:scale-110 hover:shadow-3xl animate-glow",
                  "border-4 border-yellow-400/50"
                )}
                size="lg"
              >
                <Phone size={28} className="mr-3" />
                🚀 GARANTIR DESCONTO AGORA
                <Zap size={28} className="ml-3" />
              </Button>
              
              <p className="text-base opacity-90 mt-6 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <Zap size={16} className="text-yellow-400" />
                  Resposta em até 5 minutos
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone size={16} className="text-yellow-400" />
                  Atendimento imediato
                </span>
              </p>
            </div>

            {/* Urgency Benefits */}
            <div 
              className={cn(
                "grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16 opacity-0",
                isVisible && "animate-slide-in-up [animation-delay:1000ms]"
              )}
            >
              {urgencyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  {/* Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${benefit.gradient} blur-xl -z-10`
                  )}></div>

                  <div className={cn(
                    "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                    `bg-gradient-to-br ${benefit.gradient} group-hover:scale-110 transition-transform duration-300`
                  )}>
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="font-bold text-lg md:text-xl mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Scarcity Alert */}
            <div 
              className={cn(
                "relative p-6 md:p-8 rounded-2xl border-2 border-yellow-400/50 opacity-0",
                "bg-gradient-to-r from-red-600/80 via-orange-600/80 to-red-600/80 backdrop-blur-md",
                "animate-pulse-scale",
                isVisible && "animate-scale-in [animation-delay:1400ms]"
              )}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-red-500/30 rounded-2xl blur-2xl -z-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertTriangle className="text-yellow-400" size={32} />
                  <p className="text-xl md:text-2xl font-black">
                    ATENÇÃO: Apenas{" "}
                    <span className="text-yellow-300 text-2xl md:text-3xl">5 vagas</span>{" "}
                    restantes para hoje!
                  </p>
                  <AlertTriangle className="text-yellow-400" size={32} />
                </div>
                
                <p className="text-base md:text-lg opacity-90">
                  Última oportunidade de garantir o desconto de 30% + nossa garantia premium de 6 meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrgencySectionModern;
