FROM node:18.16
COPY . /app
WORKDIR /app
RUN yarn install
RUN npm run build
EXPOSE 8080
WORKDIR /app/dist
CMD ["serve", "-l", "8080"]
