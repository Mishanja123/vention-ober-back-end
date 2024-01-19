FROM node as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

ENV NODE_ENV production
USER node

RUN mkdir /usr/src/app 
RUN chown node:node /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci --production

COPY --chown=node:node --from=builder /usr/src/app/build ./build

EXPOSE 3000
CMD [ "node", "build/server.js" ]
