FROM node:8.0.0

# Setup
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install

RUN npm install pm2 -g

# We have package called dotenv, but it isn't used in docker. Envs are in docker-compose.
RUN cp .dev-env .env

EXPOSE 8080

CMD ["pm2-docker", "app.js"]