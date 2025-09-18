import { Star, Quote } from "lucide-react";
import beforeAfterSofa from "@/assets/before-after-sofa.jpg";
import beforeAfterCar from "@/assets/before-after-car.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Copacabana, RJ",
    rating: 5,
    text: "Incrível! Meu sofá estava com manchas de anos e ficou como novo. A impermeabilização realmente funciona, já testei derramando água e não absorve nada!",
    avatar: "M"
  },
  {
    name: "João Santos",
    location: "Barra da Tijuca, RJ",
    rating: 5,
    text: "Serviço impecável! Higienizaram meu carro e o resultado superou minhas expectativas. Ainda tem o cheiro de novo depois de 4 meses.",
    avatar: "J"
  },
  {
    name: "Ana Rodrigues",
    location: "Ipanema, RJ",
    rating: 5,
    text: "Profissionais super atenciosos e pontuais. O resultado da higienização do sofá foi surpreendente. Recomendo de olhos fechados!",
    avatar: "A"
  }
];

const beforeAfterImages = [
  {
    image: beforeAfterSofa,
    title: "Sofá - Antes e Depois",
    description: "Manchas profundas eliminadas completamente"
  },
  {
    image: beforeAfterCar,
    title: "Carro - Antes e Depois", 
    description: "Interior automotivo renovado"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Resultados que Impressionam
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja a transformação real e o que nossos clientes dizem
          </p>
        </div>

        {/* Galeria Antes e Depois */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {beforeAfterImages.map((item, index) => (
            <div 
              key={index}
              className="tech-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="tech-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="text-primary/20 mb-2" size={32} />
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;