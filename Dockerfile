## BUILD
FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run generate

RUN ls

## PRODUCTION
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html/