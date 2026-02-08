FROM node:krypton-alpine AS builder

WORKDIR /prepare

COPY ./apps/server/ ./

RUN npm install
RUN npm run build

FROM node:krypton-alpine

WORKDIR /backend

COPY --from=builder /prepare/build/ ./build/
COPY --from=builder /prepare/package.json ./
COPY --from=builder /prepare/package-lock.json ./

RUN npm install --production

CMD [ "npm", "run", "start" ]

EXPOSE 3000