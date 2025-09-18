import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, MessageCircle, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Service {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "sofa" | "car" | "combo";
}

const services: Service[] = [
  { id: "sofa-2", name: "Sofá 2 Lugares", price: 299, image: "🛋️", category: "sofa" },
  { id: "sofa-3", name: "Sofá 3 Lugares", price: 399, image: "🛋️", category: "sofa" },
  { id: "sofa-4", name: "Sofá 4+ Lugares", price: 499, image: "🛋️", category: "sofa" },
  { id: "car-hatch", name: "Carro Hatch", price: 349, image: "🚗", category: "car" },
  { id: "car-sedan", name: "Carro Sedan/SUV", price: 449, image: "🚙", category: "car" },
  { id: "combo-sofa", name: "Sofá + Impermeabilização", price: 549, image: "✨", category: "combo" },
];

const BudgetCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [customerName, setCustomerName] = useState("");

  const steps = [
    "Qual serviço você precisa?",
    "Adicionar mais serviços?",
    "Seus dados para o orçamento"
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;
  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  const handleServiceSelect = (service: Service) => {
    if (!selectedServices.find(s => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
    if (currentStep === 0) {
      setCurrentStep(1);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
  };

  const handleWhatsApp = () => {
    const servicesText = selectedServices.map(s => `• ${s.name} - R$ ${s.price}`).join('\n');
    const message = `Olá! Calculei meu orçamento no site:\n\n${servicesText}\n\nTotal: R$ ${total}\n\nQuero agendar meu serviço! 🚀`;
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const openCalculator = () => {
    setIsOpen(true);
    setCurrentStep(0);
    setSelectedServices([]);
    setCustomerName("");
  };

  return (
    <>
      {/* Botão para abrir calculadora */}
      <section className="py-20 bg-gradient-to-br from-machado-royal to-machado-neon text-white">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="w-20 h-20 mx-auto mb-8 animate-float" />
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Calcule seu Orçamento <span className="text-yellow-300">Agora!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Descubra em 30 segundos quanto custa renovar seu estofado
          </p>
          <Button 
            onClick={openCalculator}
            className="cta-neon text-2xl px-12 py-6"
          >
            <Calculator className="mr-3" size={28} />
            Começar Simulação Gratuita
          </Button>
        </div>
      </section>

      {/* Modal da Calculadora */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content p-8 max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-machado-royal">Calculadora de Orçamento</h3>
                <p className="text-gray-600 mt-2">{steps[currentStep]}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-gray-500 mt-2">Passo {currentStep + 1} de {steps.length}</p>
            </div>

            {/* Step 0: Seleção de Serviços */}
            {currentStep === 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="glass-card cursor-pointer hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="text-6xl mb-4">{service.image}</div>
                    <h4 className="text-xl font-bold mb-2 text-machado-royal">{service.name}</h4>
                    <div className="text-2xl font-bold text-machado-neon">R$ {service.price}</div>
                    <p className="text-sm text-gray-500 mt-2">À vista ou parcelado</p>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: Adicionar mais serviços */}
            {currentStep === 1 && (
              <div>
                <div className="bg-machado-light/10 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-machado-royal">Serviços Selecionados:</h4>
                  {selectedServices.map((service) => (
                    <div key={service.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span>{service.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-machado-neon">R$ {service.price}</span>
                        <button 
                          onClick={() => removeService(service.id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4 text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-machado-neon">R$ {total}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {services.filter(s => !selectedServices.find(sel => sel.id === s.id)).map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="glass-card cursor-pointer hover:scale-105 transition-all duration-300 text-center opacity-60 hover:opacity-100"
                    >
                      <div className="text-4xl mb-2">{service.image}</div>
                      <h4 className="text-lg font-bold mb-1 text-machado-royal">{service.name}</h4>
                      <div className="text-xl font-bold text-machado-neon">R$ {service.price}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button 
                    onClick={() => setCurrentStep(0)}
                    variant="outline"
                    className="px-8 py-3"
                  >
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep(2)}
                    className="cta-neon px-8 py-3"
                    disabled={selectedServices.length === 0}
                  >
                    Continuar <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Finalização */}
            {currentStep === 2 && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-machado-neon/10 to-machado-green/10 rounded-3xl p-8 mb-8">
                  <h4 className="text-3xl font-bold mb-6 text-machado-royal">Seu Orçamento Está Pronto! 🎉</h4>
                  
                  <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                    {selectedServices.map((service) => (
                      <div key={service.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-lg">{service.name}</span>
                        <span className="text-lg font-bold text-machado-neon">R$ {service.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 text-2xl font-bold">
                      <span>Total:</span>
                      <span className="text-machado-neon">R$ {total}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Parcelamento em até 10x sem juros</p>
                  </div>

                  <Button 
                    onClick={handleWhatsApp}
                    className="cta-neon text-2xl px-12 py-6"
                  >
                    <MessageCircle className="mr-3" size={28} />
                    Agendar pelo WhatsApp Agora!
                  </Button>
                </div>

                <Button 
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="px-8 py-3"
                >
                  Modificar Serviços
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BudgetCalculator;