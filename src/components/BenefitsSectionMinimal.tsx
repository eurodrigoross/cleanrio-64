import { Shield, Clock, Sparkles, Award, Zap, Heart } from "lucide-react";

const BenefitsSectionMinimal = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Tecnologia Avançada",
      description: "Equipamentos profissionais que removem 99,9% das bactérias e ácaros do seu estofado"
    },
    {
      icon: Clock,
      title: "Secagem Rápida",
      description: "Processo exclusivo que reduz o tempo de secagem para apenas 2-4 horas"
    },
    {
      icon: Shield,
      title: "Garantia Premium",
      description: "6 meses de garantia total ou seu dinheiro de volta, sem perguntas"
    },
    {
      icon: Award,
      title: "Especialistas Certificados",
      description: "Equipe treinada e certificada com mais de 6 anos de experiência"
    }
  ];

  return (
    <section className="section-container bg-neutral-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Por que escolher a <span className="text-primary">Machado Clean?</span>
          </h2>
          <p className="section-subtitle">
            Tecnologia de ponta, resultados garantidos e a confiança de centenas de famílias cariocas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-minimal group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <benefit.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99,9%</div>
            <p className="text-sm text-muted-foreground">Eliminação de bactérias</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
            <p className="text-sm text-muted-foreground">Meses de garantia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9★</div>
            <p className="text-sm text-muted-foreground">Avaliação Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionMinimal;