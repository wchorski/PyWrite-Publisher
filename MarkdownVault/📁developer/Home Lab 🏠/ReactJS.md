#javascript #reactjs 
> [!info] [React –(reactjs.org)](reactjs.org))
A JavaScript library for building user interfaces. "client"

## connections
- [Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md) for home routing
- [Node.js (nodejs.org)](nodejs.org))
- example full stack app: [wchorski/node-signage: Digital Signage on a MERN stack (github.com)](github.com))

## installation
### [Docker](📁developer/Home%20Lab%20🏠/Docker.md) - full stack app
1. `./compose.yml`
	1. "client" - React App
	2. "server" - [Express](http://expressjs.com/) as the API
	3. "mongo" - [MongoDB: database](https://www.mongodb.com/) 
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
```yml
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
```config
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
```yml
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
```config
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


## Tutorials
### Dynamic table of contents - sticky navigation
[](https://www.emgoto.com/react-table-of-contents/#:~:text=How%20to%20build%20a%20table%20of%20contents%20in,Creating%20a%20table%20of%20contents%20with%20Gatsby%20)

### Change Class on click
[source](https://bobbyhadz.com/blog/react-add-remove-class-on-click#:~:text=To%20add%20or%20remove%20a%20class%20on%20click,Use%20the%20classList.add%20%28%29%20or%20classList.remove%20%28%29%20methods.)

```jsx
import {useState} from 'react';
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div>
      <button className={isActive ? 'bg-salmon' : ''} onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

```
or
```jsx
import './App.css';

export default function App() {
  const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

```

## Troubleshooting
### Typescript ESLint
using [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown) & [syntaxhighlighter/syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter) I got the error during build time
> [!error] Error: Do not pass children as props. Instead, nest children between the opening and closing tags. react/no-children-prop

I found a [stack overflow fix](https://stackoverflow.com/a/72873399/15579591) to have eslint ignore the line
```jsx
<ReactMarkdown >{content.answer}</ReactMarkdown>

// comment out whole component
{// eslint-disable-next-line 
}<ReactMarkdown key={idx} children={[content.answer]} />

// or

// comment out just the line inside component
<SyntaxHighlighter
	// eslint-disable-next-line
	children={String(children).replace(/\n$/, '')}
	style={syntaxStyle}
	language={match[1]}
	PreTag="div"
	{...props}

  />

```

### Child component does not re-render / update when Parent state change
[source](https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes)
Why in the following pseudo-code example Child doesn't re-render when Container changes foo.bar?
```jsx
Container {
  handleEvent() {
    this.props.foo.bar = 123
  },

  render() {
    return <Child bar={this.props.foo.bar} />
}

Child {
  render() {
    return <div>{this.props.bar}</div>
  }
}
```

Even if I call `forceUpdate()` after modifying the value in Container, Child still shows the old value.

Update the child to have the attribute 'key' equal to the name. The component will re-render every time the key changes.
```jsx
Child {
  render() {
    return <div key={this.props.bar}>{this.props.bar}</div>
  }
}
```