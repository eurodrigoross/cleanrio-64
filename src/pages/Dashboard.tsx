import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ContactsManager } from "@/components/dashboard/ContactsManager";
import { PricingManager } from "@/components/dashboard/PricingManager";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Settings,
  Shield,
  Activity,
  Bell,
  Search,
  Filter,
  Plus,
  TrendingUp,
  Clock,
  Zap
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "lead", message: "Novo lead: João Silva - Sofá 3 lugares", time: "2 min" },
    { id: 2, type: "booking", message: "Agendamento confirmado para hoje 14h", time: "5 min" },
    { id: 3, type: "payment", message: "Pagamento recebido - R$ 250", time: "10 min" }
  ]);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-pulse">
            <Shield className="text-white" size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Carregando Dashboard
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dashboardGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashboardGrid)" />
        </svg>
      </div>

      <div className="relative z-10 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/25">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Dashboard Machado Clean
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                    CRM em tempo real - Sistema ativo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    placeholder="Buscar leads, agendamentos..."
                    className="pl-10 w-64 bg-background/50 backdrop-blur-sm border-border/50 focus:bg-background"
                  />
                </div>

                {/* Notifications */}
                <div className="relative">
                  <Button variant="outline" size="icon" className="relative bg-background/50 backdrop-blur-sm border-border/50">
                    <Bell size={18} />
                    {notifications.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white">
                        {notifications.length}
                      </Badge>
                    )}
                  </Button>
                </div>

                {/* Quick Actions */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus size={18} className="mr-2" />
                  Novo Lead
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: "Conversão", value: "23.5%", change: "+2.1%" },
                { icon: Users, label: "Leads Hoje", value: "12", change: "+4" },
                { icon: DollarSign, label: "Receita Mês", value: "R$ 8.4K", change: "+12%" },
                { icon: Clock, label: "Agendamentos", value: "8", change: "+2" }
              ].map((stat, index) => (
                <Card key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className="text-xs flex items-center gap-1 text-blue-600 dark:text-blue-400">
                          <TrendingUp size={12} />
                          {stat.change}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <stat.icon size={20} className="text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 h-12">
                <TabsTrigger 
                  value="overview" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Visão Geral</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="contacts" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Contatos</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="pricing" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <DollarSign className="h-4 w-4" />
                  <span className="hidden sm:inline">Preços</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="settings" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Config</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <DashboardOverview />
              </TabsContent>

              <TabsContent value="contacts" className="space-y-6">
                <ContactsManager />
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <PricingManager />
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Configurações do Sistema
                    </CardTitle>
                    <CardDescription>
                      Configure as opções gerais do dashboard e integração WhatsApp
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Integração WhatsApp</h4>
                        <div className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                          <div>
                            <p className="font-medium">Número WhatsApp Business</p>
                            <p className="text-sm text-muted-foreground">+55 21 99161-2893</p>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                            Conectado
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Notificações</h4>
                        <div className="space-y-3">
                          {[
                            "Novos leads da calculadora",
                            "Agendamentos confirmados",
                            "Pagamentos recebidos"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm">{item}</span>
                              <div className="w-10 h-6 bg-accent rounded-full p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-4 transition-transform" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;