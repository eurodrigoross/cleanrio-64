import { Button } from "@/components/ui/button";
import { Check, MessageCircle, CreditCard, Zap } from "lucide-react";

const PricingTableModern = () => {
  const packages = [
    {
      name: "Essencial",
      description: "Higienização básica profissional",
      price: 299,
      originalPrice: 450,
      savings: 151,
      features: [
        "Higienização profunda",
        "Neutralização de odores",
        "Produtos profissionais",
        "Garantia de 3 meses",
        "Técnico especializado"
      ],
      cta: "Contratar Essencial",
      popular: false
    },
    {
      name: "Premium",
      description: "Higienização + Impermeabilização",
      price: 549,
      originalPrice: 750,
      savings: 201,
      features: [
        "Tudo do plano Essencial",
        "Impermeabilização premium",
        "Proteção anti-manchas",
        "Garantia de 6 meses",
        "Certificado assinado",
        "Suporte prioritário"
      ],
      cta: "Contratar Premium",
      popular: true
    },
    {
      name: "Combo Família",
      description: "2 serviços com desconto especial",
      price: 899,
      originalPrice: 1200,
      savings: 301,
      features: [
        "2 sofás OU 1 sofá + 1 carro",
        "Impermeabilização inclusa",
        "Desconto de 25%",
        "Garantia de 6 meses",
        "Agendamento flexível",
        "Produtos premium"
      ],
      cta: "Contratar Combo",
      popular: false
    }
  ];

  const handleWhatsApp = (packageName: string, price: number) => {
    const message = `Olá! Quero contratar o plano ${packageName} por R$ ${price}. Quando podemos agendar?`;
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-machado-royal/5 rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-machado-neon/5 rounded-full translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            Planos & <span className="text-machado-neon">Preços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano perfeito para suas necessidades. Parcelamento em até 10x sem juros!
          </p>
          
          {/* Destaque da promoção */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-machado-neon to-machado-green text-white px-8 py-4 rounded-2xl font-bold text-lg animate-pulse-neon">
            <Zap size={24} />
            <span>Promoção: Até 30% OFF - Válida por tempo limitado!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`pricing-card ${pkg.popular ? 'featured' : ''} ${pkg.popular ? 'scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-machado-neon to-machado-green text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse-neon">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-machado-royal mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-4">
                  <div className="text-lg text-gray-400 line-through mb-1">De R$ {pkg.originalPrice}</div>
                  <div className="text-5xl font-black text-machado-neon mb-1">R$ {pkg.price}</div>
                  <div className="text-sm text-machado-green font-semibold">
                    Economia de R$ {pkg.savings}!
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                  <CreditCard size={16} />
                  <span>Ou 10x de R$ {Math.ceil(pkg.price / 10)} sem juros</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-machado-green mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsApp(pkg.name, pkg.price)}
                className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
                  pkg.popular 
                    ? 'cta-neon text-white' 
                    : 'bg-machado-royal hover:bg-machado-light text-white hover:scale-105'
                }`}
              >
                <MessageCircle className="mr-2" size={20} />
                {pkg.cta}
              </Button>

              {pkg.popular && (
                <div className="text-center mt-4 text-sm text-machado-green font-semibold">
                  ⚡ Resposta em até 5 minutos!
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Garantias e benefícios */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-machado-royal">Todos os planos incluem:</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-sm font-semibold text-machado-royal">Garantia Certificada</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚚</div>
                <p className="text-sm font-semibold text-machado-royal">Atendimento Domiciliar</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💳</div>
                <p className="text-sm font-semibold text-machado-royal">Parcelamento 10x</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-sm font-semibold text-machado-royal">Satisfação 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTableModern;