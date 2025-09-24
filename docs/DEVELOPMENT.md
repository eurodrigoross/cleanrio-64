# Guia de Desenvolvimento - Machado Clean

## 🎯 Visão Geral

Este guia fornece informações detalhadas para desenvolvedores que trabalham no projeto Machado Clean, incluindo padrões de código, fluxos de trabalho e melhores práticas.

## 🛠️ Ambiente de Desenvolvimento

### Configuração Inicial

1. **Clone e Setup**
```bash
git clone <repository-url>
cd cleanrio-64
npm install
cp .env.example .env.local
npm run dev
```

2. **Extensões Recomendadas (VS Code)**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

3. **Configuração do VS Code**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📋 Padrões de Código

### Estrutura de Arquivos

#### Nomenclatura
- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useToast.ts`)
- **Utilitários**: camelCase (`formatCurrency.ts`)
- **Tipos**: PascalCase (`interface Contact`)
- **Constantes**: UPPER_SNAKE_CASE (`PRICE_TABLE`)

#### Organização de Imports
```tsx
// 1. Imports de bibliotecas externas
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// 2. Imports internos
import { formatCurrency } from "@/lib/utils";
import { Contact } from "@/types";

// 3. Imports relativos
import "./Component.css";
```

### Padrões TypeScript

#### Tipagem de Props
```tsx
interface ComponentProps {
  title: string;
  description?: string;
  variant?: 'minimal' | 'modern' | 'standard';
  onSubmit: (data: FormData) => void;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({
  title,
  description,
  variant = 'minimal',
  onSubmit,
  children
}) => {
  // Implementação
};
```

#### Tipagem de Estado
```tsx
interface FormState {
  loading: boolean;
  error: string | null;
  data: Contact | null;
}

const [state, setState] = useState<FormState>({
  loading: false,
  error: null,
  data: null
});
```

#### Tipagem de Eventos
```tsx
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Lógica do submit
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // Lógica do click
};
```

### Padrões de Componentes

#### Estrutura de Componente
```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ComponentProps {
  // Props interface
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 1. Hooks de estado
  const [state, setState] = useState();
  
  // 2. Hooks de efeito
  useEffect(() => {
    // Efeitos
  }, []);
  
  // 3. Handlers
  const handleAction = () => {
    // Lógica
  };
  
  // 4. Render condicional early returns
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;
  
  // 5. JSX principal
  return (
    <div className="component-container">
      {/* Conteúdo */}
    </div>
  );
};

export default Component;
```

#### Componentes com Variações
```tsx
interface ComponentProps {
  variant?: 'minimal' | 'modern' | 'standard';
}

const Component: React.FC<ComponentProps> = ({ variant = 'minimal' }) => {
  const baseClasses = "component-base";
  const variantClasses = {
    minimal: "minimal-styles",
    modern: "modern-styles", 
    standard: "standard-styles"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {/* Conteúdo */}
    </div>
  );
};
```

### Padrões de Styling

#### Classes Tailwind
```tsx
// ✅ Bom - Classes organizadas e legíveis
<div className="
  flex items-center justify-between
  p-6 bg-white rounded-lg shadow-md
  hover:shadow-lg transition-shadow duration-200
  md:p-8 lg:p-10
">

// ❌ Evitar - Classes muito longas em uma linha
<div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 md:p-8 lg:p-10">
```

#### Utilização do clsx
```tsx
import { clsx } from "clsx";

const buttonClasses = clsx(
  "base-button-classes",
  {
    "primary-variant": variant === 'primary',
    "secondary-variant": variant === 'secondary',
    "disabled-state": disabled,
  },
  className // Props adicional
);
```

#### Classes Customizadas
```css
/* src/index.css */
@layer components {
  .cta-primary {
    @apply inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200;
    background: var(--gradient-accent);
    color: white;
    box-shadow: var(--shadow-md);
  }
  
  .cta-primary:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-1px);
  }
}
```

## 🔄 Fluxos de Trabalho

### Git Workflow

#### Branch Strategy
```bash
main                 # Produção
├── develop         # Desenvolvimento principal
├── feature/xyz     # Novas funcionalidades
├── bugfix/xyz      # Correções de bugs
└── hotfix/xyz      # Correções urgentes
```

#### Commit Messages
```bash
# Formato
type(scope): description

# Exemplos
feat(calculator): add budget calculation logic
fix(dashboard): resolve contact filtering issue
docs(readme): update installation instructions
style(components): improve button hover effects
refactor(utils): optimize price calculation function
```

#### Pull Request Template
```markdown
## Descrição
Breve descrição das mudanças implementadas.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Checklist
- [ ] Código testado localmente
- [ ] Documentação atualizada
- [ ] ESLint sem erros
- [ ] TypeScript sem erros
- [ ] Responsividade verificada
```

### Desenvolvimento de Features

#### 1. Planejamento
- Definir requisitos
- Criar wireframes/mockups
- Identificar componentes necessários
- Planejar estrutura de dados

#### 2. Implementação
```bash
# Criar branch
git checkout -b feature/nova-funcionalidade

# Desenvolvimento iterativo
git add .
git commit -m "feat: implement basic structure"

# Testes locais
npm run dev
npm run lint
npm run type-check
```

#### 3. Review e Merge
```bash
# Push da branch
git push origin feature/nova-funcionalidade

# Criar Pull Request
# Code review
# Merge após aprovação
```

### Debugging

#### Ferramentas de Debug

1. **React DevTools**
```tsx
// Debug de props e estado
const Component = () => {
  const [state, setState] = useState();
  
  // Adicionar breakpoint
  console.log('Component state:', state);
  
  return <div>Content</div>;
};
```

2. **Network Tab**
- Monitorar requests de API
- Verificar tempos de carregamento
- Debug de integrações externas

3. **Console Debugging**
```tsx
// Debug condicional
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Debug info:', data);
}
```

#### Debugging Específico

##### Calculadora de Orçamento
```tsx
const BudgetCalculator = () => {
  const calculatePrices = () => {
    const result = /* cálculo */;
    
    // Debug dos cálculos
    if (process.env.NODE_ENV === 'development') {
      console.table({
        basePrice: result.basePrice,
        cashPrice: result.cashPrice,
        installmentPrice: result.installmentPrice
      });
    }
    
    return result;
  };
};
```

##### Integração WhatsApp
```tsx
const handleWhatsApp = (contact: Contact) => {
  const message = generateMessage(contact);
  
  // Debug da mensagem
  console.log('WhatsApp message:', message);
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  // Debug da URL
  console.log('WhatsApp URL:', whatsappUrl);
  
  window.open(whatsappUrl, '_blank');
};
```

## 🧪 Testes

### Estratégia de Testes

#### Unit Tests (Planejado)
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  test('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Integration Tests (Planejado)
```typescript
// __tests__/integration/BudgetCalculator.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BudgetCalculatorGamefied from '@/components/BudgetCalculatorGamefied';

describe('Budget Calculator Integration', () => {
  test('completes full calculation flow', async () => {
    render(<BudgetCalculatorGamefied />);
    
    // Simular fluxo completo
    fireEvent.click(screen.getByText('Calcular Preço'));
    
    // Preencher dados
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'João Silva' } });
    
    // Continuar fluxo...
    await waitFor(() => {
      expect(screen.getByText('Orçamento Calculado')).toBeInTheDocument();
    });
  });
});
```

### Manual Testing Checklist

#### Funcionalidades Principais
- [ ] Hero section carrega corretamente
- [ ] Calculadora completa fluxo inteiro
- [ ] WhatsApp abre com mensagem correta
- [ ] Dashboard mostra dados corretos
- [ ] Responsividade funciona em todos os breakpoints

#### Cross-browser Testing
- [ ] Chrome (Desktop/Mobile)
- [ ] Firefox (Desktop/Mobile)
- [ ] Safari (Desktop/Mobile)
- [ ] Edge (Desktop)

## 🚀 Performance

### Otimizações Implementadas

#### Code Splitting
```tsx
// Lazy loading de componentes
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

// Uso com Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />
</Suspense>
```

#### Memoização
```tsx
import { memo, useMemo, useCallback } from 'react';

// Memoização de componente
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item));
  }, [data]);
  
  const handleClick = useCallback((id) => {
    // Handler logic
  }, []);
  
  return <div>{/* Render */}</div>;
});
```

#### Otimização de Imagens
```tsx
// Lazy loading de imagens
<img 
  src={heroImage} 
  alt="Hero image"
  loading="lazy"
  className="w-full h-auto object-cover"
/>
```

### Monitoramento de Performance

#### Web Vitals
```tsx
// lib/analytics.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};
```

#### Bundle Analysis
```bash
# Analisar tamanho do bundle
npm run build
npx vite-bundle-analyzer dist
```

## 🔒 Segurança

### Validação de Dados

#### Schemas Zod
```tsx
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato de telefone inválido'),
  email: z.string().email('Email inválido').optional(),
});

type ContactFormData = z.infer<typeof ContactSchema>;
```

#### Sanitização de Inputs
```tsx
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '');
};
```

### Práticas de Segurança

1. **Validação Client-Side e Server-Side**
2. **Sanitização de URLs externas**
3. **Validação de tipos TypeScript**
4. **Escape de caracteres especiais**

## 📚 Recursos Adicionais

### Documentação Externa
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)

### Ferramentas Úteis
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

### Comunidade e Suporte
- [React Community](https://reactjs.org/community/support.html)
- [TypeScript Community](https://www.typescriptlang.org/community/)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)

## 🔄 Atualizações e Manutenção

### Dependency Updates
```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências menores
npm update

# Atualizar dependências maiores (com cuidado)
npx npm-check-updates -u
npm install
```

### Changelog
Manter um arquivo CHANGELOG.md com:
- Novas funcionalidades
- Correções de bugs
- Breaking changes
- Melhorias de performance

### Code Review Guidelines

#### O que Revisar
- [ ] Lógica de negócio está correta
- [ ] Código segue padrões estabelecidos
- [ ] Tratamento de erros adequado
- [ ] Performance não foi prejudicada
- [ ] Acessibilidade foi considerada
- [ ] Responsividade funciona
- [ ] Documentação foi atualizada
