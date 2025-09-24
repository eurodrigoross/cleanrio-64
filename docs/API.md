# Documentação de APIs e Integrações - Machado Clean

## 📋 Visão Geral

Este documento descreve todas as integrações de APIs e serviços externos utilizados no projeto Machado Clean.

## 🌐 APIs Externas

### ViaCEP API

#### Descrição
API gratuita para consulta de CEPs brasileiros, utilizada na calculadora de orçamento para preenchimento automático de endereços.

#### Configuração
- **Base URL**: `https://viacep.com.br/ws/`
- **Autenticação**: Não requerida
- **Rate Limit**: Sem limites oficiais documentados
- **Formato**: JSON

#### Endpoints Utilizados

##### Buscar Endereço por CEP
```http
GET https://viacep.com.br/ws/{cep}/json/
```

**Parâmetros:**
- `cep` (string): CEP no formato 8 dígitos (ex: "01310100")

**Resposta de Sucesso:**
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "complemento": "",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

**Resposta de Erro:**
```json
{
  "erro": true
}
```

#### Implementação no Projeto

```typescript
// components/BudgetCalculatorGamefied.tsx
const fetchAddress = async (cep: string) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    if (!data.erro) {
      setAddress(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
    } else {
      console.error('CEP não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
  }
};
```

#### Tratamento de Erros
- CEP inválido ou não encontrado
- Timeout de requisição
- Erro de rede
- Formato de resposta inválido

### WhatsApp Business API

#### Descrição
Integração com WhatsApp através de URLs personalizadas para envio de mensagens pré-formatadas.

#### Configuração
- **Base URL**: `https://wa.me/`
- **Formato**: `https://wa.me/{phone}?text={message}`
- **Encoding**: URL encoding necessário para mensagens

#### Parâmetros
- `phone` (string): Número no formato internacional (ex: "5521991612893")
- `text` (string): Mensagem pré-formatada (URL encoded)

#### Implementação no Projeto

##### Configuração de Ambiente
```env
# .env.local
VITE_WHATSAPP_PHONE=5521991612893
```

##### Funções de Integração

```typescript
// Função genérica para WhatsApp
const sendToWhatsApp = (phone: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// Hero Section - Mensagem simples
const handleWhatsApp = () => {
  const message = "Olá! Quero descobrir meu orçamento exclusivo para higienização!";
  const phone = "5521999999999";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// Calculadora - Mensagem detalhada
const handleWhatsApp = () => {
  const { cashPrice, installmentPrice } = calculatePrices();
  const finalPrice = paymentMethod === "pix" ? cashPrice : installmentPrice;
  
  const message = `💎 AGENDAMENTO CONFIRMADO - MACHADO CLEAN

👤 DADOS DO CLIENTE:
• Nome: ${customerName}
• Telefone: ${customerPhone}

🛋️ SERVIÇO CONTRATADO:
• ${selectedService?.name}${sizeText}${quantityText}${impermeabilizationText}

📅 DATA E HORÁRIO:
• ${selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
• ${selectedTimeSlot}

📍 ENDEREÇO DO SERVIÇO:
• ${address}, ${number}${complement ? `, ${complement}` : ""}
• CEP: ${cep}

💰 PAGAMENTO:
• Forma: ${paymentMethod === "pix" ? "PIX/Dinheiro" : "Cartão parcelado"}
• Valor: R$ ${finalPrice}

✅ CONFIRMO ESTE AGENDAMENTO!`;
  
  const phone = "5521991612893";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// Dashboard - Mensagem de contato
const sendToWhatsApp = (contact: Contact) => {
  const message = `*AGENDAMENTO CONFIRMADO* ✅

*Cliente:* ${contact.name}
*Telefone:* ${contact.phone}
*Serviço:* ${contact.service_type} - ${contact.service_size}
*Data:* ${new Date(contact.scheduled_date).toLocaleDateString('pt-BR')}
*Horário:* ${contact.scheduled_time}
*Endereço:* ${contact.address}
*Pagamento:* ${contact.payment_method}
*Valor:* R$ ${contact.total_price?.toFixed(2)}

${contact.notes ? `*Observações:* ${contact.notes}` : ''}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/5521991612893?text=${encodedMessage}`, '_blank');
};
```

#### Formatação de Mensagens

##### Elementos de Formatação WhatsApp
- `*texto*` - Negrito
- `_texto_` - Itálico
- `~texto~` - Riscado
- ``` `código` ``` - Monoespaçado

##### Templates de Mensagem

**Template Básico:**
```typescript
const basicTemplate = (name: string, service: string) => `
Olá! Sou ${name} e gostaria de agendar:
🛋️ ${service}

Quando vocês podem atender?
`;
```

**Template Completo:**
```typescript
const fullTemplate = (data: BookingData) => `
💎 NOVO AGENDAMENTO - MACHADO CLEAN

👤 *CLIENTE:*
• Nome: ${data.name}
• Telefone: ${data.phone}

🛋️ *SERVIÇO:*
• Tipo: ${data.serviceType}
• Tamanho: ${data.serviceSize}
• Impermeabilização: ${data.hasImpermeabilization ? 'Sim' : 'Não'}

📅 *AGENDAMENTO:*
• Data: ${data.date}
• Horário: ${data.time}

📍 *ENDEREÇO:*
• ${data.fullAddress}
• CEP: ${data.cep}

💰 *PAGAMENTO:*
• Método: ${data.paymentMethod}
• Valor: R$ ${data.totalPrice}

${data.notes ? `📝 *OBSERVAÇÕES:*\n${data.notes}` : ''}

✅ *CONFIRMO ESTE AGENDAMENTO!*
`;
```

## 🔧 Configurações de Desenvolvimento

### Variáveis de Ambiente

```env
# .env.local (desenvolvimento)
VITE_WHATSAPP_PHONE=5521999999999
VITE_API_URL=http://localhost:3000
VITE_APP_ENV=development

# .env.production (produção)
VITE_WHATSAPP_PHONE=5521991612893
VITE_API_URL=https://api.machadoclean.com
VITE_APP_ENV=production
```

### Configuração de Proxy (se necessário)

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
```

## 📊 Dados e Estruturas

### Estrutura de Dados da Calculadora

```typescript
interface BookingData {
  // Dados do cliente
  customerName: string;
  customerPhone: string;
  
  // Serviço selecionado
  selectedService: Service;
  selectedSize: Size;
  wantsImpermeabilization: boolean;
  chairQuantity?: number;
  
  // Agendamento
  selectedDate: Date;
  selectedTimeSlot: string;
  
  // Endereço
  cep: string;
  address: string;
  number: string;
  complement?: string;
  
  // Pagamento
  paymentMethod: 'pix' | 'cartao';
  totalPrice: number;
}

interface Service {
  id: string;
  name: string;
  icon: React.ComponentType;
  category: 'sofa-clean' | 'sofa-impermeabilization' | 'sofa-combo' | 'car-clean' | 'mattress-clean' | 'others';
  description: string;
  benefits: string[];
}

interface Size {
  id: string;
  name: string;
  cleanPrice?: number;
  impermeabilizationPrice?: number;
  popular?: boolean;
  category?: string;
}
```

### Tabela de Preços

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
    },
    canto: { clean: 280, impermeabilization: 350 },
    cama: {
      solteiro: { clean: 200, impermeabilization: 300 },
      casal: { clean: 250, impermeabilization: 350 }
    }
  },
  poltronas: {
    amamentacao: { clean: 150, impermeabilization: 200 },
    comum: { clean: 120, impermeabilization: 180 },
    papai: { clean: 150, impermeabilization: 200 }
  },
  cadeiras: {
    "so-assento": { clean: 25, impermeabilization: 35 },
    "so-encosto": { clean: 25, impermeabilization: 35 },
    "assento-encosto": { clean: 35, impermeabilization: 45 }
  },
  colchoes: {
    solteiro: { clean: 130 },
    viuvo: { clean: 160 },
    casal: { clean: 180 },
    queen: { clean: 220 },
    king: { clean: 250 },
    "super-king": { clean: 280 },
    berco: { clean: 120 }
  },
  carros: {
    bancos: {
      pequeno: { clean: 180 },
      medio: { clean: 230 },
      grande: { clean: 280 },
      "extra-grande": { clean: 350 }
    },
    interna: {
      pequeno: { clean: 280 },
      medio: { clean: 330 },
      grande: { clean: 380 },
      "extra-grande": { clean: 450 }
    }
  },
  puff: {
    pequeno: { clean: 60, impermeabilization: 90 },
    medio: { clean: 90, impermeabilization: 130 },
    grande: { clean: 120, impermeabilization: 180 }
  },
  tapetes: {
    limpeza: { pricePerM2: 35 }
  }
};
```

## 🔍 Monitoramento e Analytics

### Tracking de Conversões

```typescript
// Função para rastrear conversões
const trackConversion = (eventName: string, data: any) => {
  // Google Analytics (exemplo)
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'Conversion',
      event_label: data.service_type,
      value: data.total_price
    });
  }
  
  // Facebook Pixel (exemplo)
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: data.service_type,
      value: data.total_price,
      currency: 'BRL'
    });
  }
};

// Uso na calculadora
const handleFinalConfirmation = () => {
  // Rastrear conversão
  trackConversion('Budget_Completed', {
    service_type: selectedService?.name,
    total_price: calculatePrices().cashPrice,
    payment_method: paymentMethod
  });
  
  // Continuar fluxo normal
  handleWhatsApp();
};
```

### Error Tracking

```typescript
// Função para rastrear erros
const trackError = (error: Error, context: string) => {
  console.error(`Error in ${context}:`, error);
  
  // Sentry (exemplo)
  if (typeof Sentry !== 'undefined') {
    Sentry.captureException(error, {
      tags: {
        context: context
      }
    });
  }
};

// Uso em try/catch
try {
  await fetchAddress(cep);
} catch (error) {
  trackError(error, 'ViaCEP_API');
  // Fallback behavior
}
```

## 🚀 Otimizações e Cache

### Cache de Endereços

```typescript
// Cache local para endereços já consultados
const addressCache = new Map<string, AddressData>();

const fetchAddressWithCache = async (cep: string) => {
  // Verificar cache primeiro
  if (addressCache.has(cep)) {
    return addressCache.get(cep);
  }
  
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    if (!data.erro) {
      // Armazenar no cache
      addressCache.set(cep, data);
      return data;
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
  }
  
  return null;
};
```

### Debounce para APIs

```typescript
import { useMemo } from 'react';
import { debounce } from 'lodash';

const BudgetCalculator = () => {
  // Debounce da busca de CEP
  const debouncedFetchAddress = useMemo(
    () => debounce(fetchAddress, 500),
    []
  );
  
  const handleCepChange = (cep: string) => {
    setCep(cep);
    if (cep.length === 8) {
      debouncedFetchAddress(cep);
    }
  };
};
```

## 🔒 Segurança

### Sanitização de URLs

```typescript
const sanitizeWhatsAppMessage = (message: string): string => {
  // Remove caracteres potencialmente perigosos
  return message
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '');
};

const sendSafeWhatsAppMessage = (phone: string, message: string) => {
  const sanitizedMessage = sanitizeWhatsAppMessage(message);
  const encodedMessage = encodeURIComponent(sanitizedMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
```

### Validação de Dados

```typescript
import { z } from 'zod';

const WhatsAppDataSchema = z.object({
  phone: z.string().regex(/^\d{13}$/, 'Telefone deve ter 13 dígitos'),
  message: z.string().max(4096, 'Mensagem muito longa'),
});

const validateWhatsAppData = (phone: string, message: string) => {
  try {
    WhatsAppDataSchema.parse({ phone, message });
    return true;
  } catch (error) {
    console.error('Dados inválidos para WhatsApp:', error);
    return false;
  }
};
```

## 📚 Referências e Recursos

### Documentação Externa
- [ViaCEP API](https://viacep.com.br/)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)
- [URL Encoding Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

### Ferramentas de Teste
- [Postman](https://www.postman.com/) - Teste de APIs
- [WhatsApp URL Tester](https://wa.me/) - Teste de URLs do WhatsApp
- [CEP Validator](https://viacep.com.br/) - Validação de CEPs
