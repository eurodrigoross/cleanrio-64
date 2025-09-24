import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Droplets, CheckCircle, Star, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionModernProps {
  className?: string;
}

export default function HeroSectionModern({ className }: HeroSectionModernProps = {}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleWhatsApp = () => {
    const message = "Olá! Quero descobrir meu orçamento exclusivo para higienização e impermeabilização!";
    const phone = "5521991612893";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScrollToCalculator = () => {
    const calculatorSection = document.querySelector('[data-section="budget-calculator"]');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes appear {
            0% { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes appear-zoom {
            0% { 
              opacity: 0; 
              transform: scale(0.95); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1); 
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
            50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.5); }
          }
          
          .animate-appear {
            animation: appear 0.8s ease-out forwards;
          }
          
          .animate-appear-zoom {
            animation: appear-zoom 1s ease-out forwards;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <section
        ref={containerRef}
        className={cn(
          "relative bg-background text-foreground",
          "py-12 px-4 md:py-24 lg:py-32",
          "overflow-hidden min-h-screen",
          className,
        )}
      >
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.05" strokeWidth="1"/>
              </pattern>
              <radialGradient id="mouseGlow" cx="0" cy="0" r="1">
                <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="150"
              fill="url(#mouseGlow)"
              className="pointer-events-none transition-opacity duration-300"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
          <div className="relative z-10 flex flex-col items-center gap-8 pt-8 md:pt-16 text-center lg:gap-12">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 text-sm font-medium text-blue-600 dark:text-blue-400 animate-appear opacity-0">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mais de 500 clientes satisfeitos
            </div>

            {/* Main Heading */}
            <h1
              className={cn(
                "inline-block animate-appear opacity-0 [animation-delay:150ms]",
                "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
                "bg-clip-text text-transparent",
                "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
                "leading-[1.1] sm:leading-[1.1]",
                "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
              )}
            >
              Seu Estofado
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Novo de Novo!
              </span>
            </h1>

            {/* Description */}
            <p
              className={cn(
                "max-w-[650px] animate-appear opacity-0 [animation-delay:300ms]",
                "text-lg sm:text-xl md:text-2xl",
                "text-muted-foreground",
                "font-medium leading-relaxed",
              )}
            >
              Higienização profissional com tecnologia avançada no Rio de Janeiro.
              <br />
              <strong className="text-blue-600 dark:text-blue-400">Garantia de 6 meses</strong> ou seu dinheiro de volta.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl animate-appear opacity-0 [animation-delay:450ms]">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Proteção Duradoura</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Impermeabilização Total</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Tecnologia Avançada</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md
              animate-appear opacity-0 [animation-delay:600ms]"
            >
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className={cn(
                  "bg-blue-600 hover:bg-blue-700",
                  "text-white shadow-lg animate-pulse-glow",
                  "transition-all duration-300 group",
                  "flex-1 sm:flex-none"
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                👉 Quero Meu Orçamento Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={handleScrollToCalculator}
                size="lg"
                variant="outline"
                className={cn(
                  "border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500",
                  "text-foreground hover:text-blue-600 dark:hover:text-blue-400",
                  "transition-all duration-300",
                  "flex-1 sm:flex-none"
                )}
              >
                🚀 Calcular Preço Exclusivo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground animate-appear opacity-0 [animation-delay:750ms]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Resposta em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Agendamento imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
            </div>

            {/* Visual/Image */}
            <div className="relative w-full pt-12 px-4 sm:px-6 lg:px-8 animate-appear opacity-0 [animation-delay:900ms]">
              <div
                className={cn(
                  "relative z-10 rounded-2xl overflow-hidden shadow-xl",
                  "shadow-[0_0_50px_-12px_rgba(32,201,151,0.3)] dark:shadow-[0_0_50px_-12px_rgba(32,201,151,0.2)]",
                  "border border-accent/10 dark:border-accent/5 animate-float",
                  "max-w-4xl mx-auto"
                )}
              >
                <img 
                  src={heroImage} 
                  alt="Sofá limpo e higienizado pela Machado Clean"
                  className="w-full h-auto object-cover"
                />
                
                {/* Badge de resultado sobreposta */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm text-muted-foreground">Resultado em</div>
                  <div className="text-2xl font-bold text-accent">2 horas</div>
                </div>

                {/* Badge de garantia */}
                <div className="absolute top-6 right-6 bg-accent/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-white">
                  <div className="text-sm">Garantia</div>
                  <div className="text-lg font-bold">6 meses</div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}