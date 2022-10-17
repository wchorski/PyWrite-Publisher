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
```yml
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
```dockerfile
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

---
## Tips & Tricks
### multi nexted dynamic routes
- [Multi Nested Dynamic Routes in NextJs - DEV Community 👩‍💻👨‍💻](https://dev.to/willholmes/multi-nested-dynamic-routes-in-nextjs-30f7)

### absolute imports
- absolute paths instead of relative paths. Especially helpful when doing more automation / generation of links - [Next.js Absolute Imports and Aliases (ahmadawais.com)](https://ahmadawais.com/next-js-absolute-imports-aliases/#:~:text=Next.js%20Absolute%20Imports%20%23%20Basically%20you%20only%20need,via%20jsconfig.json%20%28JS%20projects%29%20or%20tsconfig.json%20%28TS%20projects%29.)
```js
// Your jsconfig.json or tsconfig.json 
{ 
	"compilerOptions": { 
		"baseUrl": "." 
	} 
}
```

### multiple nested routes with getStaticPaths - [source](https://stackoverflow.com/questions/61732511/how-to-use-multiple-nested-dynamic-routes-with-getstaticpaths)
folder structure
```js
├── _app.jsx
├── _document.jsx
├── index.jsx
└── [type]
    └── [slug].jsx
```

`./pages/[type]/[slug].jsx`
```javascript
const Test = (props) => {
    return (
       <>
           {props.slug}
       </>
    );
};

export async function getStaticProps({params}) {
    return {
        props: params
    }
}

export async function getStaticPaths() {
    const posts = [
        {
            mainTag: 'programming',
            slug: 'hello-world'
        },
        {
            mainTag: 'programming',
            slug: 'nextjs-101'
        },
    ];

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    type: posts.mainTag,
                    slug: posts.slug,
                },
            };
        }),
        fallback: false,
    };
}

export default Test;
```


---
## Trials & Tribulations
> [!error] Module Not Found Can’t Resolve ‘fs’ in Next.js
> you'll find yourself commenting / uncommenting lines while troubleshooting. 
> 
> if you're loading a server side script from `getStaticPaths` or `getStaticProps` and decide to comment out the function, remember to comment out the **import** of said script at the top of the `./pages/file.jsx` 

`./pages/file.jsx`
```javascript
import { serverFunc } from "libs/serverScript"; 
// this will throw the *import* error unless you comment out above line too

export async function getStaticPaths() {

	// serverFunc() 

}
```

> [!warning] Catch alls can only be at end of structure
> `./pages/[...folder]/[...slug]`? - No sir

