FROM node as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN mkdir -p /usr/src/app/node_modules && chmod -R 777 /usr/src/app/node_modules

RUN chmod a+x /usr/src/app/node_modules

RUN npm ci --production

COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000
CMD [ "node", "build/server.js" ]
