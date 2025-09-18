import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, X, Crown, Zap, Star } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  popular: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  highlight?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Higienização Básica",
    price: 199,
    originalPrice: 299,
    popular: false,
    features: [
      "Limpeza profunda do estofado",
      "Remoção de manchas superficiais", 
      "Aspiração completa",
      "Produtos nacionais",
      "Garantia de 30 dias"
    ],
    notIncluded: [
      "Impermeabilização",
      "Produtos premium",
      "Garantia estendida"
    ],
    ctaText: "Escolher Básico"
  },
  {
    id: "premium",
    name: "Premium Clean",
    price: 349,
    originalPrice: 499,
    popular: true,
    badge: "+ Vendido",
    features: [
      "Higienização profunda premium",
      "Remoção de todas as manchas",
      "Aspiração + extração a vapor",
      "Produtos importados premium",
      "Tratamento anti-ácaros",
      "Garantia de 6 meses",
      "Atendimento prioritário"
    ],
    ctaText: "Quero Premium",
    highlight: true
  },
  {
    id: "complete",
    name: "Complete Protection",
    price: 449,
    originalPrice: 649,
    popular: false,
    badge: "Mais Completo",
    features: [
      "Tudo do Premium Clean",
      "Impermeabilização premium",
      "Proteção UV anti-desbotamento", 
      "Tratamento anti-manchas",
      "Kit de manutenção grátis",
      "Garantia de 8 meses",
      "Revisão gratuita em 3 meses"
    ],
    ctaText: "Proteção Total"
  }
];

const competitorPrices = [
  { name: "Concorrente A", price: "R$ 450 - R$ 600" },
  { name: "Concorrente B", price: "R$ 380 - R$ 550" },
  { name: "Concorrente C", price: "R$ 420 - R$ 580" }
];

const PricingComparative = () => {
  const handleWhatsApp = (plan: PricingPlan) => {
    const message = `Olá! Quero contratar o plano ${plan.name} por R$ ${plan.price}. Quando podem agendar?`;
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            Preços que <span className="text-machado-neon">Cabem no seu Bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare nossos preços com a concorrência • Mesma qualidade, menor preço • Garantia estendida
          </p>

          {/* Comparação com concorrentes */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-red-800 mb-4">🔥 Compare com a Concorrência:</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {competitorPrices.map((competitor, index) => (
                <div key={index} className="text-center">
                  <p className="font-medium text-gray-700">{competitor.name}</p>
                  <p className="text-red-600 font-bold line-through">{competitor.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-green-800 font-bold text-xl">
                Nossa Premium: R$ 349 🎯 <span className="text-sm font-normal">Economia de até R$ 251!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Preços */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative ${plan.highlight ? 'featured' : ''} ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-machado-neon text-white px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                {plan.highlight && <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-500" />}
                
                <h3 className="text-2xl font-bold text-machado-royal mb-4">{plan.name}</h3>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <p className="text-gray-500 line-through text-lg">R$ {plan.originalPrice}</p>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-black text-machado-neon">R$ {plan.price}</span>
                    {plan.originalPrice && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        -{Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Pagamento à vista ou parcelado</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-bold text-machado-royal mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500" />
                  Incluso:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded && (
                  <>
                    <h4 className="font-bold text-gray-500 mb-3 mt-6 flex items-center gap-2">
                      <X size={20} className="text-red-400" />
                      Não incluso:
                    </h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* CTA */}
              <Button
                onClick={() => handleWhatsApp(plan)}
                className={`w-full py-4 text-lg font-bold transition-all duration-300 ${
                  plan.highlight 
                    ? 'cta-neon animate-pulse-neon' 
                    : 'bg-machado-royal hover:bg-machado-royal/90 text-white'
                }`}
              >
                {plan.highlight && <Zap className="mr-2" size={20} />}
                <MessageCircle className="mr-2" size={20} />
                {plan.ctaText}
              </Button>

              {/* Garantia */}
              <div className="text-center mt-4 text-xs text-gray-500">
                🛡️ Garantia inclusa • 💳 Parcelamento sem juros
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios Extras */}
        <div className="bg-gradient-to-r from-machado-neon/10 to-machado-green/10 rounded-3xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-machado-royal mb-6">
            🎁 Benefícios Exclusivos para Todos os Planos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-4">
              <div className="text-2xl mb-2">🚚</div>
              <p className="font-bold text-sm text-machado-royal">Atendimento Domiciliar</p>
              <p className="text-xs text-gray-600">Vamos até você</p>
            </div>
            
            <div className="bg-white rounded-xl p-4">
              <div className="text-2xl mb-2">💳</div>
              <p className="font-bold text-sm text-machado-royal">12x Sem Juros</p>
              <p className="text-xs text-gray-600">No cartão de crédito</p>
            </div>
            
            <div className="bg-white rounded-xl p-4">
              <div className="text-2xl mb-2">⏰</div>
              <p className="font-bold text-sm text-machado-royal">Horário Flexível</p>
              <p className="text-xs text-gray-600">Inclusive fins de semana</p>
            </div>
            
            <div className="bg-white rounded-xl p-4">
              <div className="text-2xl mb-2">🎯</div>
              <p className="font-bold text-sm text-machado-royal">Orçamento Grátis</p>
              <p className="text-xs text-gray-600">Sem compromisso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparative;