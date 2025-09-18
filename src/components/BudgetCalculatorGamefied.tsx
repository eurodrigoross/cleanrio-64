import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  Sparkles, 
  Sofa,
  Car,
  Bed,
  Armchair,
  ShieldCheck,
  Crown,
  CreditCard,
  Banknote,
  CheckCircle,
  Star,
  Clock,
  Award,
  Zap
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Service {
  id: string;
  name: string;
  icon: any;
  category: "sofa-clean" | "sofa-impermeabilization" | "sofa-combo" | "car-clean" | "mattress-clean" | "others";
  description: string;
  benefits: string[];
}

interface Size {
  id: string;
  name: string;
  cleanPrice?: number;
  impermeabilizationPrice?: number;
  popular?: boolean;
  category?: string;
}

// Tabela de preços real da Machado Clean
const PRICE_TABLE = {
  sofa: {
    retratil: {
      "2-modulos": { clean: 250, impermeabilization: 350 },
      "3-modulos": { clean: 300, impermeabilization: 450 }
    },
    comum: {
      "2-lugares": { clean: 200, impermeabilization: 280 },
      "3-lugares": { clean: 250, impermeabilization: 380 },
      "jogo-2-3": { clean: 350, impermeabilization: 500 }
    },
    canto: { clean: 280, impermeabilization: 350 },
    cama: {
      solteiro: { clean: 200, impermeabilization: 300 },
      casal: { clean: 250, impermeabilization: 350 }
    }
  },
  poltronas: {
    amamentacao: { clean: 150, impermeabilization: 200 },
    comum: { clean: 120, impermeabilization: 180 },
    papai: { clean: 150, impermeabilization: 200 }
  },
  cadeiras: {
    "so-assento": { clean: 25, impermeabilization: 35 },
    "so-encosto": { clean: 25, impermeabilization: 35 },
    "assento-encosto": { clean: 35, impermeabilization: 45 }
  },
  colchoes: {
    solteiro: { clean: 130 },
    viuvo: { clean: 160 },
    casal: { clean: 180 },
    queen: { clean: 220 },
    king: { clean: 250 },
    "super-king": { clean: 280 },
    berco: { clean: 120 }
  },
  carros: {
    bancos: {
      pequeno: { clean: 180 },
      medio: { clean: 230 },
      grande: { clean: 280 },
      "extra-grande": { clean: 350 }
    },
    interna: {
      pequeno: { clean: 280 },
      medio: { clean: 330 },
      grande: { clean: 380 },
      "extra-grande": { clean: 450 }
    }
  },
  puff: {
    pequeno: { clean: 60, impermeabilization: 90 },
    medio: { clean: 90, impermeabilization: 130 },
    grande: { clean: 120, impermeabilization: 180 }
  },
  tapetes: {
    limpeza: { pricePerM2: 35 }
  }
};

const services: Service[] = [
  { 
    id: "sofa-clean", 
    name: "Higienização de Sofá", 
    icon: Sofa, 
    category: "sofa-clean",
    description: "Limpeza profunda com produtos premium",
    benefits: ["Remove manchas antigas", "Neutraliza odores", "Elimina ácaros e fungos", "Seca rápida"]
  },
  { 
    id: "sofa-impermeabilization", 
    name: "Impermeabilização de Sofá", 
    icon: ShieldCheck, 
    category: "sofa-impermeabilization",
    description: "Proteção avançada contra líquidos",
    benefits: ["Proteção por 6 meses", "Repele líquidos", "Facilita limpeza", "Certificado de garantia"]
  },
  { 
    id: "sofa-combo", 
    name: "Higienização + Impermeabilização", 
    icon: Crown, 
    category: "sofa-combo",
    description: "Combo completo - máxima proteção",
    benefits: ["Limpeza + Proteção", "Economia de 15%", "Garantia estendida", "Atendimento premium"]
  },
  { 
    id: "car-clean", 
    name: "Higienização de Carro", 
    icon: Car, 
    category: "car-clean",
    description: "Interior automotivo profissional",
    benefits: ["Bancos e carpetes", "Proteção UV", "Anti-bacteriano", "Acabamento premium"]
  },
  { 
    id: "mattress-clean", 
    name: "Higienização de Colchão", 
    icon: Bed, 
    category: "mattress-clean",
    description: "Saúde e higiene para seu sono",
    benefits: ["Remove ácaros 99%", "Anti-alérgico", "Seca ultra rápida", "Certificado sanitário"]
  },
  { 
    id: "others", 
    name: "Outros Serviços", 
    icon: Armchair, 
    category: "others",
    description: "Poltronas, cadeiras, almofadas...",
    benefits: ["Orçamento personalizado", "Visita gratuita", "Sem compromisso", "Preço justo"]
  },
];

const sofaSizes: Size[] = [
  { id: "2-lugares", name: "2 Lugares", cleanPrice: PRICE_TABLE.sofa.comum["2-lugares"].clean, impermeabilizationPrice: PRICE_TABLE.sofa.comum["2-lugares"].impermeabilization },
  { id: "3-lugares", name: "3 Lugares", cleanPrice: PRICE_TABLE.sofa.comum["3-lugares"].clean, impermeabilizationPrice: PRICE_TABLE.sofa.comum["3-lugares"].impermeabilization, popular: true },
  { id: "jogo-2-3", name: "Jogo 2+3 Lugares", cleanPrice: PRICE_TABLE.sofa.comum["jogo-2-3"].clean, impermeabilizationPrice: PRICE_TABLE.sofa.comum["jogo-2-3"].impermeabilization },
  { id: "retratil-2", name: "Retrátil 2 Módulos", cleanPrice: PRICE_TABLE.sofa.retratil["2-modulos"].clean, impermeabilizationPrice: PRICE_TABLE.sofa.retratil["2-modulos"].impermeabilization },
  { id: "retratil-3", name: "Retrátil 3 Módulos", cleanPrice: PRICE_TABLE.sofa.retratil["3-modulos"].clean, impermeabilizationPrice: PRICE_TABLE.sofa.retratil["3-modulos"].impermeabilization },
  { id: "canto", name: "Sofá de Canto", cleanPrice: PRICE_TABLE.sofa.canto.clean, impermeabilizationPrice: PRICE_TABLE.sofa.canto.impermeabilization },
  { id: "sofa-cama-solteiro", name: "Sofá Cama Solteiro", cleanPrice: PRICE_TABLE.sofa.cama.solteiro.clean, impermeabilizationPrice: PRICE_TABLE.sofa.cama.solteiro.impermeabilization },
  { id: "sofa-cama-casal", name: "Sofá Cama Casal", cleanPrice: PRICE_TABLE.sofa.cama.casal.clean, impermeabilizationPrice: PRICE_TABLE.sofa.cama.casal.impermeabilization },
];

const carSizes: Size[] = [
  { id: "pequeno-bancos", name: "Pequeno - Só Bancos", cleanPrice: PRICE_TABLE.carros.bancos.pequeno.clean },
  { id: "medio-bancos", name: "Médio - Só Bancos", cleanPrice: PRICE_TABLE.carros.bancos.medio.clean, popular: true },
  { id: "grande-bancos", name: "Grande - Só Bancos", cleanPrice: PRICE_TABLE.carros.bancos.grande.clean },
  { id: "extra-grande-bancos", name: "Extra Grande - Só Bancos", cleanPrice: PRICE_TABLE.carros.bancos["extra-grande"].clean },
  { id: "pequeno-completo", name: "Pequeno - Interna Completa", cleanPrice: PRICE_TABLE.carros.interna.pequeno.clean },
  { id: "medio-completo", name: "Médio - Interna Completa", cleanPrice: PRICE_TABLE.carros.interna.medio.clean },
  { id: "grande-completo", name: "Grande - Interna Completa", cleanPrice: PRICE_TABLE.carros.interna.grande.clean },
  { id: "extra-grande-completo", name: "Extra Grande - Interna Completa", cleanPrice: PRICE_TABLE.carros.interna["extra-grande"].clean },
];

const mattressSizes: Size[] = [
  { id: "solteiro", name: "Solteiro", cleanPrice: PRICE_TABLE.colchoes.solteiro.clean },
  { id: "viuvo", name: "Viúvo", cleanPrice: PRICE_TABLE.colchoes.viuvo.clean },
  { id: "casal", name: "Casal", cleanPrice: PRICE_TABLE.colchoes.casal.clean, popular: true },
  { id: "queen", name: "Queen", cleanPrice: PRICE_TABLE.colchoes.queen.clean },
  { id: "king", name: "King", cleanPrice: PRICE_TABLE.colchoes.king.clean },
  { id: "super-king", name: "Super King", cleanPrice: PRICE_TABLE.colchoes["super-king"].clean },
  { id: "berco", name: "Berço", cleanPrice: PRICE_TABLE.colchoes.berco.clean },
];

const othersSizes: Size[] = [
  { id: "poltrona-comum", name: "Poltrona Comum", cleanPrice: PRICE_TABLE.poltronas.comum.clean, impermeabilizationPrice: PRICE_TABLE.poltronas.comum.impermeabilization },
  { id: "poltrona-amamentacao", name: "Poltrona Amamentação", cleanPrice: PRICE_TABLE.poltronas.amamentacao.clean, impermeabilizationPrice: PRICE_TABLE.poltronas.amamentacao.impermeabilization },
  { id: "poltrona-papai", name: "Poltrona do Papai", cleanPrice: PRICE_TABLE.poltronas.papai.clean, impermeabilizationPrice: PRICE_TABLE.poltronas.papai.impermeabilization },
  { id: "puff-pequeno", name: "Puff Pequeno", cleanPrice: PRICE_TABLE.puff.pequeno.clean, impermeabilizationPrice: PRICE_TABLE.puff.pequeno.impermeabilization },
  { id: "puff-medio", name: "Puff Médio", cleanPrice: PRICE_TABLE.puff.medio.clean, impermeabilizationPrice: PRICE_TABLE.puff.medio.impermeabilization },
  { id: "puff-grande", name: "Puff Grande", cleanPrice: PRICE_TABLE.puff.grande.clean, impermeabilizationPrice: PRICE_TABLE.puff.grande.impermeabilization },
  { id: "cadeiras", name: "Cadeiras (mín 4 unidades)", cleanPrice: PRICE_TABLE.cadeiras["assento-encosto"].clean, impermeabilizationPrice: PRICE_TABLE.cadeiras["assento-encosto"].impermeabilization, category: "special" },
];

const BudgetCalculatorGamefied = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [wantsImpermeabilization, setWantsImpermeabilization] = useState<boolean | null>(null);
  const [chairQuantity, setChairQuantity] = useState(4); // Para cadeiras - mínimo 4

  const steps = [
    "Qual serviço você deseja?",
    "Detalhe do seu item", 
    "Proteção extra?",
    "Seu orçamento exclusivo"
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const getSizeOptions = () => {
    if (!selectedService) return [];
    switch (selectedService.category) {
      case "sofa-clean":
      case "sofa-impermeabilization": 
      case "sofa-combo":
        return sofaSizes;
      case "car-clean": 
        return carSizes;
      case "mattress-clean": 
        return mattressSizes;
      case "others":
        return othersSizes;
      default: 
        return [];
    }
  };

  const calculatePrices = () => {
    if (!selectedService || !selectedSize) return { basePrice: 0, marketPrice: 0, cashPrice: 0, installmentPrice: 0 };
    
    let cleanPrice = 0;
    let impermeabilizationPrice = 0;
    let totalPrice = 0;
    
    // Calcula preço baseado no serviço selecionado
    if (selectedService.category === "sofa-clean") {
      cleanPrice = selectedSize.cleanPrice || 0;
      totalPrice = cleanPrice;
    } else if (selectedService.category === "sofa-impermeabilization") {
      impermeabilizationPrice = selectedSize.impermeabilizationPrice || 0;
      totalPrice = impermeabilizationPrice;
    } else if (selectedService.category === "sofa-combo") {
      cleanPrice = selectedSize.cleanPrice || 0;
      impermeabilizationPrice = selectedSize.impermeabilizationPrice || 0;
      totalPrice = cleanPrice + impermeabilizationPrice;
    } else if (selectedService.category === "car-clean" || selectedService.category === "mattress-clean") {
      cleanPrice = selectedSize.cleanPrice || 0;
      totalPrice = cleanPrice;
    } else if (selectedService.category === "others") {
      cleanPrice = selectedSize.cleanPrice || 0;
      
      // Caso especial para cadeiras - multiplicar pela quantidade
      if (selectedSize.id === "cadeiras") {
        cleanPrice = cleanPrice * chairQuantity;
        if (wantsImpermeabilization && selectedSize.impermeabilizationPrice) {
          impermeabilizationPrice = selectedSize.impermeabilizationPrice * chairQuantity;
        }
      } else if (wantsImpermeabilization && selectedSize.impermeabilizationPrice) {
        impermeabilizationPrice = selectedSize.impermeabilizationPrice;
      }
      
      totalPrice = cleanPrice + impermeabilizationPrice;
    }
    
    // Adiciona impermeabilização se selecionada (apenas para higienização de sofá)
    if (wantsImpermeabilization && selectedService.category === "sofa-clean" && selectedSize.impermeabilizationPrice) {
      totalPrice += selectedSize.impermeabilizationPrice;
    }
    
    // Calcula preços finais
    const cashPrice = Math.round(totalPrice); // Preço à vista
    const marketPrice = Math.round(totalPrice * 1.25); // 25% acima (ancoragem)
    const installmentPrice = Math.round(totalPrice * 1.10); // 10% a mais no parcelado
    
    return { 
      basePrice: Math.round(totalPrice), 
      marketPrice, 
      cashPrice, 
      installmentPrice 
    };
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setSelectedSize(null);
    setWantsImpermeabilization(null);
    
    // Se for "outros", pula direto para o resultado
    if (service.category === "others") {
      setCurrentStep(1);
    } else {
      setCurrentStep(1);
    }
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    
    // Caso especial para cadeiras - precisa definir quantidade
    if (size.id === "cadeiras") {
      setCurrentStep(2); // Vai para seleção de quantidade
      return;
    }
    
    // Se já incluir impermeabilização (combo), pula para resultado
    if (selectedService?.category === "sofa-combo" || selectedService?.category === "car-clean" || selectedService?.category === "mattress-clean") {
      setWantsImpermeabilization(false);
      setCurrentStep(3);
    } else {
      setCurrentStep(2);
    }
  };

  const handleImpermeabilizationChoice = (choice: boolean) => {
    setWantsImpermeabilization(choice);
    setCurrentStep(3);
  };

  const handleWhatsApp = () => {
    if (selectedService?.category === "others" && selectedSize?.id !== "cadeiras") {
      const message = `🎯 SOLICITAÇÃO MACHADO CLEAN:\n\n• Serviço: ${selectedService.name}\n• Item: ${selectedSize?.name}\n• Observação: ${selectedService.description}\n\n🏠 Preciso de uma visita para orçamento personalizado!\n\n📞 Quando podem vir na minha casa?`;
      const phone = "5521999999999";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      return;
    }

    const { cashPrice, installmentPrice } = calculatePrices();
    const sizeText = selectedSize ? ` ${selectedSize.name}` : '';
    const quantityText = selectedSize?.id === "cadeiras" ? ` (${chairQuantity} unidades)` : '';
    const impermeabilizationText = wantsImpermeabilization ? ' + Impermeabilização Premium' : '';
    
    const message = `💎 ORÇAMENTO EXCLUSIVO MACHADO CLEAN:\n\n• ${selectedService?.name}${sizeText}${quantityText}${impermeabilizationText}\n\n💰 VALORES:\n▸ À vista (Pix/Dinheiro): R$ ${cashPrice}\n▸ Parcelado: 12x de R$ ${Math.round(installmentPrice/12)} (total R$ ${installmentPrice})\n\n🏆 Inclui:\n• Certificado de garantia 6 meses\n• Neutralização de odores\n• Proteção contra ácaros e manchas\n• Atendimento premium no RJ\n\n🚀 Quero fechar este serviço agora!`;
    
    const phone = "5521999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const openCalculator = () => {
    setIsOpen(true);
    setCurrentStep(0);
    setSelectedService(null);
    setSelectedSize(null);
    setWantsImpermeabilization(null);
    setChairQuantity(4);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 1) setSelectedService(null);
      if (currentStep === 2) setSelectedSize(null);
      if (currentStep === 3) setWantsImpermeabilization(null);
    }
  };

  return (
    <>
      {/* Seção de Abertura da Calculadora */}
      <section className="py-24 bg-gradient-to-br from-machado-royal via-machado-neon to-machado-purple text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-machado-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-20 h-20 mx-auto mb-8 animate-float text-yellow-300" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Descubra seu Orçamento <span className="text-yellow-300">Exclusivo!</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto">
            Quiz interativo ultra moderno • Ancoragem de preços • Gatilhos mentais
          </p>
          
          <div className="mb-12">
            <Button 
              onClick={openCalculator}
              className="cta-neon text-3xl px-16 py-8 group relative overflow-hidden"
            >
              <Calculator className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={36} />
              <span className="relative z-10">Iniciar Quiz Premium</span>
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>

          {/* Mini estatísticas */}
          <div className="flex justify-center items-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span>+2.500 orçamentos realizados</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-machado-green animate-pulse" />
              <span>Resultado em 30 segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-white animate-pulse" />
              <span>Preços exclusivos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Gamificado Ultra Moderno */}
      {isOpen && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-content p-0 max-w-6xl animate-scale-in">
            {/* Header com progresso gamificado */}
            <div className="bg-gradient-to-r from-machado-royal via-machado-neon to-machado-purple p-8 text-white">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-4xl font-black flex items-center gap-3">
                    <Crown className="w-10 h-10 text-yellow-300" />
                    Quiz Premium Machado Clean
                  </h3>
                  <p className="text-machado-light mt-2 text-xl">{steps[currentStep]}</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full group"
                >
                  <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Barra de progresso gamificada */}
              <div className="relative">
                <Progress value={progress} className="h-6 bg-white/20 rounded-full" />
                <div className="flex justify-between mt-4">
                  <span className="text-lg font-bold flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Etapa {currentStep + 1} de {steps.length}
                  </span>
                  <span className="text-lg font-bold text-yellow-300">{Math.round(progress)}% completo</span>
                </div>
              </div>
            </div>

            <div className="p-10">
              {/* Etapa 1: Seleção de Serviço */}
              {currentStep === 0 && (
                <div className="animate-slide-in-3d">
                  <div className="text-center mb-12">
                    <h4 className="text-4xl font-black text-machado-royal mb-6">
                      Qual serviço você deseja?
                    </h4>
                    <p className="text-xl text-gray-600">Selecione o serviço ideal para suas necessidades</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className="glass-card cursor-pointer group text-center hover:border-machado-neon transition-all duration-500 transform hover:scale-105"
                        >
                          <div className="mb-8">
                            <IconComponent size={80} className="mx-auto text-machado-royal group-hover:text-machado-neon transition-colors duration-300" />
                          </div>
                          
                          <h5 className="text-2xl font-bold mb-4 text-machado-royal">{service.name}</h5>
                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          {/* Benefícios */}
                          <div className="mb-6">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <div key={index} className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-machado-green" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="border-t pt-4">
                            <div className="text-sm text-gray-500 line-through mb-1">
                              Mercado: R$ {service.id === "sofa-clean" ? Math.round(sofaSizes[0].cleanPrice! * 1.25) : 
                                           service.id === "sofa-impermeabilization" ? Math.round(sofaSizes[0].impermeabilizationPrice! * 1.25) :
                                           service.id === "sofa-combo" ? Math.round((sofaSizes[0].cleanPrice! + sofaSizes[0].impermeabilizationPrice!) * 1.25) :
                                           service.id === "car-clean" ? Math.round(carSizes[0].cleanPrice! * 1.25) :
                                           service.id === "mattress-clean" ? Math.round(mattressSizes[0].cleanPrice! * 1.25) : 0}
                            </div>
                            <div className="text-3xl font-black text-machado-neon">
                              A partir de R$ {service.id === "sofa-clean" ? sofaSizes[0].cleanPrice :
                                             service.id === "sofa-impermeabilization" ? sofaSizes[0].impermeabilizationPrice :
                                             service.id === "sofa-combo" ? (sofaSizes[0].cleanPrice! + sofaSizes[0].impermeabilizationPrice!) :
                                             service.id === "car-clean" ? carSizes[0].cleanPrice :
                                             service.id === "mattress-clean" ? mattressSizes[0].cleanPrice : 0}
                            </div>
                          </div>
                          
                          <p className="text-sm text-machado-royal mt-3 font-semibold opacity-80">
                            Clique para selecionar →
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Etapa 2: Seleção de Tamanho */}
              {currentStep === 1 && selectedService && (
                <div className="animate-slide-in-3d">
                  <div className="text-center mb-12">
                    <div className="mb-8">
                      {(() => {
                        const IconComponent = selectedService.icon;
                        return <IconComponent size={100} className="mx-auto text-machado-royal" />;
                      })()}
                    </div>
                    <h4 className="text-4xl font-black text-machado-royal mb-6">
                      Detalhe do seu {selectedService.name.toLowerCase()}
                    </h4>
                    <p className="text-xl text-gray-600">Selecione o tamanho para calcular o valor exato</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {getSizeOptions().map((size) => (
                      <div
                        key={size.id}
                        onClick={() => handleSizeSelect(size)}
                        className={`glass-card cursor-pointer group text-center transition-all duration-500 transform hover:scale-105 relative ${
                          size.popular ? 'border-2 border-machado-neon bg-machado-neon/5' : 'border-2 border-transparent hover:border-machado-neon'
                        }`}
                      >
                        {size.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-machado-neon to-machado-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ Mais Popular
                          </div>
                        )}
                        
                        <h5 className="text-2xl font-bold mb-4 text-machado-royal">{size.name}</h5>
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 line-through">
                            R$ {Math.round((size.cleanPrice || size.impermeabilizationPrice || 0) * 1.25)}
                          </div>
                          <div className="text-3xl font-black text-machado-neon">
                            R$ {size.cleanPrice || size.impermeabilizationPrice || 0}
                          </div>
                        </div>
                        <p className="text-sm text-machado-royal font-semibold opacity-80">Clique para selecionar →</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      onClick={goBack}
                      variant="outline"
                      className="px-8 py-4 text-lg hover:bg-machado-royal hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft className="mr-2" size={24} />
                      Voltar
                    </Button>
                  </div>
                </div>
              )}

              {/* Etapa 2: Seleção de Quantidade de Cadeiras ou Impermeabilização */}
              {currentStep === 2 && selectedService && selectedSize && (
                <div className="animate-slide-in-3d">
                  {selectedSize.id === "cadeiras" ? (
                    /* Seção para selecionar quantidade de cadeiras */
                    <div>
                      <div className="text-center mb-12">
                        <Armchair size={100} className="mx-auto text-machado-royal mb-8" />
                        <h4 className="text-4xl font-black text-machado-royal mb-6">
                          Quantas cadeiras?
                        </h4>
                        <p className="text-xl text-gray-600 mb-8">
                          Mínimo 4 cadeiras • Preço unitário: R$ {selectedSize.cleanPrice}
                        </p>

                        <div className="max-w-md mx-auto mb-12">
                          <div className="flex items-center justify-center gap-6">
                            <button
                              onClick={() => setChairQuantity(Math.max(4, chairQuantity - 1))}
                              className="w-12 h-12 rounded-full bg-machado-royal text-white text-2xl font-bold hover:bg-machado-neon transition-colors duration-300"
                            >
                              -
                            </button>
                            <div className="text-center">
                              <div className="text-4xl font-black text-machado-royal mb-2">{chairQuantity}</div>
                              <div className="text-sm text-gray-600">cadeiras</div>
                            </div>
                            <button
                              onClick={() => setChairQuantity(chairQuantity + 1)}
                              className="w-12 h-12 rounded-full bg-machado-royal text-white text-2xl font-bold hover:bg-machado-neon transition-colors duration-300"
                            >
                              +
                            </button>
                          </div>

                          <div className="mt-8 p-6 glass-card">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-machado-royal mb-2">
                                Total Higienização: R$ {(selectedSize.cleanPrice || 0) * chairQuantity}
                              </div>
                              <div className="text-sm text-gray-600">
                                {chairQuantity} cadeiras × R$ {selectedSize.cleanPrice}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pergunta sobre impermeabilização das cadeiras */}
                        <div className="grid md:grid-cols-2 gap-10 mb-12 max-w-4xl mx-auto">
                          <div
                            onClick={() => {
                              setWantsImpermeabilization(true);
                              setCurrentStep(3);
                            }}
                            className="glass-card cursor-pointer group text-center hover:border-machado-green transition-all duration-500 transform hover:scale-105"
                          >
                            <div className="mb-8">
                              <CheckCircle size={80} className="mx-auto text-machado-green group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h5 className="text-2xl font-bold mb-4 text-machado-royal">Impermeabilizar Todas!</h5>
                            <div className="text-3xl font-black text-machado-green mb-4">
                              + R$ {(selectedSize.impermeabilizationPrice || 0) * chairQuantity}
                            </div>
                            <div className="text-sm text-gray-600">
                              {chairQuantity} cadeiras × R$ {selectedSize.impermeabilizationPrice}
                            </div>
                          </div>

                          <div
                            onClick={() => {
                              setWantsImpermeabilization(false);
                              setCurrentStep(3);
                            }}
                            className="glass-card cursor-pointer group text-center hover:border-gray-400 transition-all duration-500 transform hover:scale-105"
                          >
                            <div className="mb-8">
                              <Banknote size={80} className="mx-auto text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h5 className="text-2xl font-bold mb-4 text-machado-royal">Só Higienização</h5>
                            <div className="text-3xl font-black text-gray-600 mb-4">R$ 0</div>
                            <div className="text-sm text-gray-600">Sem impermeabilização</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Seção normal para impermeabilização */
                    <div>
                      <div className="text-center mb-12">
                        <ShieldCheck size={100} className="mx-auto text-machado-green mb-8" />
                        <h4 className="text-4xl font-black text-machado-royal mb-6">
                          Proteção extra contra manchas?
                        </h4>
                        <p className="text-xl text-gray-600">
                          Impermeabilização Premium • Proteção por 6 meses • Certificado de garantia
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-10 mb-12 max-w-4xl mx-auto">
                        <div
                          onClick={() => handleImpermeabilizationChoice(true)}
                          className="glass-card cursor-pointer group text-center hover:border-machado-green transition-all duration-500 transform hover:scale-105"
                        >
                          <div className="mb-8">
                            <CheckCircle size={80} className="mx-auto text-machado-green group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <h5 className="text-2xl font-bold mb-4 text-machado-royal">SIM, Quero Proteção!</h5>
                          <div className="text-3xl font-black text-machado-green mb-4">
                            + R$ {selectedSize?.impermeabilizationPrice || 150}
                          </div>
                          <div className="text-left space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Proteção contra líquidos</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Facilita limpeza diária</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Garantia estendida</span>
                            </div>
                          </div>
                        </div>

                        <div
                          onClick={() => handleImpermeabilizationChoice(false)}
                          className="glass-card cursor-pointer group text-center hover:border-gray-400 transition-all duration-500 transform hover:scale-105"
                        >
                          <div className="mb-8">
                            <Banknote size={80} className="mx-auto text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <h5 className="text-2xl font-bold mb-4 text-machado-royal">Só Higienização</h5>
                          <div className="text-3xl font-black text-gray-600 mb-4">R$ 0</div>
                          <div className="text-left space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Higienização completa</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Resultado profissional</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Garantia padrão</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <Button 
                      onClick={goBack}
                      variant="outline"
                      className="px-8 py-4 text-lg hover:bg-machado-royal hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft className="mr-2" size={24} />
                      Voltar
                    </Button>
                  </div>
                </div>
              )}

              {/* Etapa Final: Resultado com Ancoragem de Preços */}
              {currentStep === 3 && selectedService && (
                <div className="animate-slide-in-3d text-center">
                  {selectedService.category === "others" && selectedSize?.id !== "cadeiras" ? (
                    /* Resultado para Outros Serviços */
                    <div className="max-w-2xl mx-auto">
                      <div className="mb-8">
                        <Armchair size={100} className="mx-auto text-machado-royal mb-6" />
                        <h4 className="text-4xl font-black mb-6 text-machado-royal">
                          Orçamento Personalizado
                        </h4>
                        <p className="text-xl text-gray-600">
                          Nossos especialistas farão uma visita gratuita para avaliar suas necessidades específicas
                        </p>
                      </div>
                      
                      <div className="glass-card mb-8">
                        <div className="text-center space-y-6">
                          <Star size={60} className="mx-auto text-yellow-500" />
                          
                          <h5 className="text-2xl font-bold text-machado-royal mb-4">
                            Visita Técnica Gratuita
                          </h5>
                          
                          <div className="grid grid-cols-2 gap-4 text-left">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Análise detalhada</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Orçamento na hora</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Sem compromisso</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-machado-green" />
                              <span>Preço justo</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <Button 
                          onClick={handleWhatsApp}
                          className="cta-neon text-2xl px-16 py-8 group relative overflow-hidden"
                        >
                          <MessageCircle className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={32} />
                          <span className="relative z-10">Agendar Visita Gratuita</span>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* Resultado com Ancoragem de Preços */
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-12">
                        <Crown size={100} className="mx-auto text-yellow-500 mb-8 animate-pulse-neon" />
                        <h4 className="text-5xl font-black mb-6 text-machado-royal">
                          💎 Seu Orçamento Exclusivo
                        </h4>
                        <h5 className="text-3xl font-bold text-machado-neon mb-4">
                          MACHADO CLEAN
                        </h5>
                        <p className="text-xl text-gray-600">
                          Preços especiais com ancoragem de mercado • Pagamento facilitado
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Card Preço À Vista */}
                        <div className="glass-card border-2 border-machado-green relative overflow-hidden">
                          <div className="absolute top-4 right-4">
                            <div className="bg-machado-green text-white px-3 py-1 rounded-full text-sm font-bold">
                              RECOMENDADO
                            </div>
                          </div>
                          
                          <div className="text-center mb-6">
                            <Banknote size={60} className="mx-auto text-machado-green mb-4" />
                            <h6 className="text-2xl font-bold text-machado-royal mb-2">
                              À Vista (Pix/Dinheiro)
                            </h6>
                            
                            <div className="mb-4">
                              <div className="text-lg text-gray-500 line-through mb-1">
                                Valor de mercado: R$ {calculatePrices().marketPrice}
                              </div>
                              <div className="text-5xl font-black text-machado-green">
                                R$ {calculatePrices().cashPrice}
                              </div>
                              <div className="text-sm text-machado-green font-bold mt-1">
                                💰 Economia de R$ {calculatePrices().marketPrice - calculatePrices().cashPrice}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-left text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Melhor preço garantido</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Sem taxas adicionais</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Desconto especial</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Preço Parcelado */}
                        <div className="glass-card border-2 border-machado-neon">
                          <div className="text-center mb-6">
                            <CreditCard size={60} className="mx-auto text-machado-neon mb-4" />
                            <h6 className="text-2xl font-bold text-machado-royal mb-2">
                              Parcelado no Cartão
                            </h6>
                            
                            <div className="mb-4">
                              <div className="text-3xl font-bold text-machado-neon mb-1">
                                12x de R$ {Math.round(calculatePrices().installmentPrice / 12)}
                              </div>
                              <div className="text-lg text-gray-600">
                                Total: R$ {calculatePrices().installmentPrice}
                              </div>
                              <div className="text-sm text-orange-600 font-semibold mt-1">
                                (Acréscimo de 10% sobre valor à vista)
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-left text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Facilita seu orçamento</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Sem consulta SPC/Serasa</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-machado-green" />
                              <span>Aprovação na hora</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Resumo do Serviço */}
                      <div className="glass-card mb-8 text-left">
                        <h6 className="text-xl font-bold text-machado-royal mb-4 text-center">
                          🎯 RESUMO DO SEU PEDIDO
                        </h6>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <span className="text-lg font-medium">
                              {selectedService.name} {selectedSize?.name}
                              {selectedSize?.id === "cadeiras" && ` (${chairQuantity} unidades)`}
                            </span>
                            <span className="text-lg font-bold text-machado-neon">
                              R$ {selectedSize?.id === "cadeiras" ? 
                                   (selectedSize.cleanPrice || 0) * chairQuantity : 
                                   selectedSize?.cleanPrice || selectedSize?.impermeabilizationPrice || 0}
                            </span>
                          </div>
                          
                          {wantsImpermeabilization && selectedSize && (
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                              <span className="text-lg font-medium">
                                Impermeabilização Premium
                                {selectedSize.id === "cadeiras" && ` (${chairQuantity} unidades)`}
                              </span>
                              <span className="text-lg font-bold text-machado-green">
                                + R$ {selectedSize.id === "cadeiras" ? 
                                      (selectedSize.impermeabilizationPrice || 0) * chairQuantity : 
                                      selectedSize.impermeabilizationPrice || 0}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Garantias e Benefícios */}
                      <div className="glass-card mb-8">
                        <h6 className="text-xl font-bold text-machado-royal mb-6 text-center">
                          🏆 INCLUI EM TODOS OS SERVIÇOS
                        </h6>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                          <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-machado-green" />
                            <span>Certificado de garantia 6 meses</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-6 h-6 text-machado-neon" />
                            <span>Neutralização de odores</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-machado-green" />
                            <span>Proteção contra ácaros e fungos</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-yellow-500" />
                            <span>Atendimento premium no RJ</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <Button 
                          onClick={handleWhatsApp}
                          className="cta-neon text-3xl px-20 py-10 group relative overflow-hidden animate-pulse-glow"
                        >
                          <MessageCircle className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={40} />
                          <span className="relative z-10">Fechar este serviço no WhatsApp</span>
                          
                          {/* Efeito de brilho */}
                          <div className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse opacity-0 group-hover:opacity-100"></div>
                        </Button>
                      </div>

                      <div className="text-center pt-8 border-t border-gray-200">
                        <p className="text-gray-600 mb-4">Quer alterar alguma coisa?</p>
                        <Button 
                          onClick={() => setCurrentStep(0)}
                          variant="outline"
                          className="px-8 py-4 text-lg hover:bg-machado-royal hover:text-white transition-all duration-300"
                        >
                          <ChevronLeft className="mr-2" size={24} />
                          Modificar Escolhas
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BudgetCalculatorGamefied;