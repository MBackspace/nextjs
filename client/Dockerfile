FROM node:22-alpine

WORKDIR /usr/nextjs

COPY ./client/package.json .
COPY ./yarn.lock .

RUN yarn install

RUN mkdir .next
RUN mkdir public

COPY ./client/.next ./.next
COPY ./client/public ./public

CMD ["yarn", "start"]
