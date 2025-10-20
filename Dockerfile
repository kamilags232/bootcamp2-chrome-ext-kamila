# Base Playwright (v1.46.0 como exemplo). Traz Chromium + dependências.
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app

# Copia apenas package files para aproveitar cache
COPY package*.json ./

# Instala dependências (devDependencies também)
RUN npm ci --silent

# Garante que navegadores/dep necessários estejam instalados
RUN npx playwright install --with-deps chromium

# Copia todo o projeto
COPY . .

# Build da extensão para dist/
RUN node scripts/build-extension.mjs

# default command (usado pelo compose)
CMD ["npm","run","test:e2e"]

