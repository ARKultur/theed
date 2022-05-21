FROM node:18.2-alpine3.14 as builder

RUN mkdir -p /theed
WORKDIR /theed

COPY package.json .
RUN yarn install

COPY . .
EXPOSE 3000
RUN yarn build:prod



FROM node:18.2-alpine3.14 as final

RUN yarn global add serve
EXPOSE 3000

COPY --from=builder /theed/dist/ .
CMD ["serve", "-s" , "dist"]

