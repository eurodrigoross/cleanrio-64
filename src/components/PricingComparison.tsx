import { TrendingDown, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingComparison = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Vi os preços especiais e gostaria de agendar um serviço.";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <TrendingDown className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Preços que Cabem no Seu Bolso
            </h2>
            <p className="text-xl text-muted-foreground">
              Compare nossos preços com o mercado e veja a diferença
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Mercado */}
            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Valor de Mercado
              </h3>
              <div className="text-4xl font-bold text-muted-foreground mb-4 line-through">
                R$ 500 - R$ 700
              </div>
              <p className="text-muted-foreground">
                Preço médio cobrado pela concorrência
              </p>
            </div>

            {/* Nosso Preço */}
            <div className="tech-card text-center border-2 border-accent animate-pulse-glow">
              <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                OFERTA ESPECIAL
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Nosso Valor
              </h3>
              <div className="text-5xl font-bold text-accent mb-2">
                A partir de
              </div>
              <div className="text-6xl font-bold text-accent mb-4">
                R$ 299
              </div>
              <p className="text-muted-foreground">
                Economia de até R$ 400!
              </p>
            </div>

            {/* Parcelamento */}
            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Parcelamento
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                Até 10x
              </div>
              <p className="text-muted-foreground">
                Sem juros no cartão de crédito
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Por que conseguimos oferecer preços melhores?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Atendimento Direto</h4>
                  <p className="text-muted-foreground text-sm">Sem intermediários, preço direto da fonte</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Tecnologia Própria</h4>
                  <p className="text-muted-foreground text-sm">Equipamentos próprios reduzem custos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Volume de Serviços</h4>
                  <p className="text-muted-foreground text-sm">Alta demanda permite preços competitivos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Eficiência Operacional</h4>
                  <p className="text-muted-foreground text-sm">Processos otimizados para melhor custo-benefício</p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleWhatsApp}
            className="cta-primary text-xl px-12 py-6"
          >
            Aproveitar Preço Especial Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;