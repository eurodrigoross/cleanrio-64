import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Zap,
  User,
  Phone
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
  const [currentStep, setCurrentStep] = useState(-1); // Começa em -1 para captura de dados
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [wantsImpermeabilization, setWantsImpermeabilization] = useState<boolean | null>(null);
  const [chairQuantity, setChairQuantity] = useState(4);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const steps = [
    "Seus dados",
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
      setCurrentStep(2);
    } else {
      setCurrentStep(2);
    }
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    
    // Caso especial para cadeiras - precisa definir quantidade
    if (size.id === "cadeiras") {
      setCurrentStep(3); // Vai para seleção de quantidade
      return;
    }
    
    // Se já incluir impermeabilização (combo), pula para resultado
    if (selectedService?.category === "sofa-combo" || selectedService?.category === "car-clean" || selectedService?.category === "mattress-clean") {
      setWantsImpermeabilization(false);
      setCurrentStep(4);
    } else {
      setCurrentStep(3);
    }
  };

  const handleImpermeabilizationChoice = (choice: boolean) => {
    setWantsImpermeabilization(choice);
    setCurrentStep(4);
  };

  const handleDataFormSubmit = () => {
    if (customerName.trim() && customerPhone.trim()) {
      setCurrentStep(1);
    }
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
    setCustomerName("");
    setCustomerPhone("");
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 1) { setCustomerName(""); setCustomerPhone(""); }
      if (currentStep === 2) setSelectedService(null);
      if (currentStep === 3) setSelectedSize(null);
      if (currentStep === 4) setWantsImpermeabilization(null);
    }
  };

  return (
    <>
      {/* Seção de Abertura da Calculadora */}
      <section className="section-container bg-background text-center" data-section="budget-calculator">
        <div className="container mx-auto px-4 relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-8 text-primary animate-float" />
          
          <h2 className="section-title">
            Simulador de <span className="text-accent">Orçamento Inteligente</span>
          </h2>
          
          <p className="section-subtitle">
            Tecnologia exclusiva para calcular seu preço personalizado em 30 segundos
          </p>
          
          <div className="mb-12">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="cta-primary text-xl px-12 py-6 group relative overflow-hidden"
                >
                  <Calculator className="mr-4 group-hover:rotate-12 transition-transform duration-300" size={28} />
                  <span className="relative z-10">🚀 Calcular Preço Exclusivo</span>
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0 bg-white">
                <DialogTitle className="sr-only">{steps[currentStep + 1]}</DialogTitle>
                <DialogDescription className="sr-only">
                  Calculadora de orçamento para serviços de higienização e limpeza
                </DialogDescription>
                  <div className="bg-white min-h-[600px]">
                  {/* Header do Modal */}
                  <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 rounded-t-xl z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {currentStep > 0 && (
                          <Button
                            onClick={goBack}
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                          >
                            <ChevronLeft size={20} />
                          </Button>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{steps[currentStep + 1]}</h3>
                          <p className="text-gray-600 text-sm">Passo {currentStep + 1} de {steps.length}</p>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => setIsOpen(false)}
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <X size={24} />
                      </Button>
                    </div>
                    
                    {/* Barra de progresso */}
                    <div className="mt-6">
                      <Progress value={progress} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-2 text-center">{Math.round(progress)}% concluído</p>
                    </div>
                  </div>

                  {/* Conteúdo das Etapas */}
                  <div className="p-8">
                    {/* Etapa 0: Captura de Dados */}
                    {currentStep === 0 && (
                      <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <User size={40} className="text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">Vamos começar!</h4>
                          <p className="text-gray-600">Para calcular seu orçamento personalizado, precisamos de algumas informações básicas.</p>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                              Seu nome completo *
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <Input
                                id="name"
                                type="text"
                                placeholder="Digite seu nome completo"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="pl-10 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
                              WhatsApp (com DDD) *
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="(21) 99999-9999"
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e.target.value)}
                                className="pl-10 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <Button
                            onClick={handleDataFormSubmit}
                            disabled={!customerName.trim() || !customerPhone.trim()}
                            className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold rounded-xl transition-all duration-200 disabled:bg-gray-300 disabled:text-gray-500"
                          >
                            <Sparkles className="mr-2" size={20} />
                            Continuar para Orçamento
                          </Button>

                          <p className="text-xs text-gray-500 text-center leading-relaxed">
                            Seus dados estão seguros e serão usados apenas para enviar seu orçamento via WhatsApp. 
                            Não enviamos spam.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Etapa 1: Seleção de Serviço */}
                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <div
                              key={service.id}
                              onClick={() => handleServiceSelect(service)}
                              className="card-minimal cursor-pointer group text-center hover:border-primary transition-all duration-300 transform hover:scale-105"
                            >
                              <div className="mb-6">
                                <IconComponent size={60} className="mx-auto text-primary group-hover:text-accent transition-colors duration-300" />
                              </div>
                              
                              <h5 className="text-xl font-bold mb-3 text-foreground">{service.name}</h5>
                              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                              
                              {/* Benefícios */}
                              <div className="mb-4">
                                {service.benefits.slice(0, 2).map((benefit, index) => (
                                  <div key={index} className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                                    <CheckCircle className="w-3 h-3 text-accent" />
                                    <span>{benefit}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <p className="text-sm text-primary mt-3 font-medium opacity-80">
                                Clique para selecionar →
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Etapa 2: Seleção de Tamanho */}
                    {currentStep === 2 && selectedService && (
                      <div>
                        <div className="text-center mb-8">
                          <div className="mb-6">
                            <selectedService.icon size={60} className="mx-auto text-primary mb-4" />
                            <h4 className="text-2xl font-bold text-foreground mb-2">{selectedService.name}</h4>
                            <p className="text-muted-foreground">{selectedService.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getSizeOptions().map((size) => (
                            <div
                              key={size.id}
                              onClick={() => handleSizeSelect(size)}
                              className={`card-minimal cursor-pointer group text-center transition-all duration-300 hover:border-primary transform hover:scale-105 relative ${
                                size.popular ? 'border-primary shadow-lg' : ''
                              }`}
                            >
                              {size.popular && (
                                <div className="badge-popular">
                                  Mais Popular
                                </div>
                              )}
                              
                              <h5 className="text-lg font-bold mb-3 text-foreground">{size.name}</h5>
                              
                              {size.cleanPrice && (
                                <div className="mb-4">
                                  <div className="text-2xl font-black text-accent">
                                    R$ {size.cleanPrice}
                                  </div>
                                  {size.impermeabilizationPrice && (
                                    <div className="text-sm text-muted-foreground mt-1">
                                      + Impermeab. R$ {size.impermeabilizationPrice}
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              <p className="text-sm text-primary font-medium">
                                Selecionar →
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Etapa 3: Impermeabilização */}
                    {currentStep === 3 && selectedService && selectedSize && (
                      <div className="text-center max-w-2xl mx-auto">
                        {selectedSize.id === "cadeiras" ? (
                          // Seleção de quantidade para cadeiras
                          <div>
                            <h4 className="text-2xl font-bold text-foreground mb-6">Quantas cadeiras você tem?</h4>
                            <p className="text-muted-foreground mb-8">Mínimo de 4 cadeiras para o serviço</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                              {[4, 6, 8, 10, 12, 16, 20, 24].map((qty) => (
                                <Button
                                  key={qty}
                                  onClick={() => {
                                    setChairQuantity(qty);
                                    setCurrentStep(4);
                                  }}
                                  variant={chairQuantity === qty ? "default" : "outline"}
                                  className="h-16 text-lg"
                                >
                                  {qty} cadeiras
                                </Button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Seleção de impermeabilização
                          selectedService.category === "sofa-clean" || selectedService.category === "others" ? (
                            <div>
                              <h4 className="text-2xl font-bold text-foreground mb-6">Deseja adicionar impermeabilização?</h4>
                              <p className="text-muted-foreground mb-8">Proteção extra contra líquidos e manchas por 6 meses</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Button
                                  onClick={() => handleImpermeabilizationChoice(false)}
                                  variant="outline"
                                  className="h-24 text-lg flex flex-col gap-2"
                                >
                                  <X size={32} />
                                  Só Higienização
                                  <span className="text-sm opacity-70">R$ {selectedSize.cleanPrice}</span>
                                </Button>
                                
                                <Button
                                  onClick={() => handleImpermeabilizationChoice(true)}
                                  className="h-24 text-lg flex flex-col gap-2"
                                >
                                  <ShieldCheck size={32} />
                                  Com Impermeabilização
                                  <span className="text-sm opacity-70">
                                    R$ {(selectedSize.cleanPrice || 0) + (selectedSize.impermeabilizationPrice || 0)}
                                  </span>
                                </Button>
                              </div>
                            </div>
                          ) : null
                        )}
                      </div>
                    )}

                    {/* Etapa 4: Resultado */}
                    {currentStep === 4 && selectedService && selectedSize && (
                      <div className="text-center max-w-3xl mx-auto">
                        <div className="mb-8">
                          <Star className="w-20 h-20 mx-auto text-accent mb-4 animate-pulse" />
                          <h4 className="text-3xl font-bold text-foreground mb-4">Seu Orçamento Exclusivo</h4>
                        </div>

                        {/* Resumo do Pedido */}
                        <div className="card-minimal mb-8 p-6">
                          <h5 className="text-xl font-bold text-foreground mb-4">Resumo do Pedido</h5>
                          <div className="text-left space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Serviço:</span>
                              <span className="font-medium text-foreground">{selectedService.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Item:</span>
                              <span className="font-medium text-foreground">{selectedSize.name}</span>
                            </div>
                            {selectedSize.id === "cadeiras" && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Quantidade:</span>
                                <span className="font-medium text-foreground">{chairQuantity} unidades</span>
                              </div>
                            )}
                            {wantsImpermeabilization && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Impermeabilização:</span>
                                <span className="font-medium text-accent">✓ Incluída</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Preços */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className="card-minimal p-6 border-2 border-accent">
                            <div className="text-lg font-bold text-accent mb-2">💰 À Vista (Pix/Dinheiro)</div>
                            <div className="text-3xl font-black text-foreground">R$ {calculatePrices().cashPrice}</div>
                            <div className="text-sm text-muted-foreground mt-2">Melhor preço garantido</div>
                          </div>
                          
                          <div className="card-minimal p-6">
                            <div className="text-lg font-bold text-primary mb-2">💳 Parcelado</div>
                            <div className="text-2xl font-bold text-foreground">
                              12x de R$ {Math.round(calculatePrices().installmentPrice / 12)}
                            </div>
                            <div className="text-sm text-muted-foreground mt-2">Total: R$ {calculatePrices().installmentPrice}</div>
                          </div>
                        </div>

                        {/* Benefícios inclusos */}
                        <div className="card-minimal p-6 mb-8">
                          <h5 className="text-lg font-bold text-foreground mb-4">🏆 Incluído no Serviço</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>Certificado de garantia 6 meses</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>Neutralização de odores</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>Proteção contra ácaros</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>Atendimento premium no RJ</span>
                            </div>
                          </div>
                        </div>

                        {/* CTA Final */}
                        <Button
                          onClick={handleWhatsApp}
                          size="lg"
                          className="cta-primary text-xl px-12 py-6 group w-full md:w-auto"
                        >
                          <MessageCircle className="mr-4 group-hover:scale-110 transition-transform duration-300" size={28} />
                          👉 Quero Meu Orçamento Agora
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mini estatísticas */}
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent animate-pulse" />
              <span>+2.500 orçamentos calculados</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span>Resultado em 30 segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent animate-pulse" />
              <span>Preços exclusivos</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BudgetCalculatorGamefied;