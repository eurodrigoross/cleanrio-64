import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Instagram, Quote, X } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Carolina Silva",
    location: "Copacabana, RJ",
    service: "Sofá 3 Lugares",
    rating: 5,
    comment: "Impressionante! Meu sofá estava com manchas terríveis e ficou novo de novo. O atendimento foi excepcional e cumpriram exatamente o que prometeram.",
    image: "👩‍💼",
    date: "Há 2 dias",
    verified: true
  },
  {
    id: "2", 
    name: "Carlos Eduardo Santos",
    location: "Barra da Tijuca, RJ",
    service: "Interior Carro SUV",
    rating: 5,
    comment: "Serviço top! Meu carro estava com cheiro ruim e manchas no banco. Fizeram impermeabilização também. Resultado perfeito, recomendo muito!",
    image: "👨‍💻",
    date: "Há 4 dias",
    verified: true
  },
  {
    id: "3",
    name: "Mariana Costa",
    location: "Ipanema, RJ", 
    service: "Sofá + Impermeabilização",
    rating: 5,
    comment: "A equipe da Machado Clean é sensacional! Pontuais, educados e o resultado superou minhas expectativas. Vale cada centavo!",
    image: "👩‍🎨",
    date: "Há 1 semana",
    verified: true
  },
  {
    id: "4",
    name: "Ricardo Oliveira",
    location: "Leblon, RJ",
    service: "Colchão King Size",
    rating: 5,
    comment: "Tinha alergia por causa dos ácaros no colchão. Depois do serviço, problema resolvido! Dormir ficou muito melhor. Equipe profissional demais.",
    image: "👨‍⚕️",
    date: "Há 1 semana",
    verified: true
  },
  {
    id: "5",
    name: "Juliana Pereira",
    location: "Tijuca, RJ",
    service: "Sofá 2 Lugares",
    rating: 5,
    comment: "Excelente custo-benefício! Meu sofá estava desbotado e com manchas de café. Ficou impecável. Atendimento nota 10 do início ao fim.",
    image: "👩‍🏫",
    date: "Há 2 semanas",
    verified: true
  }
];

const SocialProofCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showInstagramModal, setShowInstagramModal] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
              O que nossos <span className="text-machado-neon">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              +500 famílias já transformaram seus estofados conosco. Veja os depoimentos reais!
            </p>
            
            {/* Estatísticas rápidas */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-machado-royal">4.9/5</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-machado-royal font-bold">+500 avaliações</div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-machado-royal font-bold">100% verificadas</div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Controles */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} className="text-machado-royal" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} className="text-machado-royal" />
            </button>

            {/* Card do depoimento */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 min-h-80">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">
                  {testimonials[currentIndex].image}
                </div>
                
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-machado-royal">
                          {testimonials[currentIndex].name}
                        </h3>
                        {testimonials[currentIndex].verified && (
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            ✓ Verificado
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{testimonials[currentIndex].location}</p>
                      <p className="text-machado-neon text-sm font-medium">{testimonials[currentIndex].service}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex mb-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">{testimonials[currentIndex].date}</p>
                    </div>
                  </div>

                  {/* Comentário */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-machado-neon/20" size={32} />
                    <p className="text-gray-700 text-lg leading-relaxed pl-6">
                      {testimonials[currentIndex].comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-machado-neon scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA para mais avaliações */}
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowInstagramModal(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Instagram className="mr-3" size={24} />
              Ver Mais Avaliações Reais
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Instagram */}
      {showInstagramModal && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-content p-8 max-w-2xl animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-machado-royal">Mais Avaliações Reais</h3>
              <button 
                onClick={() => setShowInstagramModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-3xl text-white mb-6">
                <Instagram size={64} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">@machadoclean_oficial</h4>
                <p className="opacity-90">Acompanhe nossos trabalhos diários e depoimentos reais de clientes</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-machado-royal mb-1">2.5k+</div>
                  <div className="text-sm text-gray-600">Seguidores</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-machado-royal mb-1">500+</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
              </div>

              <Button 
                onClick={() => window.open('https://instagram.com/machadoclean_oficial', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 font-bold rounded-xl"
              >
                <Instagram className="mr-2" size={20} />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialProofCarousel;