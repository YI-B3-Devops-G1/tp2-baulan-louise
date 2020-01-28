FROM node:10

WORKDIR /home/nodejs/app

RUN chown -R node:node /home/nodejs/app

COPY package*.json
RUN npm install

EXPOSE 3000

CMD ['npm', 'start']
