import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Phone, Crown } from "lucide-react";

const PricingTableMinimal = () => {
  const handleWhatsApp = (plan: string) => {
    const message = `Olá! Tenho interesse no plano ${plan}. Gostaria de agendar um orçamento!`;
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      name: "Essencial",
      description: "Ideal para higienização básica",
      price: "A partir de R$ 89",
      features: [
        "Higienização profunda",
        "Aspiração potente",
        "Produtos atóxicos",
        "Secagem rápida",
        "Garantia de 3 meses"
      ],
      cta: "Escolher Essencial",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Completo",
      description: "Mais escolhido pelos clientes",
      price: "A partir de R$ 149",
      features: [
        "Tudo do plano Essencial",
        "Impermeabilização premium",
        "Anti-ácaros e anti-bactérias",
        "Proteção contra manchas",
        "Garantia de 6 meses",
        "Desconto no retorno"
      ],
      cta: "Escolher Completo",
      popular: true,
      variant: "default" as const
    },
    {
      name: "Premium",
      description: "Máxima proteção e durabilidade",
      price: "A partir de R$ 199",
      features: [
        "Tudo do plano Completo",
        "Tratamento nano-tecnológico",
        "Proteção UV avançada",
        "Atendimento prioritário",
        "Garantia de 12 meses",
        "Manutenção gratuita"
      ],
      cta: "Escolher Premium",
      popular: false,
      variant: "outline" as const
    }
  ];

  return (
    <section className="section-container bg-neutral-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Escolha o <span className="text-primary">plano ideal</span>
          </h2>
          <p className="section-subtitle">
            Transparência total nos preços. Sem taxas ocultas, sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'featured' : ''} relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="badge-popular">
                  <Star size={16} className="mr-1" />
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                {plan.name === "Premium" && (
                  <Crown className="text-primary mx-auto mb-4" size={32} />
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle 
                      size={20} 
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-accent' : 'text-primary'
                      }`} 
                    />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsApp(plan.name)}
                variant={plan.variant}
                className={`w-full ${
                  plan.popular 
                    ? 'cta-primary' 
                    : 'cta-secondary'
                }`}
                size="lg"
              >
                <Phone size={20} className="mr-2" />
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-neutral-100">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                💰 Formas de Pagamento
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• PIX com 10% de desconto</li>
                <li>• Cartão de crédito até 12x</li>
                <li>• Cartão de débito</li>
                <li>• Dinheiro na entrega</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-100">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                📍 Atendemos Todo o Rio
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Zona Sul, Norte, Oeste</li>
                <li>• Barra da Tijuca</li>
                <li>• Grande Tijuca</li>
                <li>• Região Metropolitana</li>
              </ul>
            </div>
          </div>

          {/* Garantia de menor preço */}
          <div className="bg-white rounded-2xl p-8 text-center border-2 border-accent/20 shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Garantia de Menor Preço
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Encontrou um orçamento menor? Igualamos o preço + damos 10% de desconto adicional. 
              <strong className="text-accent"> Qualidade premium pelo melhor preço do Rio!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTableMinimal;