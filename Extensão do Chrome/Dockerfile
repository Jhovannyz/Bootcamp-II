# Usa a imagem oficial do Playwright que já contém as dependências [cite: 1]
FROM mcr.microsoft.com/playwright:v1.56.0-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci --silent

# Garante que o navegador e suas dependências estão instalados
RUN npx playwright install --with-deps chromium

COPY . .
# Build da extensão (gera dist/ e dist/extension.zip) 
RUN npm run build

# Comando padrão otimizado para rodar apenas os testes E2E
CMD ["npm", "run", "test:e2e"]