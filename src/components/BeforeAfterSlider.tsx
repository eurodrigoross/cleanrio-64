import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title }: BeforeAfterProps) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="glass-card overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-4 text-machado-royal">{title}</h3>
      
      <div className="relative aspect-video overflow-hidden rounded-xl">
        {/* Imagem "Depois" (background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />
        
        {/* Imagem "Antes" (overlay com clip) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-200 ease-out"
          style={{ 
            backgroundImage: `url(${beforeImage})`,
            clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)`
          }}
        />
        
        {/* Linha divisória */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-200 ease-out"
          style={{ left: `${sliderValue[0]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-machado-neon rounded-full"></div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          ANTES
        </div>
        <div className="absolute top-4 right-4 bg-machado-neon text-white px-3 py-1 rounded-full text-sm font-medium">
          DEPOIS
        </div>
      </div>
      
      {/* Slider */}
      <div className="mt-6 px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Arraste para comparar</span>
          <span>{sliderValue[0]}%</span>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const comparisons = [
    {
      beforeImage: "/api/placeholder/600/400",
      afterImage: "/api/placeholder/600/400",
      title: "Sofá 3 Lugares - Higienização Completa"
    },
    {
      beforeImage: "/api/placeholder/600/400", 
      afterImage: "/api/placeholder/600/400",
      title: "Interior do Carro - Impermeabilização"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            Resultados que <span className="text-machado-neon">Impressionam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja com seus próprios olhos a diferença que nosso trabalho faz. 
            Arraste o slider para comparar antes e depois!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <div 
              key={index} 
              className="animate-slide-in-3d"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <BeforeAfterSlider {...comparison} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-machado-neon/10 px-8 py-4 rounded-2xl">
            <div className="text-4xl">✨</div>
            <div>
              <p className="text-lg font-bold text-machado-royal">Garantia de Resultado</p>
              <p className="text-gray-600">Se não ficar satisfeito, refazemos gratuitamente!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;