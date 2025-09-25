import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, CheckCircle, Users, MapPin, Shield, TrendingUp, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
const SocialProofModern = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonials = [{
    name: "Maria Silva",
    location: "Barra da Tijuca",
    text: "Incrível! Meu sofá ficou como novo. O cheiro ruim que tinha há meses desapareceu completamente. Super recomendo a Machado Clean!",
    rating: 5,
    service: "Higienização de Sofá",
    gradient: "from-blue-600 to-blue-500"
  }, {
    name: "Carlos Santos",
    location: "Copacabana",
    text: "Profissionais muito competentes. Chegaram no horário, fizeram um trabalho impecável no meu colchão. Valeu cada centavo!",
    rating: 5,
    service: "Higienização de Colchão",
    gradient: "from-blue-600 to-blue-500"
  }, {
    name: "Ana Rodriguez",
    location: "Tijuca",
    text: "Serviço de qualidade excepcional. Meu estofado do carro ficou perfeito, sem manchas e com cheiro fresquinho. Muito satisfeita!",
    rating: 5,
    service: "Higienização Automotiva",
    gradient: "from-blue-600 to-blue-500"
  }, {
    name: "Roberto Oliveira",
    location: "Méier",
    text: "A garantia de 6 meses me deu confiança para contratar. O resultado superou minhas expectativas. Empresa séria e profissional.",
    rating: 5,
    service: "Impermeabilização",
    gradient: "from-blue-600 to-blue-500"
  }];
  const trustBadges = [{
    icon: Users,
    value: "500+",
    label: "Clientes Atendidos",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30"
  }, {
    icon: Star,
    value: "4.9",
    label: "Avaliação Google",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30"
  }, {
    icon: CheckCircle,
    value: "98%",
    label: "Satisfação",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30"
  }, {
    icon: TrendingUp,
    value: "6",
    label: "Anos de Experiência",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <>
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
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
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
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          .animate-shimmer {
            animation: shimmer 2s linear infinite;
          }
        `}
      </style>

      <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 bg-background">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="socialGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#socialGrid)" />
          </svg>
        </div>
            
        <div className="container mx-auto px-4 relative z-10">
          {/* Header - same style as hero */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              O que nossos{" "}
              <span className="text-blue-600 dark:text-blue-400">
                clientes dizem
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mais de 500 famílias já transformaram seus estofados conosco
            </p>
          </div>

          {/* Trust Badges - same style as hero features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustBadges.map((badge, index) => <div key={index} className="p-6 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <badge.icon className={cn("w-6 h-6", badge.color)} />
                  </div>
                  
                  <div className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    {badge.value}
                  </div>
            
                  <p className="text-sm text-muted-foreground">
                    {badge.label}
                  </p>
                </div>
              </div>)}
          </div>

          {/* Testimonials Carousel - simplified */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <div className="relative p-8 md:p-12">
                {/* Quote Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Quote className="text-blue-600 dark:text-blue-400" size={24} />
                </div>

                {/* Testimonial Content */}
                <div>
                  <div className="mb-8">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      
                      <div>
                        <div className="font-bold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>

                    {/* Rating & Service */}
                    <div className="text-right">
                      <div className="flex mb-2 justify-end">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-current" />)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={cn("w-3 h-3 rounded-full transition-all duration-300", currentIndex === index ? "bg-blue-600 w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50")} />)}
            </div>
          </div>

          {/* Guarantee Section */}
          <div className={cn("max-w-3xl mx-auto text-center opacity-0", isVisible && "animate-scale-in [animation-delay:900ms]")}>
            <div className="relative p-8 md:p-12 rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 via-background/50 to-primary/5 backdrop-blur-sm">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-3xl blur-2xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                

                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Satisfação Garantida
            </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Junte-se a centenas de clientes satisfeitos. Se não ficar 100% satisfeito,{" "}
                  <span className="text-accent font-semibold">seu dinheiro de volta em até 30 dias.</span>
                </p>

                {/* Trust Elements */}
                <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Garantia de Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Profissionais Certificados</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>;
};
export default SocialProofModern;