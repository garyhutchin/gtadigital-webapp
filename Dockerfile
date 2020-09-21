### Stage 1: Build ###

FROM node:12-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### Stage 2: Run ###

FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build /app/dist/gtadigital-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]