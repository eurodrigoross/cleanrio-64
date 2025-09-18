import { useState } from "react";
import { Shield, Award, CheckCircle, Star, Clock, Users } from "lucide-react";

const GuaranteeCertificate = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const benefits = [
    {
      id: "retrabalho",
      title: "Retrabalho Gratuito",
      description: "Se não ficar 100% satisfeito, refazemos sem custo adicional",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      id: "qualidade",
      title: "Garantia de Qualidade", 
      description: "Produtos premium importados e técnicas profissionais certificadas",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      id: "pontualidade",
      title: "Pontualidade Garantida",
      description: "Chegamos no horário marcado ou você ganha desconto",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      id: "satisfacao",
      title: "100% Satisfação",
      description: "Mais de 500 clientes satisfeitos comprovam nossa excelência",
      icon: Users,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-machado-royal">
            Garantia <span className="text-machado-neon">Premium Certificada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalho garantido por 6 meses • Certificado de qualidade • 100% de satisfação
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certificado 3D Principal */}
          <div className="relative mb-16">
            <div className="card-3d bg-gradient-to-br from-white to-gray-50 p-12 border-2 border-machado-neon/20 group">
              {/* Selo Premium */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-black text-sm shadow-lg">
                ⭐ CERTIFICADO PREMIUM ⭐
              </div>

              {/* Header do Certificado */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <Shield className="w-24 h-24 text-machado-neon mx-auto drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                </div>
                
                <h3 className="text-4xl font-black text-machado-royal mb-4">
                  CERTIFICADO DE GARANTIA
                </h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <span className="text-2xl font-bold text-machado-neon">6 MESES</span>
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-gray-600 text-lg">
                  Este certificado garante a qualidade premium do serviço prestado pela Machado Clean
                </p>
              </div>

              {/* Grid de Benefícios */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={benefit.id}
                      className={`glass-card text-center cursor-pointer transition-all duration-500 ${
                        hoveredBenefit === benefit.id ? 'scale-110 shadow-2xl' : ''
                      }`}
                      onMouseEnter={() => setHoveredBenefit(benefit.id)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <IconComponent className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`} />
                      <h4 className="font-bold text-machado-royal mb-2 text-sm">
                        {benefit.title}
                      </h4>
                      
                      {/* Descrição expandida no hover */}
                      <div className={`transition-all duration-300 overflow-hidden ${
                        hoveredBenefit === benefit.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-gray-600 mt-2">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Assinatura Digital */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Certificado por:</p>
                    <p className="font-bold text-machado-royal">Machado Clean</p>
                    <p className="text-xs text-gray-500">Higienização Premium • Rio de Janeiro</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Válido até:</p>
                    <p className="font-bold text-machado-neon">6 meses da data do serviço</p>
                    <div className="flex items-center gap-1 justify-end mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">Qualidade 5 estrelas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Número do certificado */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Certificado Nº: MC-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </div>

            {/* Efeitos decorativos */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-machado-neon/10 to-machado-green/10 rounded-3xl"></div>
            <div className="absolute -z-20 top-8 left-8 w-full h-full bg-gradient-to-br from-machado-royal/5 to-machado-purple/5 rounded-3xl"></div>
          </div>

          {/* Estatísticas de Confiança */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card">
              <div className="text-4xl font-black text-machado-neon mb-2">500+</div>
              <p className="text-gray-600 font-medium">Clientes Satisfeitos</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center glass-card">
              <div className="text-4xl font-black text-machado-green mb-2">0</div>
              <p className="text-gray-600 font-medium">Reclamações Não Resolvidas</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-xs text-green-600 font-bold">100% Resolvido</span>
              </div>
            </div>
            
            <div className="text-center glass-card">
              <div className="text-4xl font-black text-machado-royal mb-2">6</div>
              <p className="text-gray-600 font-medium">Meses de Garantia</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                <Shield size={16} className="text-machado-neon" />
                <span className="text-xs text-machado-neon font-bold">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeCertificate;