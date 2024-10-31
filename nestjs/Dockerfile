FROM node:22

WORKDIR /app

COPY . .

RUN npm install

#expose port 
EXPOSE 3000

CMD ["npm", "run", "start:dev"]

