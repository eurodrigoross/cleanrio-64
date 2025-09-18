import { Shield, Award, RefreshCw, Headphones } from "lucide-react";

const GuaranteeSectionModern = () => {
  const guaranteeFeatures = [
    {
      icon: Award,
      title: "Certificado Assinado",
      description: "Documento oficial com detalhes do serviço e garantia válida",
      color: "text-machado-neon"
    },
    {
      icon: RefreshCw,
      title: "Retorno Gratuito",
      description: "Se não ficar satisfeito, refazemos sem custo adicional",
      color: "text-machado-green"
    },
    {
      icon: Headphones,
      title: "Suporte Completo",
      description: "Atendimento especializado durante todo o período de garantia",
      color: "text-machado-purple"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-machado-royal to-machado-light text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-machado-neon/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Shield className="w-24 h-24 mx-auto mb-8 text-yellow-300 animate-pulse-neon" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Garantia de <span className="text-yellow-300">6 Meses</span> Certificada
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-yellow-300">Nosso compromisso é entregar resultados reais,</span>
            <br />ou você não paga nada.
          </p>
        </div>

        {/* Cards de garantia */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {guaranteeFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glass-card text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <feature.icon className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} size={40} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>

              {/* Indicador visual */}
              <div className="w-0 group-hover:w-12 h-1 bg-yellow-300 mx-auto mt-4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Destaque principal da garantia */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 border-2 border-yellow-300/30">
            <div className="text-8xl mb-6">🛡️</div>
            
            <h3 className="text-4xl font-bold mb-6 text-yellow-300">
              Proteção Total por 6 Meses
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">✅ O que está coberto:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Retorno da sujeira ou manchas</li>
                  <li>• Falha na impermeabilização</li>
                  <li>• Odores que retornarem</li>
                  <li>• Defeitos no serviço realizado</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">🚀 Como acionar:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• WhatsApp: resposta em até 2h</li>
                  <li>• Reagendamento prioritário</li>
                  <li>• Sem custo adicional</li>
                  <li>• Técnico especializado</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-300/20 rounded-2xl">
              <p className="text-lg font-medium text-white">
                💎 <strong>Compromisso Premium:</strong> Se não conseguirmos resolver em até 2 tentativas, 
                devolvemos 100% do seu investimento + uma compensação pela inconveniência.
              </p>
            </div>
          </div>
        </div>

        {/* Indicadores de confiança */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <p className="text-white/80 text-sm">Garantias honradas</p>
          </div>
          
          <div className="w-px h-12 bg-white/20"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
            <p className="text-white/80 text-sm">Sem necessidade de retorno</p>
          </div>
          
          <div className="w-px h-12 bg-white/20"></div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">6</div>
            <p className="text-white/80 text-sm">Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionModern;