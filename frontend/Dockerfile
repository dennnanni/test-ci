# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Copy root configurations
COPY package*.json ./
# Copy workspace configurations
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm ci --include=optional

# Copy source code for frontend (copy after to avoid running npm install on code changes)
COPY frontend ./frontend

# Build TS
RUN npm run build -w frontend

# Serve stage
FROM nginx:alpine
# Copy built assets
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
# Copy custom nginx config
COPY frontend/nginx.conf /etc/nginx/nginx.conf
# Start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
