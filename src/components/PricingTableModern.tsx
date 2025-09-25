import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Phone, Crown, Zap, Shield, Award } from "lucide-react";
import { cn } from "@/lib/utils";
const PricingTableModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const handleWhatsApp = (plan: string) => {
    const message = `Olá! Tenho interesse no plano ${plan}. Gostaria de agendar um orçamento!`;
    const phone = "5521991612893";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  const plans = [{
    name: "Essencial",
    description: "Ideal para higienização básica",
    price: "A partir de R$ 89",
    features: ["Higienização profunda", "Aspiração potente", "Produtos atóxicos", "Secagem rápida", "Garantia de 3 meses"],
    cta: "Quero Meu Orçamento",
    popular: false,
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-white to-gray-50 dark:from-gray-900 dark:to-gray-800",
    icon: Zap
  }, {
    name: "Completo",
    description: "Mais escolhido pelos clientes",
    price: "A partir de R$ 149",
    features: ["Tudo do plano Essencial", "Impermeabilização premium", "Anti-ácaros e anti-bactérias", "Proteção contra manchas", "Garantia de 6 meses", "Desconto no retorno"],
    cta: "Calcular Preço Exclusivo",
    popular: true,
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30",
    icon: Shield
  }, {
    name: "Premium",
    description: "Máxima proteção e durabilidade",
    price: "A partir de R$ 199",
    features: ["Tudo do plano Completo", "Tratamento nano-tecnológico", "Proteção UV avançada", "Atendimento prioritário", "Garantia de 12 meses", "Manutenção gratuita"],
    cta: "Quero Meu Orçamento",
    popular: false,
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-white to-gray-50 dark:from-gray-900 dark:to-gray-800",
    icon: Crown
  }];
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
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.8s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          .animate-shimmer {
            animation: shimmer 2s linear infinite;
          }
          
          .animate-bounce-subtle {
            animation: bounce 2s ease-in-out infinite;
          }
        `}
      </style>

      <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 bg-background">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header - same style as hero */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Escolha o{" "}
              <span className="text-blue-600 dark:text-blue-400">
                plano ideal
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparência total nos preços. Sem taxas ocultas, sem surpresas.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => <div key={index} className={cn("group relative overflow-hidden rounded-3xl border backdrop-blur-sm", "bg-background/50 hover:bg-background/80", "transition-all duration-500 opacity-0", "hover:scale-105 hover:-translate-y-2", plan.popular ? "border-2 border-green-500/30 shadow-2xl shadow-green-500/10" : "border-border/50 hover:border-primary/30", isVisible && "animate-scale-in")} style={{
            animationDelay: `${400 + index * 200}ms`
          }}>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

                {/* Popular Badge */}
                {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg animate-bounce-subtle">
                      <Star size={16} />
                      Mais Popular
                    </div>
                  </div>}

                {/* Glow Effect */}
                <div className={cn("absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", `bg-gradient-to-br ${plan.gradient} blur-2xl -z-10`)}></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={cn("w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center", `bg-gradient-to-br ${plan.gradient} group-hover:scale-110 transition-transform duration-300`)}>
                    <plan.icon className="text-white" size={32} />
                  </div>

                  {/* Plan Info */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                      {plan.description}
                    </p>
                    <div className={cn("text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent", `${plan.gradient.replace('to-', 'to-')} group-hover:scale-110 transition-transform duration-300 inline-block`)}>
                      {plan.price}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3 group/item">
                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", `bg-gradient-to-br ${plan.gradient} group-hover/item:scale-110 transition-transform duration-300`)}>
                          <CheckCircle size={14} className="text-white" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>)}
                  </ul>

                  {/* CTA Button */}
                  <Button onClick={() => handleWhatsApp(plan.name)} size="lg" className={cn("w-full transition-all duration-300 group/button", plan.popular ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-green-500/25 text-white` : "border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5")}>
                    <Phone size={20} className="mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                    {plan.cta}
                  </Button>
                </div>
              </div>)}
          </div>

          {/* Additional Info */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className={cn("relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm opacity-0", "hover:border-blue-500/30 transition-all duration-500", isVisible && "animate-scale-in [animation-delay:1000ms]")}>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Formas de Pagamento
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    PIX (5% desconto)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Cartão de crédito até 12x
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Cartão de débito
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Dinheiro
                  </li>
                </ul>
              </div>

              <div className={cn("relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm opacity-0", "hover:border-green-500/30 transition-all duration-500", isVisible && "animate-scale-in [animation-delay:1200ms]")}>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Atendemos Todo o Rio
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Zona Sul, Norte, Oeste
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Barra da Tijuca
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Grande Tijuca
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Região Metropolitana
                  </li>
                </ul>
              </div>
            </div>

            {/* Price Guarantee */}
            <div className={cn("relative p-8 md:p-12 text-center rounded-3xl border-2 border-accent/20 opacity-0", "bg-gradient-to-br from-accent/5 via-background/50 to-primary/5 backdrop-blur-sm", isVisible && "animate-scale-in [animation-delay:1400ms]")}>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center animate-bounce-subtle">
                  <Award className="text-white" size={40} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Garantia de Menor Preço
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Encontrou um orçamento menor? Igualamos o preço + damos{" "}
                  <span className="text-accent font-semibold">10% de desconto adicional</span>.
                  Qualidade premium pelo melhor preço do Rio!
                </p>

                {/* Trust Elements */}
                <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Preço Justo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>Qualidade Premium</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Sem Taxa Oculta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default PricingTableModern;