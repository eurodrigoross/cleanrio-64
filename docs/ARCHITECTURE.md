# Arquitetura do Sistema - Machado Clean

## 📐 Visão Geral da Arquitetura

O Machado Clean é uma aplicação React moderna construída com uma arquitetura modular e escalável, seguindo as melhores práticas de desenvolvimento frontend.

## 🏗️ Estrutura do Projeto

### Organização de Pastas

```
cleanrio-64/
├── public/                 # Recursos estáticos públicos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Imagens e recursos
│   │   ├── before-after-car.jpg
│   │   ├── before-after-sofa.jpg
│   │   ├── car-hatch.jpg
│   │   ├── car-sedan.jpg
│   │   ├── hero-image.jpg
│   │   ├── sofa-2-lugares.jpg
│   │   └── sofa-3-lugares.jpg
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes base (shadcn/ui)
│   │   ├── dashboard/    # Componentes do dashboard
│   │   └── [outros]      # Componentes da landing page
│   ├── hooks/            # Custom React Hooks
│   ├── lib/              # Utilitários e configurações
│   ├── pages/            # Componentes de página
│   └── main.tsx          # Ponto de entrada da aplicação
├── docs/                 # Documentação do projeto
├── package.json          # Dependências e scripts
├── vite.config.ts        # Configuração do Vite
├── tailwind.config.ts    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
└── components.json       # Configuração do shadcn/ui
```

## 🔧 Stack Tecnológico

### Core
- **React 18.3.1** - Biblioteca principal para UI
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 5.4.19** - Build tool e dev server

### UI e Styling
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Radix UI** - Primitivos de UI sem estilo
- **Lucide React** - Biblioteca de ícones

### Roteamento e Estado
- **React Router DOM 6.30.1** - Roteamento client-side
- **TanStack Query 5.83.0** - Gerenciamento de estado servidor
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas

### Utilitários
- **date-fns 3.6.0** - Manipulação de datas
- **clsx 2.1.1** - Utilitário para classes condicionais
- **tailwind-merge 2.6.0** - Merge inteligente de classes Tailwind

## 🎨 Sistema de Design

### Design Tokens

#### Cores
```css
/* Cores principais */
--primary: 220 90% 56%;        /* Azul moderno */
--accent: 142 76% 36%;         /* Verde para CTAs */
--secondary: 220 14% 96%;      /* Cinza claro */
--background: 0 0% 99%;        /* Branco quase puro */
--foreground: 220 9% 20%;      /* Texto principal */

/* Cores funcionais */
--muted: 220 14% 96%;          /* Texto secundário */
--border: 220 13% 91%;         /* Bordas */
--destructive: 0 84% 60%;      /* Erro/perigo */
```

#### Tipografia
- **Fonte Base**: Sistema de fontes nativo (font-sans)
- **Escala**: Baseada em rem com proporções harmônicas
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 900 (black)

#### Espaçamento
- **Sistema**: Baseado em múltiplos de 4px (0.25rem)
- **Containers**: max-width responsivo com padding lateral
- **Seções**: Padding vertical consistente (py-16 md:py-24)

### Variações de Componentes

O sistema implementa três variações principais:

1. **Minimal** - Design limpo, foco na funcionalidade
2. **Modern** - Visual mais elaborado com gradientes
3. **Standard** - Versão intermediária balanceada

## 🧩 Arquitetura de Componentes

### Hierarquia de Componentes

```
App
├── BrowserRouter
├── QueryClientProvider
├── TooltipProvider
└── Routes
    ├── Index (Landing Page)
    │   ├── HeroSectionMinimal
    │   ├── BenefitsSectionMinimal
    │   ├── BudgetCalculatorGamefied
    │   ├── SocialProofMinimal
    │   ├── BeforeAfterSectionMinimal
    │   ├── GuaranteeSectionMinimal
    │   ├── PricingTableMinimal
    │   ├── UrgencySectionMinimal
    │   └── WhatsAppButtonMinimal
    ├── Dashboard
    │   ├── DashboardOverview
    │   ├── ContactsManager
    │   └── PricingManager
    └── NotFound
```

### Padrões de Componentes

#### 1. Componentes de UI Base (ui/)
- Componentes atômicos do shadcn/ui
- Altamente reutilizáveis
- Props tipadas com TypeScript
- Variantes definidas com class-variance-authority

#### 2. Componentes de Funcionalidade
- Componentes específicos do domínio
- Integram múltiplos componentes UI
- Gerenciam estado local quando necessário
- Comunicam com APIs externas

#### 3. Componentes de Layout
- Estruturam páginas e seções
- Responsáveis pela responsividade
- Aplicam o design system consistentemente

## 🔄 Fluxo de Dados

### Estado da Aplicação

1. **Estado Local** (useState, useReducer)
   - Estados temporários de UI
   - Formulários em progresso
   - Modals e overlays

2. **Estado do Servidor** (TanStack Query)
   - Cache de dados da API
   - Sincronização automática
   - Estados de loading/error

3. **Estado da URL** (React Router)
   - Roteamento e navegação
   - Parâmetros de consulta
   - Estado compartilhável via URL

### Integração com APIs

#### API ViaCEP
- Busca automática de endereços por CEP
- Implementada no BudgetCalculatorGamefied
- Tratamento de erros robusto

#### WhatsApp Business API
- Envio de mensagens formatadas
- Integração em múltiplos pontos
- URLs personalizadas por contexto

## 📱 Responsividade e Performance

### Estratégia Mobile-First
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Componentes adaptáveis automaticamente
- Imagens otimizadas para diferentes densidades

### Otimizações de Performance
- **Code Splitting** - Divisão automática de código por rotas
- **Lazy Loading** - Carregamento sob demanda de componentes
- **Asset Optimization** - Compressão de imagens e recursos
- **CSS Purging** - Remoção de CSS não utilizado

## 🔒 Segurança e Validação

### Validação de Dados
- Schemas Zod para validação de formulários
- Sanitização de inputs do usuário
- Validação tanto no cliente quanto servidor

### Segurança
- CSP headers configurados
- Sanitização de URLs externas
- Validação de tipos TypeScript

## 🚀 Build e Deploy

### Processo de Build
1. **Desenvolvimento**: `npm run dev` - Vite dev server
2. **Build Produção**: `npm run build` - Otimização completa
3. **Preview**: `npm run preview` - Teste da build de produção

### Configuração Vite
```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

## 🧪 Estratégia de Testes

### Tipos de Teste (Planejados)
- **Unit Tests** - Componentes individuais
- **Integration Tests** - Fluxos completos
- **E2E Tests** - Jornadas do usuário
- **Visual Regression** - Consistência visual

### Ferramentas Recomendadas
- **Vitest** - Framework de testes
- **Testing Library** - Testes de componentes React
- **Playwright** - Testes end-to-end
- **Chromatic** - Visual regression testing

## 📈 Monitoramento e Analytics

### Métricas Planejadas
- **Core Web Vitals** - Performance da página
- **Conversion Tracking** - Funil de conversão
- **Error Monitoring** - Rastreamento de erros
- **User Analytics** - Comportamento do usuário

### Ferramentas de Monitoramento
- **Google Analytics** - Analytics de usuário
- **Sentry** - Monitoramento de erros
- **Vercel Analytics** - Métricas de performance
