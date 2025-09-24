# Guia de Instalação e Configuração - Machado Clean

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** versão 18.0 ou superior
- **npm** versão 8.0 ou superior (ou **yarn**/**pnpm** como alternativa)
- **Git** para controle de versão

### Verificando os pré-requisitos

```bash
node --version    # deve retornar v18.x.x ou superior
npm --version     # deve retornar 8.x.x ou superior
git --version     # qualquer versão recente
```

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd cleanrio-64
```

### 2. Instale as Dependências

```bash
npm install
```

Ou se preferir usar yarn:
```bash
yarn install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Configure as seguintes variáveis:

```env
# WhatsApp Business
VITE_WHATSAPP_PHONE=5521991612893

# URLs de API (se necessário)
VITE_API_URL=http://localhost:3000

# Configurações do ambiente
VITE_APP_ENV=development
```

### 4. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:8080`

## 🔧 Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run dev:host     # Inicia servidor acessível na rede local
```

### Build
```bash
npm run build        # Build de produção
npm run build:dev    # Build de desenvolvimento
npm run preview      # Preview da build de produção
```

### Qualidade de Código
```bash
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint automaticamente
npm run type-check   # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

Após a instalação, sua estrutura de pastas deve estar assim:

```
cleanrio-64/
├── node_modules/           # Dependências (não versionar)
├── public/                 # Arquivos públicos estáticos
├── src/                    # Código fonte da aplicação
├── docs/                   # Documentação do projeto
├── .env.local             # Variáveis de ambiente locais
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Configuração do projeto e dependências
├── tailwind.config.ts     # Configuração do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript
├── vite.config.ts         # Configuração do Vite
└── README.md              # Documentação principal
```

## 🎨 Configuração do Tailwind CSS

O projeto já vem com Tailwind CSS configurado. As principais configurações estão em:

- `tailwind.config.ts` - Configuração principal
- `src/index.css` - Estilos globais e variáveis CSS

### Classes Customizadas Importantes

```css
/* Hero Section */
.hero-section           /* Seção principal com gradiente */
.hero-title             /* Título principal responsivo */
.hero-subtitle          /* Subtítulo com tipografia otimizada */

/* CTAs */
.cta-primary            /* Botão principal com gradiente */
.cta-secondary          /* Botão secundário */

/* Cards */
.card-minimal           /* Card com estilo minimalista */
.pricing-card           /* Card específico para preços */

/* Layout */
.section-container      /* Container padrão para seções */
.grid-features          /* Grid responsivo para features */
```

## 🧩 Configuração do shadcn/ui

O projeto utiliza shadcn/ui como sistema de componentes. A configuração está em:

- `components.json` - Configuração principal
- `src/components/ui/` - Componentes base

### Adicionando Novos Componentes UI

```bash
npx shadcn-ui@latest add [component-name]
```

Exemplos:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form
```

## 🔌 Integrações Externas

### WhatsApp Business API

A integração com WhatsApp é feita via URLs personalizadas. Configure o número no arquivo `.env.local`:

```env
VITE_WHATSAPP_PHONE=5521991612893
```

### ViaCEP API

Para busca de endereços por CEP, a aplicação utiliza a API gratuita do ViaCEP:
- URL: `https://viacep.com.br/ws/{cep}/json/`
- Não requer autenticação
- Rate limit: Sem limites oficiais

## 📱 Teste em Dispositivos Móveis

### Teste Local na Rede

Para testar em dispositivos móveis na mesma rede:

```bash
npm run dev -- --host
```

Acesse via IP local (ex: `http://192.168.1.100:8080`)

### Ferramentas de Debug

1. **React Developer Tools** - Extensão do navegador
2. **Vite DevTools** - Debug do bundler
3. **Tailwind CSS IntelliSense** - Autocomplete para classes

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`

### Plataformas Recomendadas

1. **Vercel** (Recomendado)
   ```bash
   npm i -g vercel
   vercel --prod
   ```

2. **Netlify**
   - Conecte o repositório Git
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Configure GitHub Actions
   - Deploy automático via push

### Variáveis de Ambiente em Produção

Configure as seguintes variáveis no seu provedor de hosting:

```env
VITE_WHATSAPP_PHONE=5521991612893
VITE_APP_ENV=production
```

## 🔍 Troubleshooting

### Problemas Comuns

#### 1. Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 2. Erro de TypeScript
```bash
npm run type-check
```

#### 3. Problemas de Cache do Vite
```bash
rm -rf node_modules/.vite
npm run dev
```

#### 4. Problemas de Tailwind CSS
```bash
# Rebuildar o CSS
npm run build:css
```

### Logs de Debug

Para debug detalhado:

```bash
DEBUG=vite:* npm run dev
```

## 📊 Monitoramento de Performance

### Core Web Vitals

Para monitorar performance:

1. Instale a extensão Web Vitals
2. Use o Lighthouse do Chrome DevTools
3. Configure Google Analytics (opcional)

### Bundle Analysis

Para analisar o tamanho do bundle:

```bash
npm run build
npx vite-bundle-analyzer dist
```

## 🔒 Segurança

### Configurações Recomendadas

1. **HTTPS** - Sempre use HTTPS em produção
2. **CSP Headers** - Configure Content Security Policy
3. **Environment Variables** - Nunca commite variáveis sensíveis

### Headers de Segurança

Configure no seu servidor/CDN:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

## 📞 Suporte

Para problemas técnicos:

1. Verifique a [documentação](./README.md)
2. Consulte os [logs de erro](#troubleshooting)
3. Entre em contato com a equipe de desenvolvimento

## 🔄 Atualizações

Para manter o projeto atualizado:

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências menores
npm update

# Atualizar dependências maiores (cuidado!)
npx npm-check-updates -u
npm install
```
