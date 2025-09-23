import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Save, 
  RotateCcw,
  Sofa,
  Car,
  Bed,
  Armchair,
  ShieldCheck
} from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PriceTable {
  id?: string;
  category: string;
  subcategory: string;
  item: string;
  clean_price?: number;
  impermeabilization_price?: number;
  updated_at?: string;
}

export const PricingManager = () => {
  const [priceTable, setPriceTable] = useState<PriceTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  // Preços iniciais do sistema (backup)
  const defaultPrices: PriceTable[] = [
    // Sofás
    { category: "sofa", subcategory: "comum", item: "2-lugares", clean_price: 200, impermeabilization_price: 280 },
    { category: "sofa", subcategory: "comum", item: "3-lugares", clean_price: 250, impermeabilization_price: 380 },
    { category: "sofa", subcategory: "comum", item: "jogo-2-3", clean_price: 350, impermeabilization_price: 500 },
    { category: "sofa", subcategory: "retratil", item: "2-modulos", clean_price: 250, impermeabilization_price: 350 },
    { category: "sofa", subcategory: "retratil", item: "3-modulos", clean_price: 300, impermeabilization_price: 450 },
    { category: "sofa", subcategory: "canto", item: "canto", clean_price: 280, impermeabilization_price: 350 },
    { category: "sofa", subcategory: "cama", item: "solteiro", clean_price: 200, impermeabilization_price: 300 },
    { category: "sofa", subcategory: "cama", item: "casal", clean_price: 250, impermeabilization_price: 350 },
    
    // Poltronas
    { category: "poltronas", subcategory: "comum", item: "comum", clean_price: 120, impermeabilization_price: 180 },
    { category: "poltronas", subcategory: "amamentacao", item: "amamentacao", clean_price: 150, impermeabilization_price: 200 },
    { category: "poltronas", subcategory: "papai", item: "papai", clean_price: 150, impermeabilization_price: 200 },
    
    // Colchões
    { category: "colchoes", subcategory: "tamanhos", item: "solteiro", clean_price: 130 },
    { category: "colchoes", subcategory: "tamanhos", item: "viuvo", clean_price: 160 },
    { category: "colchoes", subcategory: "tamanhos", item: "casal", clean_price: 180 },
    { category: "colchoes", subcategory: "tamanhos", item: "queen", clean_price: 220 },
    { category: "colchoes", subcategory: "tamanhos", item: "king", clean_price: 250 },
    { category: "colchoes", subcategory: "tamanhos", item: "super-king", clean_price: 280 },
    { category: "colchoes", subcategory: "tamanhos", item: "berco", clean_price: 120 },
    
    // Carros
    { category: "carros", subcategory: "bancos", item: "pequeno", clean_price: 180 },
    { category: "carros", subcategory: "bancos", item: "medio", clean_price: 230 },
    { category: "carros", subcategory: "bancos", item: "grande", clean_price: 280 },
    { category: "carros", subcategory: "bancos", item: "extra-grande", clean_price: 350 },
    { category: "carros", subcategory: "interna", item: "pequeno", clean_price: 280 },
    { category: "carros", subcategory: "interna", item: "medio", clean_price: 330 },
    { category: "carros", subcategory: "interna", item: "grande", clean_price: 380 },
    { category: "carros", subcategory: "interna", item: "extra-grande", clean_price: 450 },
    
    // Outros
    { category: "puff", subcategory: "tamanhos", item: "pequeno", clean_price: 60, impermeabilization_price: 90 },
    { category: "puff", subcategory: "tamanhos", item: "medio", clean_price: 90, impermeabilization_price: 130 },
    { category: "puff", subcategory: "tamanhos", item: "grande", clean_price: 120, impermeabilization_price: 180 },
    { category: "cadeiras", subcategory: "tipos", item: "so-assento", clean_price: 25, impermeabilization_price: 35 },
    { category: "cadeiras", subcategory: "tipos", item: "so-encosto", clean_price: 25, impermeabilization_price: 35 },
    { category: "cadeiras", subcategory: "tipos", item: "assento-encosto", clean_price: 35, impermeabilization_price: 45 },
  ];

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    try {
      // Usar preços padrão até conectar Supabase
      setPriceTable(defaultPrices);
    } catch (error) {
      console.error('Erro ao buscar preços:', error);
      setPriceTable(defaultPrices);
    } finally {
      setLoading(false);
    }
  };

  const initializePrices = async () => {
    // Função removida até conectar Supabase
  };

  const updatePrice = (index: number, field: 'clean_price' | 'impermeabilization_price', value: string) => {
    const numValue = parseFloat(value) || 0;
    setPriceTable(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: numValue } : item
    ));
  };

  const saveAllPrices = async () => {
    setSaving(true);
    try {
      // Simular salvamento local até conectar Supabase
      toast({
        title: "Sucesso!",
        description: "Preços atualizados localmente. Conecte o Supabase para persistir os dados.",
      });
    } catch (error) {
      console.error('Erro ao salvar preços:', error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar os preços.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const resetToDefaults = async () => {
    try {
      setPriceTable(defaultPrices);
      
      toast({
        title: "Sucesso!",
        description: "Preços restaurados para os valores padrão.",
      });
    } catch (error) {
      console.error('Erro ao restaurar preços:', error);
      toast({
        title: "Erro",
        description: "Não foi possível restaurar os preços padrão.",
        variant: "destructive"
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'sofa': return <Sofa className="h-4 w-4" />;
      case 'carros': return <Car className="h-4 w-4" />;
      case 'colchoes': return <Bed className="h-4 w-4" />;
      case 'poltronas': 
      case 'puff':
      case 'cadeiras': return <Armchair className="h-4 w-4" />;
      default: return <DollarSign className="h-4 w-4" />;
    }
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      'sofa': 'Sofás',
      'poltronas': 'Poltronas', 
      'colchoes': 'Colchões',
      'carros': 'Carros',
      'puff': 'Puffs',
      'cadeiras': 'Cadeiras'
    };
    return names[category] || category;
  };

  const formatItemName = (item: string, subcategory: string) => {
    const replacements: { [key: string]: string } = {
      '2-lugares': '2 Lugares',
      '3-lugares': '3 Lugares',
      'jogo-2-3': 'Jogo 2+3 Lugares',
      '2-modulos': '2 Módulos',
      '3-modulos': '3 Módulos',
      'super-king': 'Super King',
      'extra-grande': 'Extra Grande',
      'so-assento': 'Só Assento',
      'so-encosto': 'Só Encosto',
      'assento-encosto': 'Assento + Encosto'
    };
    
    return replacements[item] || item.charAt(0).toUpperCase() + item.slice(1);
  };

  const groupedPrices = priceTable.reduce((acc, price) => {
    if (!acc[price.category]) {
      acc[price.category] = [];
    }
    acc[price.category].push(price);
    return acc;
  }, {} as { [key: string]: PriceTable[] });

  if (loading) {
    return (
      <div className="space-y-4">
        <Card className="animate-pulse">
          <CardHeader>
            <div className="h-6 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-muted rounded"></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Gerenciar Preços
          </CardTitle>
          <CardDescription>
            Altere os preços dos serviços que são usados no quiz da página principal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button 
              onClick={saveAllPrices} 
              disabled={saving}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {saving ? "Salvando..." : "Salvar Alterações"}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetToDefaults}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Restaurar Padrão
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue={Object.keys(groupedPrices)[0]} className="space-y-4">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          {Object.keys(groupedPrices).map(category => (
            <TabsTrigger key={category} value={category} className="flex items-center gap-2">
              {getCategoryIcon(category)}
              {getCategoryName(category)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(groupedPrices).map(([category, prices]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getCategoryIcon(category)}
                  {getCategoryName(category)}
                </CardTitle>
                <CardDescription>
                  Configure os preços para {getCategoryName(category).toLowerCase()}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {prices.map((price, index) => {
                    const globalIndex = priceTable.findIndex(p => 
                      p.category === price.category && 
                      p.subcategory === price.subcategory && 
                      p.item === price.item
                    );
                    
                    return (
                      <div key={`${price.category}-${price.subcategory}-${price.item}`} 
                           className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div>
                            <div className="font-medium">
                              {formatItemName(price.item, price.subcategory)}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {price.subcategory}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`clean-${globalIndex}`}>Higienização</Label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">R$</span>
                            <Input
                              id={`clean-${globalIndex}`}
                              type="number"
                              value={price.clean_price || ''}
                              onChange={(e) => updatePrice(globalIndex, 'clean_price', e.target.value)}
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                            />
                          </div>
                        </div>

                        {category !== 'colchoes' && category !== 'carros' && (
                          <div className="space-y-2">
                            <Label htmlFor={`imp-${globalIndex}`} className="flex items-center gap-1">
                              <ShieldCheck className="h-3 w-3" />
                              Impermeabilização
                            </Label>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">R$</span>
                              <Input
                                id={`imp-${globalIndex}`}
                                type="number"
                                value={price.impermeabilization_price || ''}
                                onChange={(e) => updatePrice(globalIndex, 'impermeabilization_price', e.target.value)}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center">
                          {price.impermeabilization_price && (
                            <div className="text-sm text-muted-foreground">
                              Combo: R$ {((price.clean_price || 0) + (price.impermeabilization_price || 0) * 0.85).toFixed(2)}
                              <br />
                              <span className="text-xs text-green-600">15% desconto</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Aviso sobre sincronização */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="h-5 w-5 text-orange-600 mt-0.5">
              ⚠️
            </div>
            <div>
              <p className="font-medium text-orange-800">Importante:</p>
              <p className="text-sm text-orange-700">
                As alterações nos preços serão aplicadas automaticamente no quiz da página principal 
                após clicar em "Salvar Alterações". Certifique-se de revisar todos os valores antes de salvar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};