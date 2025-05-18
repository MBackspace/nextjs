FROM node:22-alpine

WORKDIR /usr/nextjs

COPY ./client/package.json .
COPY ./yarn.lock .

RUN mkdir node_modules
COPY ./node_modules ./node_modules

RUN mkdir .next
RUN mkdir public

COPY ./client/.next ./.next
COPY ./client/public ./public

CMD ["yarn", "start"]
