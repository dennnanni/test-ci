FROM node:24-slim

WORKDIR /app

# Copy root configurations
COPY package*.json ./
# Copy workspace configurations
COPY backend/package*.json ./backend/

# Install dependencies (workspaces support)
RUN npm ci --include=optional

# Copy source code for backend (copy after to avoid running npm install on code changes)
COPY backend ./backend

# Build TS
RUN npm run build -w backend

# Start production server
EXPOSE 3000
CMD ["npm", "run", "start", "-w", "backend"]
