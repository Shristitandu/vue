
FROM node:18 AS builder
WORKDIR /app
COPY ./ecomm-vue/package*.json ./
RUN npm  install axios vue-lazyload
RUN npm install
COPY ./ecomm-vue .
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



