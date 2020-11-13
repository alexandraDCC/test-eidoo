FROM node:12.15.0-alpine3.9

WORKDIR /

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
