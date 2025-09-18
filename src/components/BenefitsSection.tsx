import { Shield, Sparkles, Heart, CheckCircle, Award } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Higienização Profunda",
    description: "Eliminação completa de ácaros, bactérias e fungos"
  },
  {
    icon: Shield,
    title: "Neutralização de Odores",
    description: "Remoção definitiva de odores indesejados"
  },
  {
    icon: CheckCircle,
    title: "Impermeabilização Premium",
    description: "Proteção total contra líquidos e manchas"
  },
  {
    icon: Heart,
    title: "Saúde da Família",
    description: "Prevenção de alergias e infecções respiratórias"
  },
  {
    icon: Award,
    title: "Garantia Certificada",
    description: "6 meses de garantia com certificado assinado"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia avançada e profissionais especializados para garantir 
            o melhor resultado em higienização e impermeabilização.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="tech-card text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;