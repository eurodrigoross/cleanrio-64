# Índice da Documentação - Machado Clean

## 📚 Documentação Completa

Bem-vindo à documentação completa do projeto Machado Clean. Este índice organiza todos os documentos para facilitar a navegação e encontrar informações específicas.

## 🗂️ Estrutura da Documentação

### 📋 [README.md](./README.md)
**Visão geral do projeto**
- Descrição geral do sistema
- Principais funcionalidades
- Stack tecnológico
- Links para documentação específica

### 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md)
**Arquitetura técnica detalhada**
- Estrutura do projeto
- Stack tecnológico completo
- Sistema de design e tokens
- Arquitetura de componentes
- Fluxo de dados
- Performance e otimizações

### 🚀 [SETUP.md](./SETUP.md)
**Guia de instalação e configuração**
- Pré-requisitos
- Instalação passo a passo
- Configuração do ambiente
- Scripts disponíveis
- Troubleshooting
- Deploy

### 📱 [COMPONENTS.md](./COMPONENTS.md)
**Documentação completa de componentes**
- Estrutura de componentes
- Sistema de variações (Minimal, Modern, Standard)
- Componentes da landing page
- Componentes do dashboard
- Componentes UI base (shadcn/ui)
- Padrões de implementação

### 👨‍💻 [DEVELOPMENT.md](./DEVELOPMENT.md)
**Guia para desenvolvedores**
- Ambiente de desenvolvimento
- Padrões de código
- Fluxos de trabalho (Git, PR)
- Debugging e testes
- Performance
- Segurança
- Code review

### 🌐 [API.md](./API.md)
**APIs e integrações externas**
- ViaCEP API (busca de endereços)
- WhatsApp Business integration
- Estruturas de dados
- Configurações
- Monitoramento
- Segurança

## 🎯 Guias Rápidos

### Para Novos Desenvolvedores
1. 📋 Leia o [README.md](./README.md) para entender o projeto
2. 🚀 Siga o [SETUP.md](./SETUP.md) para configurar o ambiente
3. 👨‍💻 Consulte [DEVELOPMENT.md](./DEVELOPMENT.md) para padrões de código
4. 📱 Explore [COMPONENTS.md](./COMPONENTS.md) para entender os componentes

### Para Arquitetos/Tech Leads
1. 🏗️ Analise [ARCHITECTURE.md](./ARCHITECTURE.md) para visão técnica
2. 🌐 Revise [API.md](./API.md) para integrações
3. 👨‍💻 Verifique [DEVELOPMENT.md](./DEVELOPMENT.md) para padrões

### Para Product Owners/Stakeholders
1. 📋 Leia [README.md](./README.md) para funcionalidades
2. 📱 Consulte [COMPONENTS.md](./COMPONENTS.md) para entender a UI
3. 🚀 Veja [SETUP.md](./SETUP.md) para processo de deploy

## 🔍 Índice por Tópicos

### 🎨 Design e UI
- [Sistema de Design](./ARCHITECTURE.md#sistema-de-design) - Tokens, cores, tipografia
- [Variações de Componentes](./COMPONENTS.md#sistema-de-variações) - Minimal, Modern, Standard
- [Responsividade](./ARCHITECTURE.md#responsividade-e-performance) - Breakpoints e estratégias

### 🛠️ Desenvolvimento
- [Padrões de Código](./DEVELOPMENT.md#padrões-de-código) - TypeScript, React, CSS
- [Estrutura de Pastas](./ARCHITECTURE.md#estrutura-do-projeto) - Organização do código
- [Git Workflow](./DEVELOPMENT.md#git-workflow) - Branches, commits, PRs

### 🚀 Deploy e Infraestrutura
- [Build e Deploy](./SETUP.md#deploy) - Processo de build e publicação
- [Configuração de Ambiente](./SETUP.md#configuração-do-ambiente) - Variáveis e settings
- [Monitoramento](./ARCHITECTURE.md#monitoramento-e-analytics) - Métricas e logging

### 🔌 Integrações
- [WhatsApp Integration](./API.md#whatsapp-business-api) - Envio de mensagens
- [ViaCEP API](./API.md#viacep-api) - Busca de endereços
- [Estruturas de Dados](./API.md#dados-e-estruturas) - Interfaces e tipos

### 🧪 Qualidade e Testes
- [Estratégia de Testes](./DEVELOPMENT.md#testes) - Unit, integration, E2E
- [Performance](./DEVELOPMENT.md#performance) - Otimizações e monitoramento
- [Segurança](./DEVELOPMENT.md#segurança) - Validação e sanitização

## 📊 Funcionalidades Principais

### 🌐 Landing Page
- **Hero Section** - [Componente](./COMPONENTS.md#herosection-3-variações)
- **Calculadora de Orçamento** - [Detalhes](./COMPONENTS.md#budgetcalculator-2-variações-principais)
- **Prova Social** - [Implementação](./COMPONENTS.md#socialproof-3-variações)
- **Tabela de Preços** - [Estrutura](./API.md#tabela-de-preços)

### 📊 Dashboard
- **Visão Geral** - [Métricas](./COMPONENTS.md#dashboardoverview)
- **Gestão de Contatos** - [CRUD](./COMPONENTS.md#contactsmanager)
- **Relatórios** - [Analytics](./ARCHITECTURE.md#monitoramento-e-analytics)

## 🔧 Configurações Importantes

### Variáveis de Ambiente
```env
VITE_WHATSAPP_PHONE=5521991612893
VITE_API_URL=https://api.machadoclean.com
VITE_APP_ENV=production
```

### Scripts Principais
```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run preview      # Preview build
npm run lint         # Linting
```

## 🆘 Troubleshooting Rápido

### Problemas Comuns
1. **Erro de dependências** → [Solução](./SETUP.md#problemas-comuns)
2. **Build falha** → [Debug](./DEVELOPMENT.md#debugging)
3. **WhatsApp não abre** → [Configuração](./API.md#whatsapp-business-api)
4. **CEP não encontrado** → [ViaCEP](./API.md#viacep-api)

## 📞 Suporte

### Contatos de Desenvolvimento
- **Tech Lead**: [Definir contato]
- **Frontend Team**: [Definir contato]
- **DevOps**: [Definir contato]

### Recursos Externos
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 🔄 Atualizações da Documentação

### Última Atualização
**Data**: Dezembro 2024  
**Versão**: 1.0.0  
**Alterações**: Documentação inicial completa

### Como Contribuir
1. Identifique seções desatualizadas
2. Crie branch para atualizações
3. Atualize documentação relevante
4. Submeta PR com descrição clara

---

**💡 Dica**: Use Ctrl+F (Cmd+F no Mac) para buscar rapidamente por tópicos específicos neste índice!
