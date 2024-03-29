FROM node:18.7-alpine3.16

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run","start"]

