
# Use a specific version of Node.js for building the app
FROM node:16 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install all dependencies (including axios and vue-lazyload, if defined in package.json)
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the build script (Make sure the "build" script is defined in package.json)
RUN npm run build

# Use Nginx to serve the production build
FROM nginx:alpine

# Copy the build output from the builder image into the Nginx container
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]


