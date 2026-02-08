FROM node:krypton-alpine AS builder

WORKDIR /frontend

COPY ./apps/client/ ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /frontend/dist/ ./

EXPOSE 80