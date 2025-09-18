import { Shield, CheckCircle, RefreshCw, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSectionMinimal = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Quero saber mais sobre a garantia de 6 meses!";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const guaranteeFeatures = [
    "Retorno da sujeira ou manchas",
    "Falha na impermeabilização",
    "Odores que retornarem",
    "Defeitos no serviço realizado"
  ];

  const processSteps = [
    "WhatsApp: resposta em até 2h",
    "Reagendamento prioritário",
    "Sem custo adicional",
    "Técnico especializado"
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Shield className="text-primary" size={40} />
            </div>
            
            <h2 className="section-title">
              Garantia <span className="text-primary">Premium</span> de 6 Meses
            </h2>
            <p className="section-subtitle">
              Nosso compromisso é entregar resultados reais, ou você não paga nada.
            </p>
          </div>

          {/* Card principal da garantia */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-primary/20 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo */}
              <div>
                <div className="text-6xl mb-6">🛡️</div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Proteção Total por <span className="text-primary">6 Meses</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Se qualquer problema retornar dentro de 6 meses, 
                  <strong className="text-primary"> refazemos gratuitamente</strong> ou 
                  devolvemos 100% do seu investimento.
                </p>

                <Button 
                  onClick={handleWhatsApp}
                  className="cta-primary"
                  size="lg"
                >
                  <Phone size={20} className="mr-2" />
                  Falar com Especialista
                </Button>
              </div>

              {/* O que está coberto */}
              <div className="bg-neutral-50/50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle className="text-accent" size={24} />
                  O que está coberto:
                </h4>
                <ul className="space-y-3">
                  {guaranteeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Como acionar */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-minimal">
              <RefreshCw className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Como Acionar a Garantia
              </h3>
              <ul className="space-y-3">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-minimal">
              <Clock className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Atendimento Prioritário
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <span className="text-muted-foreground">Resposta WhatsApp</span>
                  <span className="font-bold text-accent">2 horas</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <span className="text-muted-foreground">Reagendamento</span>
                  <span className="font-bold text-accent">24 horas</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <span className="text-muted-foreground">Custo adicional</span>
                  <span className="font-bold text-accent">R$ 0,00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compromisso premium */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center border border-primary/20">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Compromisso Premium
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Se não conseguirmos resolver em até <strong className="text-primary">2 tentativas</strong>, 
              devolvemos 100% do seu investimento + uma compensação pela inconveniência.
            </p>
          </div>

          {/* Indicadores de confiança */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Garantias honradas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Sem necessidade de retorno</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionMinimal;