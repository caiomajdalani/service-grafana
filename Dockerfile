FROM node:latest
WORKDIR /usr/service-reports/
COPY package.json /usr/service-reports/
RUN npm install pm2 -g
RUN npm install
COPY . /usr/service-reports/
CMD ["npm", "run", "start:dev"]
