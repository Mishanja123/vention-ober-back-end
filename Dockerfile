FROM node as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN chown -R node /usr/src/app/node_modules

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/node_modules && chmod +rwx /usr/src/app/node_modules

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000
CMD [ "node", "build/server.js" ]
