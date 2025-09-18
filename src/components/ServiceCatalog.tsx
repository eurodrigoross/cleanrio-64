import { useState } from "react";
import { Car, Sofa } from "lucide-react";
import ServiceModal from "./ServiceModal";
import sofa2Lugares from "@/assets/sofa-2-lugares.jpg";
import sofa3Lugares from "@/assets/sofa-3-lugares.jpg";
import carHatch from "@/assets/car-hatch.jpg";
import carSedan from "@/assets/car-sedan.jpg";

const services = [
  {
    id: 1,
    title: "Sofá 2 Lugares",
    icon: Sofa,
    price: "R$ 299",
    originalPrice: "R$ 450",
    image: sofa2Lugares,
    benefits: [
      "Higienização profunda com equipamentos de última geração",
      "Eliminação de 99,9% dos ácaros e bactérias",
      "Neutralização completa de odores",
      "Impermeabilização contra líquidos por 6 meses",
      "Secagem rápida em até 2 horas",
      "Certificado de garantia incluso"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 450" },
      { name: "Concorrente B", price: "R$ 420" }
    ],
    ourPrice: "R$ 299",
    ourPriceInstallments: "ou 10x de R$ 29,90 sem juros"
  },
  {
    id: 2,
    title: "Sofá 3 Lugares",
    icon: Sofa,
    price: "R$ 399",
    originalPrice: "R$ 580",
    image: sofa3Lugares,
    benefits: [
      "Higienização profunda com equipamentos de última geração",
      "Eliminação de 99,9% dos ácaros e bactérias",
      "Neutralização completa de odores",
      "Impermeabilização contra líquidos por 6 meses",
      "Secagem rápida em até 3 horas",
      "Certificado de garantia incluso"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 580" },
      { name: "Concorrente B", price: "R$ 550" }
    ],
    ourPrice: "R$ 399",
    ourPriceInstallments: "ou 10x de R$ 39,90 sem juros"
  },
  {
    id: 3,
    title: "Sofá 4 Lugares",
    icon: Sofa,
    price: "R$ 499",
    originalPrice: "R$ 720",
    image: sofa3Lugares, // Usando a mesma imagem temporariamente
    benefits: [
      "Higienização profunda com equipamentos de última geração",
      "Eliminação de 99,9% dos ácaros e bactérias",
      "Neutralização completa de odores",
      "Impermeabilização contra líquidos por 6 meses",
      "Secagem rápida em até 4 horas",
      "Certificado de garantia incluso"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 720" },
      { name: "Concorrente B", price: "R$ 690" }
    ],
    ourPrice: "R$ 499",
    ourPriceInstallments: "ou 10x de R$ 49,90 sem juros"
  },
  {
    id: 4,
    title: "Carro Hatch",
    icon: Car,
    price: "R$ 349",
    originalPrice: "R$ 500",
    image: carHatch,
    benefits: [
      "Higienização completa dos bancos e estofados",
      "Aspiração profissional de carpetes e frestas",
      "Limpeza e proteção do painel e plásticos",
      "Impermeabilização dos bancos por 6 meses",
      "Eliminação de odores e bactérias",
      "Certificado de garantia incluso"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 500" },
      { name: "Concorrente B", price: "R$ 480" }
    ],
    ourPrice: "R$ 349",
    ourPriceInstallments: "ou 10x de R$ 34,90 sem juros"
  },
  {
    id: 5,
    title: "Carro Sedan",
    icon: Car,
    price: "R$ 399",
    originalPrice: "R$ 580",
    image: carSedan,
    benefits: [
      "Higienização completa dos bancos e estofados",
      "Aspiração profissional de carpetes e frestas",
      "Limpeza e proteção do painel e plásticos",
      "Impermeabilização dos bancos por 6 meses",
      "Eliminação de odores e bactérias",
      "Certificado de garantia incluso"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 580" },
      { name: "Concorrente B", price: "R$ 560" }
    ],
    ourPrice: "R$ 399",
    ourPriceInstallments: "ou 10x de R$ 39,90 sem juros"
  },
  {
    id: 6,
    title: "Combo Sofá + Impermeabilização",
    icon: Sofa,
    price: "R$ 549",
    originalPrice: "R$ 800",
    image: sofa3Lugares,
    benefits: [
      "Higienização profunda de sofá 3 lugares",
      "Impermeabilização premium com dupla proteção",
      "Aplicação de anti-fungos e anti-ácaros",
      "Proteção UV contra desbotamento",
      "Garantia estendida de 8 meses",
      "Manutenção gratuita no 6º mês"
    ],
    competitors: [
      { name: "Concorrente A", price: "R$ 800" },
      { name: "Concorrente B", price: "R$ 750" }
    ],
    ourPrice: "R$ 549",
    ourPriceInstallments: "ou 10x de R$ 54,90 sem juros"
  }
];

const ServiceCatalog = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clique em qualquer serviço para ver detalhes, comparação de preços e agendar pelo WhatsApp
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-box rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center text-primary">
                {service.title}
              </h3>
              
              <div className="text-center mb-4">
                <span className="text-sm text-muted-foreground line-through">
                  {service.originalPrice}
                </span>
                <div className="text-3xl font-bold text-accent">
                  {service.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 10x sem juros
                </p>
              </div>
              
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                  Clique para ver detalhes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default ServiceCatalog;