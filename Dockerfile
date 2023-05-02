FROM node:19.7.0-alpine
WORKDIR /app
ADD . /app
RUN corepack enable
RUN yarn
EXPOSE 3000
CMD yarn start