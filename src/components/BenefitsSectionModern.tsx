import React, { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Sparkles, Award, Zap, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BenefitsSectionModern = () => {
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

  const benefits = [
    {
      icon: Sparkles,
      title: "Tecnologia Avançada",
      description: "Equipamentos profissionais que removem 99,9% das bactérias e ácaros do seu estofado",
      gradient: "from-blue-600 to-blue-500",
      bgGlow: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Clock,
      title: "Secagem Rápida",
      description: "Processo exclusivo que reduz o tempo de secagem para apenas 2-4 horas",
      gradient: "from-blue-600 to-blue-500",
      bgGlow: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Shield,
      title: "Garantia Premium",
      description: "6 meses de garantia total ou seu dinheiro de volta, sem perguntas",
      gradient: "from-blue-600 to-blue-500",
      bgGlow: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Award,
      title: "Especialistas Certificados",
      description: "Equipe treinada e certificada com mais de 6 anos de experiência",
      gradient: "from-blue-600 to-blue-500",
      bgGlow: "bg-blue-50 dark:bg-blue-900/20"
    }
  ];

  const stats = [
    { value: "500+", label: "Clientes satisfeitos", icon: Heart, color: "text-blue-600 dark:text-blue-400" },
    { value: "99,9%", label: "Eliminação de bactérias", icon: Shield, color: "text-blue-600 dark:text-blue-400" },
    { value: "6", label: "Meses de garantia", icon: Award, color: "text-blue-600 dark:text-blue-400" },
    { value: "4.9★", label: "Avaliação Google", icon: TrendingUp, color: "text-blue-600 dark:text-blue-400" }
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
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes floatIcon {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(5deg); }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.8s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          .animate-float-icon {
            animation: floatIcon 3s ease-in-out infinite;
          }
        `}
      </style>

      <section 
        ref={sectionRef}
        className="relative py-16 md:py-24 lg:py-32 bg-background"
      >
        {/* Simple Background Pattern - same as hero */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="benefitsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#benefitsGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header - same style as hero */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Por que escolher a{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Machado Clean?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecnologia de ponta, resultados garantidos e a confiança de centenas de famílias cariocas
            </p>
          </div>

          {/* Benefits Grid - same style as hero features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <benefit.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section - clean and minimal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSectionModern;