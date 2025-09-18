import { Star, Quote, CheckCircle, Users, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProofMinimal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Barra da Tijuca",
      text: "Incrível! Meu sofá ficou como novo. O cheiro ruim que tinha há meses desapareceu completamente. Super recomendo a Machado Clean!",
      rating: 5,
      service: "Higienização de Sofá"
    },
    {
      name: "Carlos Santos",
      location: "Copacabana",
      text: "Profissionais muito competentes. Chegaram no horário, fizeram um trabalho impecável no meu colchão. Valeu cada centavo!",
      rating: 5,
      service: "Higienização de Colchão"
    },
    {
      name: "Ana Rodriguez",
      location: "Tijuca",
      text: "Serviço de qualidade excepcional. Meu estofado do carro ficou perfeito, sem manchas e com cheiro fresquinho. Muito satisfeita!",
      rating: 5,
      service: "Higienização Automotiva"
    },
    {
      name: "Roberto Oliveira",
      location: "Méier",
      text: "A garantia de 6 meses me deu confiança para contratar. O resultado superou minhas expectativas. Empresa séria e profissional.",
      rating: 5,
      service: "Impermeabilização"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-container bg-neutral-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="section-subtitle">
            Mais de 500 famílias já transformaram seus estofados conosco
          </p>
        </div>

        {/* Badges de confiança */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm border border-neutral-100">
            <Users className="text-primary" size={24} />
            <div>
              <div className="font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm border border-neutral-100">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div>
              <div className="font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação Google</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm border border-neutral-100">
            <CheckCircle className="text-accent" size={24} />
            <div>
              <div className="font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-100">
            <Quote className="text-primary/20 mb-6" size={48} />
            
            <div className="min-h-32">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <div className="font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex mb-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].service}
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-primary' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Garantia social */}
        <div className="max-w-2xl mx-auto mt-16 text-center bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
            <CheckCircle className="text-accent" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Satisfação Garantida
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Junte-se a centenas de clientes satisfeitos. Se não ficar 100% satisfeito, 
            <strong className="text-primary"> seu dinheiro de volta em até 30 dias.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofMinimal;