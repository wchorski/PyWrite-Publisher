#javascript #reactjs 
# [React –(reactjs.org)](https://reactjs.org/)
A JavaScript library for building user interfaces. "client"

## connections
- [Nginx Proxy Manager](Nginx%20Proxy%20Manager.md) for home routing
- [Node.js (nodejs.org)](https://nodejs.org/en/)
- example full stack app: [wchorski/node-signage: Digital Signage on a MERN stack (github.com)](https://github.com/wchorski/node-signage)

## installation
### [Docker](Docker.md) - full stack app
1. `./compose.yml`
	1. "client" - React App
	2. "server" - [Express](http://expressjs.com/) as the API
	3. "mongo" - [MongoDB: database](https://www.mongodb.com/) 
```
version: '3'
  
services:

  mongo:
    restart: unless-stopped
    image: mongo
    environment:
      - MONGO_INITDB_ROOT_USERNAME=<username>
      - MONGO_INITDB_ROOT_PASSWORD=<strongpassword>
      - MONGO_INITDB_DATABASE=auth
    volumes:
      - ./db/mongo-db:/data/db
    networks:
      - nodesign-network

  server:
    restart: unless-stopped
    build:
      context: ./server
      dockerfile: Dockerfile
    ports:
      - "4031:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001 # MUST match with Internal port above ^
      - DATABASE_URI=mongo # match with mongo container_name
      - DATABASE_PORT=27017 # match with mongo container
      - MONGO_USER=<username> # match with mongo container
      - MONGO_PASS=<strongpassword> # match with mongo container
      - MONGODB_COLLECTION=nodesignCollection
      - REFRESH_TOKEN_SECRET=<longHashNumber_01>
      - ACCESS_TOKEN_SECRET=<longHashNumber_02>
      - FRONTEND_URL_ORIGIN=https://<yourDomain>
      - FRONTEND_URL_PORT=443 # if using SSL = 443
    depends_on:
      - mongo
    networks:
      - nodesign-network
  

  # nginx built inside
  client:
    restart: unless-stopped
    build:
      context: ./client
      dockerfile: Dockerfile
    ports:
      - 4030:80 # because nginx is inside this container too
    environment:
      - REACT_APP__API_IP=https://<yourDomain>
      - REACT_APP__API_PORT=443 # MUST match API external port. use 433 if https://
      - REACT_APP__API_FOLDER=/api
    depends_on:
      - server
    networks:
      - nodesign-network
      # add to ngnix-prox-mgmt network

networks:
  nodesign-network:
    driver: bridge

volumes:
  mongo-db:
```

2. `./client/Dockerfile`
```
FROM node:17 as build

LABEL version="0.0.1"
LABEL description="React Frontend for App"

WORKDIR /app
COPY package*.json /app/

RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules
RUN npm install --only=production

COPY . /app

RUN npm run build 

FROM nginx:1.21.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

3. `./client/.dockerignore`
```
Dockerfile
**/Dockerfile
Dockerfile.dev
.dockerignore
**/node_modules
*/node_modules
node_modules
.git
.gitignore
npm-debug.log
build
```

4. `./server/Dockerfile`
```
FROM node:17 as build

LABEL version="0.0.1"
LABEL description="Express Backend for Node Signage "

WORKDIR /app
COPY package*.json ./

RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules

ARG NODE_ENV
RUN npm install --only=production

COPY . ./

EXPOSE $PORT

CMD ["node", "server"]
```

5. `./server/.dockerignore`
```
Dockerfile
Dockerfile*
docker-compose*
.dockerignore
README.md
node_modules
.git
.gitignore
.env
npm-debug.log
```