# Machado Clean - Sistema de Higienização e Impermeabilização

## 📋 Visão Geral

O **Machado Clean** é uma aplicação web completa para uma empresa de higienização e impermeabilização de estofados e veículos no Rio de Janeiro. O sistema combina uma landing page otimizada para conversão com um dashboard administrativo completo.

## 🎯 Principais Funcionalidades

### 🌐 Landing Page (Página Principal)
- **Hero Section Responsiva** - Apresentação impactante dos serviços
- **Calculadora de Orçamento Gamificada** - Sistema interativo de cotação em tempo real
- **Seções de Benefícios** - Destaque das vantagens dos serviços
- **Galeria Antes/Depois** - Demonstração visual dos resultados
- **Prova Social** - Depoimentos e avaliações de clientes
- **Sistema de Garantia** - Certificados e garantias oferecidas
- **Tabelas de Preços** - Apresentação clara dos valores
- **Seção de Urgência** - Elementos de escassez e urgência
- **Integração WhatsApp** - Contato direto e agendamento

### 📊 Dashboard Administrativo
- **Visão Geral** - Métricas e KPIs principais
- **Gerenciamento de Contatos** - Leads capturados via calculadora
- **Gestão de Preços** - Controle da tabela de preços
- **Relatórios Financeiros** - Análise de receita e conversão

## 🏗️ Arquitetura do Sistema

### Stack Tecnológico
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Framework**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS 3
- **Roteamento**: React Router DOM 6
- **Estado**: React Query (TanStack Query)
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Notificações**: Sonner + React Hot Toast

### Estrutura de Pastas
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do shadcn/ui
│   ├── dashboard/      # Componentes específicos do dashboard
│   └── [componentes]   # Componentes da landing page
├── pages/              # Páginas principais
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
└── assets/             # Imagens e recursos estáticos
```

## 🎨 Design System

### Paleta de Cores
- **Primary**: `hsl(220, 90%, 56%)` - Azul moderno e confiável
- **Accent**: `hsl(142, 76%, 36%)` - Verde para CTAs e destaques
- **Secondary**: `hsl(220, 14%, 96%)` - Cinza sofisticado
- **Background**: `hsl(0, 0%, 99%)` - Branco quase puro

### Variações de Componentes
O sistema utiliza três variações principais:
- **Minimal** - Design limpo e minimalista (versão principal)
- **Modern** - Design mais elaborado com gradientes
- **Standard** - Versão intermediária com elementos visuais balanceados

## 📱 Responsividade

O sistema é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Funcionalidades Principais

### Calculadora de Orçamento
- Sistema multi-etapas com progress bar
- Captura de dados do cliente
- Seleção de serviços e tamanhos
- Integração com API de CEP (ViaCEP)
- Cálculo de preços em tempo real
- Agendamento integrado
- Envio automático para WhatsApp

### Dashboard Administrativo
- Métricas em tempo real
- Gestão completa de leads
- Sistema de status para contatos
- Filtros e busca avançada
- Integração com WhatsApp Business
- Relatórios financeiros

## 🔧 Configuração e Instalação

Consulte o [Guia de Instalação](./SETUP.md) para instruções detalhadas.

## 🏗️ Arquitetura Detalhada

Consulte a [Documentação de Arquitetura](./ARCHITECTURE.md) para informações técnicas aprofundadas.

## 📚 Documentação de Componentes

Consulte o [Guia de Componentes](./COMPONENTS.md) para detalhes sobre cada componente.

## 🤝 Contribuição

Consulte o [Guia de Desenvolvimento](./DEVELOPMENT.md) para informações sobre como contribuir.

## 📄 Licença

Este projeto é proprietário da Machado Clean.
