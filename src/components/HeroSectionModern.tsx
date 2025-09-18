import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Shield, Clock, Star, Award, Zap } from "lucide-react";

const HeroSectionModern = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Vi o site da Machado Clean e quero agendar um serviço de higienização!";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="hero-section">
      {/* Video Background com Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder para vídeo de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-machado-royal via-machado-light to-machado-purple opacity-95"></div>
        
        {/* Partículas flutuantes mais sofisticadas */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-machado-green/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-machado-neon/30 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-machado-purple/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-white/5 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="hero-content animate-slide-in-3d">
        <h1 className="hero-title mb-8">
          Seu Estofado <span className="text-machado-neon">Novo de Novo!</span>
        </h1>
        
        <p className="hero-subtitle mb-12">
          Higienização & Impermeabilização Profissional no Rio de Janeiro<br />
          <span className="text-machado-neon font-bold">Tecnologia avançada, resultados garantidos!</span>
        </p>

        {/* Selos Flutuantes Profissionais */}
        <div className="absolute -top-4 -left-4 glass-card px-4 py-2 text-sm animate-float bg-white/20 backdrop-blur-md border border-white/30">
          <div className="flex items-center gap-2 text-white">
            <Users size={16} />
            <span className="font-bold">+500 Clientes</span>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm animate-float bg-machado-green/20 backdrop-blur-md border border-white/30" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2 text-white">
            <Shield size={16} />
            <span className="font-bold">6 Meses Garantia</span>
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 text-sm animate-float bg-machado-neon/20 backdrop-blur-md border border-white/30" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-2 text-white">
            <Zap size={16} />
            <span className="font-bold">Atendimento Imediato</span>
          </div>
        </div>

        {/* CTA Principal Neon Ultra Melhorado */}
        <div className="mb-12 relative">
          <Button 
            onClick={handleWhatsApp}
            className="relative cta-neon animate-pulse-neon text-2xl px-16 py-8 mb-6 group overflow-hidden"
          >
            <MessageCircle className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={32} />
            <span className="relative z-10">Agendar Agora pelo WhatsApp</span>
            
            {/* Efeito de brilho que passa */}
            <div className="absolute inset-0 -top-2 -bottom-2 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          {/* Badge de urgência */}
          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            🔥 Só hoje!
          </div>
        </div>

        {/* Indicadores de Credibilidade Melhorados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card text-center group hover:scale-110 transition-all duration-500">
            <div className="relative">
              <Users className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-machado-neon transition-colors duration-300" />
              <div className="absolute -top-2 -right-2 bg-machado-neon text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            </div>
            <div className="text-4xl font-black mb-2 text-white">+500</div>
            <p className="text-sm opacity-90 font-medium">Clientes Transformados</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="glass-card text-center group hover:scale-110 transition-all duration-500">
            <div className="relative">
              <Award className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-machado-green transition-colors duration-300" />
              <div className="absolute -top-2 -right-2 bg-machado-green text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                ★
              </div>
            </div>
            <div className="text-4xl font-black mb-2 text-white">6 meses</div>
            <p className="text-sm opacity-90 font-medium">Garantia Premium</p>
            <p className="text-xs text-machado-green mt-1 font-bold">100% Certificada</p>
          </div>
          
          <div className="glass-card text-center group hover:scale-110 transition-all duration-500">
            <div className="relative">
              <Zap className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                ⚡
              </div>
            </div>
            <div className="text-4xl font-black mb-2 text-white">24h</div>
            <p className="text-sm opacity-90 font-medium">Resposta Garantida</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Online Agora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionModern;