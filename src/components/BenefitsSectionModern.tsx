import { Shield, Sparkles, Heart, CheckCircle, Award, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Higienização Profunda",
    description: "Eliminação total de ácaros, bactérias e fungos com tecnologia avançada",
    color: "text-machado-neon"
  },
  {
    icon: Shield,
    title: "Neutralização de Odores",
    description: "Remoção definitiva de odores indesejados e maus cheiros",
    color: "text-machado-light"
  },
  {
    icon: Zap,
    title: "Impermeabilização Premium",
    description: "Proteção total contra líquidos, manchas e sujeiras por 6 meses",
    color: "text-machado-green"
  },
  {
    icon: Heart,
    title: "Saúde da Família",
    description: "Prevenção de alergias e infecções respiratórias",
    color: "text-red-400"
  },
  {
    icon: Award,
    title: "Garantia Certificada",
    description: "6 meses de garantia com certificado assinado e suporte",
    color: "text-machado-purple"
  },
  {
    icon: CheckCircle,
    title: "Resultado Imediato",
    description: "Veja a diferença na hora, estofado como novo em minutos",
    color: "text-machado-royal"
  }
];

const BenefitsSectionModern = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-machado-light/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-machado-neon/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            Por que escolher a <span className="text-machado-neon">Machado Clean?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tecnologia de ponta, profissionais especializados e resultados que você pode ver, sentir e confiar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-3d rounded-3xl p-8 text-center group bg-white border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-machado-royal/10 to-machado-neon/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`${benefit.color} group-hover:scale-110 transition-transform duration-300`} size={40} />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-machado-neon/20 to-machado-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-machado-royal group-hover:text-machado-neon transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>

              {/* Indicador de destaque */}
              <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-machado-neon to-machado-green mx-auto mt-4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionModern;