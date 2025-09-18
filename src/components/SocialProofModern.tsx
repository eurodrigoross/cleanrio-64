import { Star, Instagram, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Maria Silva",
    location: "Copacabana",
    rating: 5,
    comment: "Incrível! Meu sofá ficou como novo. A equipe é super profissional e o resultado superou minhas expectativas. Recomendo demais!",
    service: "Sofá 3 lugares + Impermeabilização",
    date: "Há 2 dias"
  },
  {
    name: "Carlos Mendes", 
    location: "Barra da Tijuca",
    rating: 5,
    comment: "Serviço impecável no meu carro. Removeram manchas que eu achava impossível. Garantia de 6 meses me deu total confiança!",
    service: "Higienização Automotiva",
    date: "Há 1 semana"
  },
  {
    name: "Ana Paula",
    location: "Ipanema", 
    rating: 5,
    comment: "Fantástico! Eliminaram completamente o odor do meu sofá. O atendimento foi rápido e o preço justo. Virei cliente fiel!",
    service: "Neutralização de Odores",
    date: "Há 3 dias"
  },
  {
    name: "Roberto Costa",
    location: "Tijuca",
    rating: 5, 
    comment: "Profissionais top! Cumpriram tudo que prometeram. Meu estofado está protegido há 4 meses e ainda parece novo.",
    service: "Impermeabilização Premium",
    date: "Há 5 dias"
  }
];

const SocialProofModern = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-machado-royal/5 to-machado-neon/5 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-machado-light/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-machado-green/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            O que nossos <span className="text-machado-neon">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mais de 500 famílias cariocas já transformaram seus estofados conosco
          </p>
          
          {/* Estatísticas sociais */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <Instagram className="text-machado-neon" size={24} />
              <div>
                <div className="text-2xl font-bold text-machado-royal">1.2k+</div>
                <div className="text-sm text-gray-600">Seguidores</div>
              </div>
            </div>
            
            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold text-machado-royal">4.9</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
            
            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <MessageCircle className="text-machado-green" size={24} />
              <div>
                <div className="text-2xl font-bold text-machado-royal">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="card-3d bg-white p-8 rounded-3xl border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header do review */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-machado-royal to-machado-neon rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-machado-royal text-lg">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>

              {/* Comentário */}
              <blockquote className="text-gray-700 leading-relaxed mb-4 text-lg italic">
                "{review.comment}"
              </blockquote>

              {/* Serviço */}
              <div className="bg-machado-light/10 px-4 py-2 rounded-xl inline-block">
                <p className="text-sm font-medium text-machado-royal">{review.service}</p>
              </div>

              {/* Elemento decorativo do card */}
              <div className="absolute top-4 right-4 text-6xl text-machado-neon/10">
                "
              </div>
            </div>
          ))}
        </div>

        {/* CTA Social */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 text-machado-royal">
              Junte-se aos nossos clientes satisfeitos!
            </h3>
            <p className="text-gray-600 mb-6">
              Milhares de estofados renovados, famílias mais saudáveis e lares mais bonitos
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-machado-neon rounded-full animate-pulse"></div>
                <span>Respondemos em minutos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-machado-green rounded-full animate-pulse"></div>
                <span>Agendamento rápido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofModern;