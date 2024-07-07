FROM node:alpine

WORKDIR /

COPY . .

RUN npm install 
RUN npm install typescript
RUN npm run build

EXPOSE 3000

CMD [ "npm","run","dev" ]