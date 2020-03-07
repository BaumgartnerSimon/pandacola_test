FROM node:10

WORKDIR /app
COPY . /app
RUN yarn install

EXPOSE 8080
CMD yarn start
