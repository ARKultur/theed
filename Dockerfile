FROM node:18.2.0-alpine3.12

RUN mkdir -p /theed
WORKDIR /theed

COPY package.json .
RUN yarn global add serve && \
    yarn install


COPY . .

EXPOSE 3000

RUN yarn build

CMD ["serve", "-s" , "build"]
