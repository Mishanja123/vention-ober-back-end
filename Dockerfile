FROM node as builder

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

RUN chmod a+x /usr/src/app/node_modules/

RUN npm run build

FROM node:slim

COPY --from=builder /usr/src/app/build ./build

EXPOSE 3000
CMD [ "node", "build/server.js" ]
