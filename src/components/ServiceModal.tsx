import { X, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    benefits: string[];
    competitors: { name: string; price: string }[];
    ourPrice: string;
    ourPriceInstallments: string;
  };
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de agendar o serviço: ${service.title} por ${service.ourPrice}`;
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-primary">{service.title}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-accent" size={24} />
                    Benefícios Inclusos
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-accent mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Comparação de Preços</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {service.competitors.map((competitor, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg">
                    <p className="font-medium text-gray-600">{competitor.name}</p>
                    <p className="text-xl text-gray-500 line-through">{competitor.price}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-accent to-primary rounded-xl text-white">
                <p className="text-sm opacity-90">Nosso preço especial</p>
                <p className="text-4xl font-bold">{service.ourPrice}</p>
                <p className="text-lg mt-2">{service.ourPriceInstallments}</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold text-accent">Garantia de 6 Meses</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Certificado assinado incluso. Se não ficar satisfeito, refazemos o serviço sem custo.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={handleWhatsApp}
                className="cta-primary text-xl px-12 py-6"
              >
                Agendar Este Serviço pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;