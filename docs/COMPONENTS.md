# Documentação de Componentes - Machado Clean

## 📋 Visão Geral

Este documento descreve todos os componentes do sistema Machado Clean, suas funcionalidades, props e padrões de uso.

## 🏗️ Estrutura de Componentes

### Hierarquia de Componentes

```
src/components/
├── ui/                    # Componentes base (shadcn/ui)
├── dashboard/             # Componentes específicos do dashboard
├── [HeroSection]*         # Componentes da hero section
├── [BenefitsSection]*     # Componentes de benefícios
├── [BudgetCalculator]*    # Calculadoras de orçamento
├── [SocialProof]*         # Componentes de prova social
├── [PricingTable]*        # Tabelas de preços
├── [GuaranteeSection]*    # Seções de garantia
└── [WhatsAppButton]*      # Botões do WhatsApp

* Variações: Minimal, Modern, Standard
```

## 🎨 Sistema de Variações

O projeto implementa três variações principais para cada componente:

- **Minimal** - Design limpo e minimalista (versão principal)
- **Modern** - Design mais elaborado com gradientes e efeitos
- **Standard** - Versão intermediária balanceada

## 📱 Componentes da Landing Page

### HeroSection (3 variações)

#### HeroSectionMinimal
**Propósito**: Seção principal da página com design minimalista.

**Características**:
- Layout em grid responsivo (2 colunas no desktop)
- Badge de confiança ("Mais de 500 clientes satisfeitos")
- Título principal com destaque colorido
- Dois CTAs: primário (WhatsApp) e secundário (calculadora)
- Indicadores de confiança (resposta rápida, agendamento, sem compromisso)
- Imagem com badge de resultado sobreposta

**Integração**:
- Scroll suave para calculadora
- Integração direta com WhatsApp
- Responsivo mobile-first

```tsx
// Uso
<HeroSectionMinimal />
```

#### HeroSection (Standard)
**Diferenças da versão Minimal**:
- Background com imagem e gradiente overlay
- Animações mais elaboradas
- Indicador de scroll animado

#### HeroSectionModern
**Diferenças das outras versões**:
- Gradientes mais intensos
- Efeitos de parallax
- Animações mais dinâmicas

### BudgetCalculator (2 variações principais)

#### BudgetCalculatorGamefied
**Propósito**: Sistema completo de cotação interativa com múltiplas etapas.

**Características**:
- **8 etapas de processo**:
  1. Captura de dados do cliente
  2. Seleção do tipo de serviço
  3. Detalhamento do item
  4. Escolha de proteção extra
  5. Agendamento (calendário + horários)
  6. Endereço (integração ViaCEP)
  7. Resumo e forma de pagamento
  8. Confirmação final

**Funcionalidades Avançadas**:
- Tabela de preços real integrada
- Cálculo automático de valores
- Integração com API ViaCEP
- Calendário interativo
- Múltiplas formas de pagamento
- Geração automática de mensagem WhatsApp
- Progress bar e navegação entre etapas

**Tabela de Preços Integrada**:
```typescript
const PRICE_TABLE = {
  sofa: {
    retratil: {
      "2-modulos": { clean: 250, impermeabilization: 350 },
      "3-modulos": { clean: 300, impermeabilization: 450 }
    },
    comum: {
      "2-lugares": { clean: 200, impermeabilization: 280 },
      "3-lugares": { clean: 250, impermeabilization: 380 },
      "jogo-2-3": { clean: 350, impermeabilization: 500 }
    }
    // ... mais categorias
  }
  // ... outros tipos de serviço
};
```

**Estados Gerenciados**:
- Serviço selecionado
- Tamanho/tipo do item
- Dados do cliente
- Agendamento (data/hora)
- Endereço completo
- Forma de pagamento
- Preferências de impermeabilização

#### BudgetCalculator (Standard)
**Versão simplificada**:
- Menos etapas (3-4 passos)
- Interface mais direta
- Foco em conversão rápida

### BenefitsSection (3 variações)

#### BenefitsSectionMinimal
**Propósito**: Apresenta os principais benefícios dos serviços.

**Características**:
- Grid responsivo de benefícios
- Ícones ilustrativos
- Textos concisos e impactantes
- Design limpo e escaneável

**Benefícios Destacados**:
- Remoção profunda de sujeira
- Eliminação de ácaros e fungos
- Proteção duradoura
- Garantia de qualidade

### SocialProof (3 variações)

#### SocialProofMinimal
**Propósito**: Demonstra credibilidade através de depoimentos e números.

**Características**:
- Carousel de depoimentos
- Métricas de credibilidade
- Avaliações com estrelas
- Fotos de clientes (quando disponível)

### BeforeAfterSection

#### BeforeAfterSectionMinimal
**Propósito**: Mostra resultados visuais dos serviços.

**Características**:
- Slider comparativo antes/depois
- Múltiplas categorias (sofá, carro)
- Navegação intuitiva
- Otimização de imagens

### GuaranteeSection (3 variações)

#### GuaranteeSectionMinimal
**Propósito**: Apresenta garantias e certificações.

**Características**:
- Certificados de garantia
- Políticas de satisfação
- Elementos de confiança
- CTAs relacionados

### PricingTable (2 variações)

#### PricingTableMinimal
**Propósito**: Apresenta preços de forma clara e comparativa.

**Características**:
- Tabela responsiva
- Destaque para plano popular
- CTAs integrados
- Informações de parcelamento

### UrgencySection

#### UrgencySectionMinimal
**Propósito**: Cria senso de urgência e escassez.

**Características**:
- Contador regressivo
- Mensagens de urgência
- Disponibilidade limitada
- CTAs de ação imediata

### WhatsAppButton (3 variações)

#### WhatsAppButtonMinimal
**Propósito**: Botão flutuante fixo para contato direto.

**Características**:
- Posição fixa no canto inferior direito
- Animações sutis
- Mensagem pré-formatada
- Responsivo

**Integração**:
```tsx
const handleWhatsApp = () => {
  const message = "Olá! Quero descobrir meu orçamento exclusivo para higienização!";
  const phone = "5521999999999";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
```

## 📊 Componentes do Dashboard

### DashboardOverview

**Propósito**: Visão geral das métricas principais do negócio.

**Características**:
- Cards de métricas (receita, contatos, conversão)
- Gráficos de serviços mais solicitados
- Resumo financeiro por forma de pagamento
- Indicadores de performance

**Métricas Exibidas**:
- Receita total
- Total de contatos
- Serviços confirmados
- Taxa de conversão
- Serviços pendentes

**Dados Demo Integrados**:
```typescript
interface DashboardStats {
  totalRevenue: number;
  totalContacts: number;
  confirmedServices: number;
  pendingServices: number;
}
```

### ContactsManager

**Propósito**: Gerenciamento completo dos leads capturados.

**Características**:
- Lista completa de contatos
- Filtros por status
- Ações de gerenciamento
- Integração com WhatsApp Business

**Status de Contatos**:
- `pending` - Aguardando confirmação
- `confirmed` - Serviço confirmado
- `completed` - Serviço realizado
- `cancelled` - Cancelado

**Funcionalidades**:
- Atualização de status
- Anotações personalizadas
- Envio para WhatsApp
- Exclusão de contatos

**Interface do Contato**:
```typescript
interface Contact {
  id: string;
  name: string;
  phone: string;
  service_type: string;
  service_size: string;
  scheduled_date: string;
  scheduled_time: string;
  address: string;
  payment_method: string;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  created_at: string;
}
```

### PricingManager

**Propósito**: Gestão da tabela de preços dos serviços.

**Características**:
- Edição de preços em tempo real
- Categorização de serviços
- Histórico de alterações
- Aplicação automática nos cálculos

## 🎨 Componentes UI Base (shadcn/ui)

### Componentes Principais Utilizados

#### Button
- Múltiplas variantes (default, destructive, outline, secondary, ghost, link)
- Tamanhos responsivos
- Estados de loading e disabled
- Integração com ícones

#### Card
- Container padrão para conteúdo
- Header, Content e Footer opcionais
- Hover effects integrados

#### Dialog/Modal
- Overlays para formulários
- Múltiplos tamanhos
- Animações de entrada/saída
- Acessibilidade completa

#### Form
- Integração com React Hook Form
- Validação com Zod
- Estados de erro automáticos
- Labels e hints

#### Progress
- Barras de progresso
- Indicadores de etapas
- Animações suaves

## 🔧 Padrões de Implementação

### Props Comuns

Todos os componentes principais seguem padrões consistentes:

```typescript
interface BaseComponentProps {
  className?: string;           // Classes CSS adicionais
  variant?: 'minimal' | 'modern' | 'standard';  // Variação visual
  children?: React.ReactNode;   // Conteúdo filho
}
```

### Responsividade

Todos os componentes implementam:
- Mobile-first design
- Breakpoints consistentes
- Grid e flexbox responsivos
- Imagens otimizadas

### Acessibilidade

Padrões implementados:
- ARIA labels apropriados
- Navegação por teclado
- Contraste adequado
- Screen reader friendly

### Performance

Otimizações aplicadas:
- Lazy loading quando apropriado
- Memoização de componentes pesados
- Otimização de re-renders
- Bundle splitting

## 🚀 Uso e Customização

### Importação de Componentes

```tsx
// Componentes da landing page
import HeroSectionMinimal from "@/components/HeroSectionMinimal";
import BudgetCalculatorGamefied from "@/components/BudgetCalculatorGamefied";

// Componentes do dashboard
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ContactsManager } from "@/components/dashboard/ContactsManager";

// Componentes UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

### Customização de Estilos

#### Via Tailwind CSS
```tsx
<HeroSectionMinimal className="bg-gradient-to-r from-blue-500 to-green-500" />
```

#### Via CSS Modules (se necessário)
```tsx
import styles from './CustomComponent.module.css';

<Component className={styles.customClass} />
```

### Criação de Novas Variações

Para criar uma nova variação de componente:

1. Duplique um componente existente
2. Renomeie com o sufixo apropriado
3. Modifique os estilos mantendo a estrutura
4. Atualize as importações necessárias

## 🔍 Debug e Troubleshooting

### Ferramentas de Debug

1. **React DevTools** - Inspeção de props e estado
2. **Tailwind CSS Inspector** - Debug de classes CSS
3. **Console Logs** - Estados e fluxos de dados

### Problemas Comuns

1. **Componente não renderiza**
   - Verificar importações
   - Verificar props obrigatórias
   - Verificar erros no console

2. **Estilos não aplicados**
   - Verificar classes Tailwind
   - Verificar ordem de importação CSS
   - Verificar purge do Tailwind

3. **Performance lenta**
   - Verificar re-renders desnecessários
   - Otimizar props drilling
   - Implementar memoização
