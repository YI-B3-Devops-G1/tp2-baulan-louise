FROM node:10

WORKDIR /home/nodejs/app

RUN chown -R node:node /home/nodejs/app

COPY package*.json ./
COPY main.js ./
RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]
