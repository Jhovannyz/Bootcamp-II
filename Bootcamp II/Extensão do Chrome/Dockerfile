# Usa a imagem oficial do Playwright que já contém as dependências
FROM mcr.microsoft.com/playwright:v1.56.0-jammy

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência e instala (maximiza o cache)
COPY package*.json ./
RUN npm ci --silent

# Copia o restante dos arquivos da aplicação (respeitando o .dockerignore)
COPY . .

# Build da extensão (gera dist/ e dist/extension.zip)
RUN npm run build

# Comando padrão para rodar a suíte de testes completa (build + e2e)
CMD ["npm", "test"]