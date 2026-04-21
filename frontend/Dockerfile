# Build stage — runs on CI host architecture (no QEMU emulation)
FROM --platform=$BUILDPLATFORM node:24-slim AS builder
WORKDIR /app

COPY package*.json ./
COPY frontend/package*.json ./frontend/

RUN npm ci --no-audit --no-fund

COPY frontend ./frontend

RUN npm run build -w frontend

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
