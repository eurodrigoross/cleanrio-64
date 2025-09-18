import { Clock, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Quero agendar meu serviço de higienização agora mesmo!";
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Clock className="w-20 h-20 mx-auto mb-8 animate-pulse" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Não Perca Esta Oportunidade!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Agenda semanal com <span className="font-bold text-accent">vagas limitadas</span><br />
            para garantir qualidade do serviço
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">+500</div>
              <p className="opacity-90">Clientes Satisfeitos</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="opacity-90">Avaliação 5 Estrelas</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">6 meses</div>
              <p className="opacity-90">Garantia Certificada</p>
            </div>
          </div>

          <div className="mb-8">
            <Button 
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-gray-100 text-2xl px-16 py-8 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-3" size={32} />
              Agendar Agora pelo WhatsApp
            </Button>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm inline-block">
            <p className="text-lg font-medium">
              ⚡ Resposta imediata no WhatsApp<br />
              📅 Agendamento para esta semana<br />
              🎯 Atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;