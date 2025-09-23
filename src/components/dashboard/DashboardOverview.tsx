import { useEffect, useState } from "react";
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
  Bed
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

  return (
    <div className="space-y-6">
      {/* Cards de estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(stats.totalRevenue)}
            </div>
            <p className="text-xs text-muted-foreground">
              Últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Contatos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContacts}</div>
            <p className="text-xs text-muted-foreground">
              Recebidos via quiz
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Serviços Confirmados</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.confirmedServices}</div>
            <p className="text-xs text-muted-foreground">
              Taxa de conversão: {stats.totalContacts > 0 ? Math.round((stats.confirmedServices / stats.totalContacts) * 100) : 0}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.pendingServices}</div>
            <p className="text-xs text-muted-foreground">
              Aguardando confirmação
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de serviços mais solicitados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Serviços Mais Solicitados
            </CardTitle>
            <CardDescription>
              Ranking dos serviços no último mês
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {serviceStats.length > 0 ? (
              serviceStats.map((service, index) => (
                <div key={service.service} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={index === 0 ? "default" : "secondary"}>
                        #{index + 1}
                      </Badge>
                      {getServiceIcon(service.service)}
                      <span className="font-medium">{service.service}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{service.count} contatos</div>
                      <div className="text-sm text-muted-foreground">
                        {formatCurrency(service.revenue)}
                      </div>
                    </div>
                  </div>
                  <Progress 
                    value={stats.totalContacts > 0 ? (service.count / stats.totalContacts) * 100 : 0} 
                    className="h-2"
                  />
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Nenhum dado disponível ainda
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo Financeiro</CardTitle>
            <CardDescription>
              Análise de receita por tipo de pagamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">PIX</Badge>
                  <span>Pagamentos via PIX</span>
                </div>
                <span className="font-bold text-green-600">
                  {formatCurrency(stats.totalRevenue * 0.6)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Cartão</Badge>
                  <span>Pagamentos no cartão</span>
                </div>
                <span className="font-bold text-blue-600">
                  {formatCurrency(stats.totalRevenue * 0.4)}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Geral</span>
                <span className="text-xl font-bold text-primary">
                  {formatCurrency(stats.totalRevenue)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};