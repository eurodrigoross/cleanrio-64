import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Calendar,
  Star,
  Sofa,
  Car,
  Bed,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Target,
  Zap,
  BarChart3
} from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";

interface DashboardStats {
  totalRevenue: number;
  totalContacts: number;
  confirmedServices: number;
  pendingServices: number;
}

interface ServiceStats {
  service: string;
  count: number;
  revenue: number;
}

export const DashboardOverview = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalRevenue: 0,
    totalContacts: 0,
    confirmedServices: 0,
    pendingServices: 0
  });
  
  const [serviceStats, setServiceStats] = useState<ServiceStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Dados demo até conectar o Supabase
      const mockContacts = [
        { service_type: "Higienização de Sofá", status: "confirmed", total_price: 250 },
        { service_type: "Higienização de Carro", status: "confirmed", total_price: 280 },
        { service_type: "Higienização de Colchão", status: "pending", total_price: 180 },
        { service_type: "Higienização de Sofá", status: "confirmed", total_price: 350 },
        { service_type: "Impermeabilização de Sofá", status: "pending", total_price: 380 },
      ];

      // Calcular estatísticas
      const totalContacts = mockContacts.length;
      const confirmedServices = mockContacts.filter(c => c.status === 'confirmed').length;
      const pendingServices = mockContacts.filter(c => c.status === 'pending').length;
      
      const totalRevenue = mockContacts
        .filter(c => c.status === 'confirmed')
        .reduce((sum, contact) => sum + (contact.total_price || 0), 0);

      // Estatísticas por tipo de serviço
      const serviceMap = new Map<string, { count: number; revenue: number }>();
      
      mockContacts.forEach(contact => {
        const service = contact.service_type || 'Outros';
        const current = serviceMap.get(service) || { count: 0, revenue: 0 };
        serviceMap.set(service, {
          count: current.count + 1,
          revenue: current.revenue + (contact.status === 'confirmed' ? (contact.total_price || 0) : 0)
        });
      });

      const serviceStatsArray = Array.from(serviceMap.entries()).map(([service, data]) => ({
        service,
        count: data.count,
        revenue: data.revenue
      })).sort((a, b) => b.count - a.count);

      setStats({
        totalRevenue,
        totalContacts,
        confirmedServices,
        pendingServices
      });
      
      setServiceStats(serviceStatsArray);
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes('sofá') || service.toLowerCase().includes('sofa')) {
      return <Sofa className="h-4 w-4" />;
    }
    if (service.toLowerCase().includes('carro') || service.toLowerCase().includes('car')) {
      return <Car className="h-4 w-4" />;
    }
    if (service.toLowerCase().includes('colchão') || service.toLowerCase().includes('mattress')) {
      return <Bed className="h-4 w-4" />;
    }
    return <Star className="h-4 w-4" />;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="space-y-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-8 bg-muted rounded w-1/2"></div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const sparklineData = [12, 19, 15, 27, 18, 25, 22, 35, 28, 32];

  const renderSparkline = (data: number[], color: string) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 60;
      const y = 20 - ((value - min) / range) * 15;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="w-16 h-6">
        <svg width="60" height="20" viewBox="0 0 60 20" className="overflow-visible">
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          <circle
            cx={((data.length - 1) / (data.length - 1)) * 60}
            cy={20 - ((data[data.length - 1] - min) / range) * 15}
            r="2"
            fill={color}
          />
        </svg>
      </div>
    );
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Cards de estatísticas principais - Minimalista */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Receita Total</CardTitle>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(stats.totalRevenue)}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                      <ArrowUpRight size={12} />
                      <span>+12.5%</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">vs mês anterior</span>
                  </div>
                </div>
                {renderSparkline(sparklineData, "#2563eb")}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Total de Leads</CardTitle>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.totalContacts}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                      <Activity size={12} />
                      <span>Via calculadora</span>
                    </div>
                  </div>
                </div>
                {renderSparkline([8, 12, 15, 18, 22, 19, 25, 28, 24, 32], "#2563eb")}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Taxa Conversão</CardTitle>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.totalContacts > 0 ? Math.round((stats.confirmedServices / stats.totalContacts) * 100) : 0}%
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                      <TrendingUp size={12} />
                      <span>{stats.confirmedServices} confirmados</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {stats.confirmedServices}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Pendentes</CardTitle>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center relative">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {stats.pendingServices > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.pendingServices}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                      <Zap size={12} />
                      <span>Requer atenção</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Aguardando
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    confirmação
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Seção de Analytics Modernizada */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Serviços Mais Solicitados - Minimalista */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Serviços Mais Solicitados</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Performance dos últimos 30 dias</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceStats.length > 0 ? (
                serviceStats.map((service, index) => {
                  const percentage = stats.totalContacts > 0 ? (service.count / stats.totalContacts) * 100 : 0;
                  const isTop = index === 0;
                  
                  return (
                    <motion.div
                      key={service.service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`group relative p-4 rounded-lg border transition-all duration-300 hover:shadow-sm ${
                        isTop 
                          ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/30' 
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                            isTop 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}>
                            <span className="text-xs font-bold">#{index + 1}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-gray-600 dark:text-gray-400">
                              {getServiceIcon(service.service)}
                            </div>
                            <span className="font-medium text-sm text-gray-900 dark:text-white">{service.service}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">{service.count}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">leads</span>
                          </div>
                          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {formatCurrency(service.revenue)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>Conversão</span>
                          <span>{percentage.toFixed(1)}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`h-full rounded-full ${
                              isTop 
                                ? 'bg-blue-600' 
                                : 'bg-gray-400 dark:bg-gray-500'
                            }`}
                          />
                        </div>
                      </div>
                      
                      {isTop && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted/50 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <p className="text-muted-foreground">Nenhum dado disponível ainda</p>
                  <p className="text-xs text-muted-foreground mt-1">Aguardando primeiros leads...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Resumo Financeiro - Minimalista */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Resumo Financeiro</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Distribuição por método</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* PIX */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant="outline" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                      PIX
                    </Badge>
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {formatCurrency(stats.totalRevenue * 0.6)}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Pagamentos instantâneos</span>
                  <span>60%</span>
                </div>
                <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Cartão */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <DollarSign className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant="outline" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                      Cartão
                    </Badge>
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {formatCurrency(stats.totalRevenue * 0.4)}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Parcelado</span>
                  <span>40%</span>
                </div>
                <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Total */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Total Geral</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatCurrency(stats.totalRevenue)}
                  </span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};