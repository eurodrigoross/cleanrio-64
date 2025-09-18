import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de agendar um serviço de higienização e impermeabilização.";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      
      <div className="hero-content animate-fade-in">
        <h1 className="hero-title">
          Seu Sofá e Carro <span className="text-accent">Como Novos</span>
        </h1>
        <p className="hero-subtitle">
          Higienização & Impermeabilização Profissional no Rio<br />
          <span className="text-accent font-semibold">Proteção real contra sujeiras, ácaros e líquidos, com garantia de 6 meses certificada.</span>
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={handleWhatsApp}
            className="cta-primary animate-pulse-glow"
          >
            Agende Agora pelo WhatsApp
          </Button>
          
          <p className="text-sm opacity-80">
            ⏰ Agenda semanal com vagas limitadas para garantir qualidade do serviço
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;