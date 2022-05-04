FROM node:17 AS builder

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

RUN npm run build:stage

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

