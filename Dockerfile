## BUILD
FROM node:alpine AS builder

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run generate

## PRODUCTION
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN sed -i -r "s/80/8080/g" /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 8080