FROM node:22-alpine

WORKDIR /usr/nextjs

COPY ./server/package.json .
COPY ./yarn.lock .

RUN mkdir node_modules
COPY ./node_modules ./node_modules

RUN mkdir dist

COPY ./server/dist ./dist

CMD ["yarn", "start:prod"]
