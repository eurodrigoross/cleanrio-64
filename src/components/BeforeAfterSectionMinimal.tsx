import { useState, useRef, useEffect } from "react";
import beforeAfterSofa from "@/assets/before-after-sofa.jpg";
import beforeAfterCar from "@/assets/before-after-car.jpg";

const BeforeAfterSectionMinimal = () => {
  const [position, setPosition] = useState(50);
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: beforeAfterSofa,
      title: "Sofá 3 Lugares",
      description: "Remoção completa de manchas e odores"
    },
    {
      image: beforeAfterCar,
      title: "Banco de Carro",
      description: "Higienização profunda com proteção"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Resultados que <span className="text-primary">Impressionam</span>
          </h2>
          <p className="section-subtitle">
            Veja a transformação real dos nossos clientes. Arraste para comparar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Slider de imagens */}
          <div className="mb-8">
            <div 
              ref={containerRef}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize shadow-xl bg-neutral-100"
              onMouseMove={handleMouseMove}
            >
              {/* Imagem "depois" (fundo) */}
              <div className="absolute inset-0">
                <img 
                  src={slides[activeSlide].image} 
                  alt={`${slides[activeSlide].title} - depois da limpeza`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  DEPOIS
                </div>
              </div>

              {/* Imagem "antes" (overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <img 
                  src={slides[activeSlide].image} 
                  alt={`${slides[activeSlide].title} - antes da limpeza`}
                  className="w-full h-full object-cover filter brightness-50 sepia-[0.3]"
                />
                <div className="absolute top-4 left-4 bg-neutral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ANTES
                </div>
              </div>

              {/* Linha divisória */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-neutral-400 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Instruções */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
                ← Arraste para comparar →
              </div>
            </div>

            {/* Informações do slide atual */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {slides[activeSlide].title}
              </h3>
              <p className="text-muted-foreground">
                {slides[activeSlide].description}
              </p>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  activeSlide === index ? 'bg-primary' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>

          {/* Garantia de resultado */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Garantia de Resultado
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Se você não ficar 100% satisfeito com o resultado, 
              <strong className="text-primary"> refazemos o serviço gratuitamente</strong> ou 
              devolvemos seu dinheiro. Sem perguntas, sem pegadinhas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSectionMinimal;