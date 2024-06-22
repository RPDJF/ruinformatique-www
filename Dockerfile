# Build stage
FROM node:20.14.0-alpine3.19 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

# Production
FROM httpd:alpine

COPY --from=build-stage /usr/src/app/src/ /usr/local/apache2/htdocs/

EXPOSE 80