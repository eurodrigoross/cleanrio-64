import React, { useEffect, useRef, useState } from "react";
import { Shield, CheckCircle, RefreshCw, Phone, Clock, Award, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GuaranteeSectionModern = () => {
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
    const message = "Olá! Quero saber mais sobre a garantia de 6 meses!";
    const phone = "5521991612893";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const guaranteeFeatures = [
    { text: "Retorno da sujeira ou manchas", icon: RefreshCw },
    { text: "Falha na impermeabilização", icon: Shield },
    { text: "Odores que retornarem", icon: Zap },
    { text: "Defeitos no serviço realizado", icon: Award }
  ];

  const processSteps = [
    { text: "WhatsApp: resposta em até 2h", icon: Phone, color: "text-blue-600 dark:text-blue-400" },
    { text: "Reagendamento prioritário", icon: Clock, color: "text-blue-600 dark:text-blue-400" },
    { text: "Sem custo adicional", icon: CheckCircle, color: "text-blue-600 dark:text-blue-400" },
    { text: "Técnico especializado", icon: Star, color: "text-blue-600 dark:text-blue-400" }
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
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.8s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          .animate-shimmer {
            animation: shimmer 3s linear infinite;
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className="relative py-16 md:py-24 lg:py-32 bg-background"
      >
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="guaranteeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#guaranteeGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header - same style as hero */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 mx-auto mb-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Shield className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Garantia{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Premium
                </span>{" "}
                de 6 Meses
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nosso compromisso é entregar resultados reais, ou você não paga nada.
              </p>
            </div>

            {/* Main Guarantee Card - simplified */}
            <div className="mb-16">
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="w-16 h-16 mb-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <Shield className="text-blue-600 dark:text-blue-400" size={32} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Proteção Total por{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                          6 Meses
                        </span>
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Se qualquer problema retornar dentro de 6 meses,{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">refazemos gratuitamente</span> ou 
                        devolvemos 100% do seu investimento.
                      </p>

                      <Button 
                        onClick={handleWhatsApp}
                        size="lg"
                        className={cn(
                          "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
                          "text-white shadow-lg shadow-green-500/25",
                          "transition-all duration-300 group"
                        )}
                      >
                        <Phone size={20} className="mr-2" />
                        Falar com Especialista
                      </Button>
                    </div>

                    {/* Coverage List */}
                    <div className="relative p-8 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-50/50 to-background/50 dark:from-green-950/50 dark:to-background/50">
                      <h4 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                        <CheckCircle className="text-green-500" size={24} />
                        O que está coberto:
                      </h4>
                      <div className="space-y-4">
                        {guaranteeFeatures.map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-green-500/10 hover:border-green-500/20 transition-colors duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                              <feature.icon className="text-white" size={18} />
                            </div>
                            <span className="text-muted-foreground">{feature.text}</span>
            </div>
          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div 
                className={cn(
                  "relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm opacity-0",
                  "hover:border-primary/30 transition-all duration-500",
                  isVisible && "animate-scale-in [animation-delay:800ms]"
                )}
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <RefreshCw className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Como Acionar a Garantia
            </h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-background to-muted border border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <step.icon className={cn("w-5 h-5", step.color)} />
                      <span className="text-muted-foreground">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div 
                className={cn(
                  "relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm opacity-0",
                  "hover:border-accent/30 transition-all duration-500",
                  isVisible && "animate-scale-in [animation-delay:1000ms]"
                )}
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Atendimento Prioritário
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 rounded-lg border border-green-500/20">
                    <span className="text-muted-foreground">Resposta WhatsApp</span>
                    <span className="font-bold text-green-600">2 horas</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg border border-blue-500/20">
                    <span className="text-muted-foreground">Reagendamento</span>
                    <span className="font-bold text-blue-600">24 horas</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 rounded-lg border border-purple-500/20">
                    <span className="text-muted-foreground">Custo adicional</span>
                    <span className="font-bold text-purple-600">R$ 0,00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Commitment */}
            <div 
              className={cn(
                "relative p-8 md:p-12 text-center rounded-3xl border border-primary/20 opacity-0",
                "bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm",
                isVisible && "animate-scale-in [animation-delay:1200ms]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">💎</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Compromisso Premium
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Se não conseguirmos resolver em até{" "}
                  <span className="text-primary font-semibold">2 tentativas</span>, 
                devolvemos 100% do seu investimento + uma compensação pela inconveniência.
              </p>
          </div>
        </div>

            {/* Trust Indicators */}
            <div 
              className={cn(
                "grid grid-cols-3 gap-8 mt-16 opacity-0",
                isVisible && "animate-slide-in-up [animation-delay:1400ms]"
              )}
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <p className="text-sm text-muted-foreground">Garantias honradas</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <p className="text-sm text-muted-foreground">Sem necessidade de retorno</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GuaranteeSectionModern;