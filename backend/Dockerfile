FROM node:24-slim

WORKDIR /app

COPY package*.json ./
# Install all dependencies including dev
RUN npm install

COPY . .

# Build TS
RUN npm run build

# Start production server
EXPOSE 3000
CMD ["npm", "run", "start"]
