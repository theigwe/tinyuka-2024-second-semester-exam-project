# ---- Stage 1: Build ----
# Use an official Node.js runtime as the base image for building the app
FROM node:22-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, etc.)
COPY package*.json ./

# Install dependencies using 'ci' for reproducible builds
RUN npm ci

# Copy the rest of the application's source code
COPY . .

# Build the Vite app for production
RUN npm run build


# ---- Stage 2: Production ----
# Use a lightweight Nginx image to serve the static content
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'builder' stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# The Nginx image will automatically start the server
# The default command is ["nginx", "-g", "daemon off;"]