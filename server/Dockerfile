FROM node:lts-alpine AS builder

WORKDIR /prepare

COPY ./server/ ./

RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /backend

COPY --from=builder /prepare/build/ ./build/
COPY --from=builder /prepare/package.json ./
COPY --from=builder /prepare/package-lock.json ./

RUN npm install --production

CMD [ "npm", "run", "start" ]

EXPOSE 3000