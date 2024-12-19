# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Add package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Add source code
COPY . .

# Build application
RUN npm run build
RUN ls -la build/

# Production stage
FROM nginx:alpine AS runner

# Add custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy public assets
COPY --from=builder /app/public /usr/share/nginx/html

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 