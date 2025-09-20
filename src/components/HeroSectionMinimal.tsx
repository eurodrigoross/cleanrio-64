import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSectionMinimal = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Quero descobrir meu orçamento exclusivo para higienização!";
    const phone = "5521999999999";
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
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-16">
            {/* Conteúdo */}
            <div className="space-y-8">
              {/* Badge de confiança */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle size={16} />
                Mais de 500 clientes satisfeitos
              </div>

              {/* Título principal */}
              <h1 className="hero-title">
                Seu Estofado <span className="text-primary">Novo de Novo!</span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-subtitle">
                Higienização profissional com tecnologia avançada no Rio de Janeiro.
                <br />
                <strong>Garantia de 6 meses</strong> ou seu dinheiro de volta.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="cta-primary group"
                  size="lg"
                >
                  <Phone size={20} className="mr-2" />
                  👉 Quero Meu Orçamento Agora
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="cta-secondary"
                  onClick={handleScrollToCalculator}
                >
                  🚀 Calcular Preço Exclusivo
                </Button>
              </div>

              {/* Indicadores de confiança */}
              <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Resposta em 5 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Agendamento imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Sofá limpo e higienizado pela Machado Clean"
                  className="w-full h-auto object-cover"
                />
                
                {/* Badge de resultado */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm text-muted-foreground">Resultado em</div>
                  <div className="text-2xl font-bold text-accent">2 horas</div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMinimal;