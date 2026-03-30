FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy rest of backend code
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]