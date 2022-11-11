# externalURL
Password manager. Unofficial [Bitwarden](https://bitwarden.com/) compatible server written in Rust, formerly known as bitwarden_rs

## connections
- Internet Browser Extension
- Android App
- Desktop App (cross platform)

## installation
### [Docker](📁developer/Home%20Lab%20🏠/Docker.md)
```yml
version: '3'

services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: always
    environment:
      - WEBSOCKET_ENABLED=true  # Enable WebSocket notifications.
      - ADMIN_TOKEN=<supersecuresecrethash> #enable /admin page

    volumes:
      - /home/<username>/docker/vaultwarden/vw-data:/data


```
---
## trials & tribulations
### broken app on upgrade
I was trying to rebuild and deploy the docker image, yet the container's app just gave up. I think this is a DNS issue as I launched a new app with an exposed port (linking to the same data volume) and things work now. 