# Build Stage
FROM node:18.16 AS build-env
COPY . /app
WORKDIR /app
RUN yarn install
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
