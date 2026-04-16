# Build stage
FROM node:24-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html
# Start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
