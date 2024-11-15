# Stage 1: Build
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY ./ecomm-vue/package*.json ./
RUN npm install

# Copy the entire project and build the Vue.js app
COPY ./ecomm-vue .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built files from the builder stage to Nginx's default HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]



