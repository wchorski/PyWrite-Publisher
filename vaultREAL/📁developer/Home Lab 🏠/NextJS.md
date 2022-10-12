#javascript #reactjs
# [Next.js by Vercel(nextjs.org)](https://nextjs.org/)
The React Framework. hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## connections
- [Nginx Proxy Manager](Nginx%20Proxy%20Manager.md) for home routing
- example app: [wchorski/heart-chart: cute app to make affection competitive (github.com)](https://github.com/wchorski/heart-chart)

## installation
### [Docker](Docker.md)
1. `./compose.yml`
	1. "app" - NextJS App
	2. "mongo" - MongoDB database
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
      - ./database/mongo-db:/data/db
    networks:
      - nexthearts-network

  # nginx built inside
  app:
    image: nextjs-<appname>
    restart: unless-stopped
    build:
      dockerfile: Dockerfile
    ports:
      - 4050:3000
    environment:
      - MONGO_URI=mongo
      - MONGO_PORT=27017
      - MONGO_COLLECTION=<appname>
      - MONGO_USER=<username>
      - MONGO_PASSWORD=<strongpassword>

      # PROVIDERS
      - GITHUB_ID=
      - GITHUB_SECRET=
      - FACEBOOK_ID=
      - FACEBOOK_SECRET=
      - NEXTAUTH_URL=https://<yourDomain>
    depends_on:
      - mongo
    networks:
      - nexthearts-network
      - nginx-prox-mgmt-3_default # add to ngnix-prox-mgmt network for Docker DNS

networks:
  nexthearts-network:
    driver: bridge
  nginx-prox-mgmt-3_default: # so we can call service by DNS
    driver: bridge

volumes:
  mongo-db:
```

2. `./Dockerfile`
```
FROM node:16

RUN mkdir /app
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . ./
RUN npm run build

CMD ["npm", "start"]
```

3. `./.dockerignore`
```
Dockerfile
**/Dockerfile
Dockerfile.dev
.dockerignore
**/node_modules
node_modules
.git
.gitignore
npm-debug.log
.next
.env.dev
.env.prod
```