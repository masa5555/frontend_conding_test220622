FROM node:14-alpine

RUN apk add --update git
RUN npm install

WORKDIR "/project"
EXPOSE 3000