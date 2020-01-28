FROM node:10

WORKDIR /home/nodejs/app

RUN chown -R node:node /home/nodejs/app

COPY package*.json
RUN npm install

EXPOSE 8001

CMD ['npm', 'start']
