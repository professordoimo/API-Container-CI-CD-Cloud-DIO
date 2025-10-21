# Estágio de Build
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json (otimização de cache)
COPY package*.json ./

# Instala as dependências
RUN npm install --omit=dev

# Estágio de Produção (Imagem final e leve)
FROM node:18-alpine

# Define a porta que o container irá expor
EXPOSE 8080

# Copia as dependências e o código da API
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY server.js .

# Comando para iniciar a aplicação
CMD ["npm", "start"]
