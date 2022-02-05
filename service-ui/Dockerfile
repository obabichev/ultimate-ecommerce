FROM node:13.12.0-alpine as base

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY tsconfig.json tsconfig.json
COPY public public
COPY src src

FROM base as dev

CMD ["npm", "run", "dev"]

FROM base as build

RUN npm run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
