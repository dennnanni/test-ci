FROM node:24-slim
WORKDIR /app

COPY package*.json ./
COPY backend/package*.json ./backend/

RUN npm ci --no-audit --no-fund

COPY backend ./backend

RUN npm run build -w backend

EXPOSE 3000
CMD ["npm", "run", "start", "-w", "backend"]
