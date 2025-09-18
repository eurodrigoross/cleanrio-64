import { Shield, Award, CheckCircle, Clock } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <Shield className="text-white" size={48} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Garantia de <span className="text-accent">6 Meses</span> Certificada
            </h2>
            
            <p className="text-2xl font-medium text-muted-foreground mb-8">
              "Nosso compromisso é entregar resultados reais, ou você não paga nada."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="tech-card text-center animate-slide-up">
              <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Certificado Assinado
              </h3>
              <p className="text-muted-foreground">
                Documento oficial com validade jurídica garantindo nosso compromisso
              </p>
            </div>

            <div className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Refação Gratuita
              </h3>
              <p className="text-muted-foreground">
                Se não ficar satisfeito, refazemos o serviço sem custo adicional
              </p>
            </div>

            <div className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Clock className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Suporte Completo
              </h3>
              <p className="text-muted-foreground">
                Acompanhamento e suporte durante todo o período de garantia
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              O que nossa garantia cobre:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Proteção contra líquidos e manchas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Eliminação de odores persistentes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Eficácia da impermeabilização</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />  
                <span>Durabilidade da higienização</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;