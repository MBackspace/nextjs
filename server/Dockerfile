FROM node:22-alpine

WORKDIR /usr/nextjs

COPY ./server/package.json .
COPY ./yarn.lock .

RUN yarn install

RUN mkdir dist

COPY ./server/dist ./dist

CMD ["yarn", "start:prod"]
