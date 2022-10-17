# externalURL
Password manager. Unofficial [Bitwarden](https://bitwarden.com/) compatible server written in Rust, formerly known as bitwarden_rs

## connections
- Internet Browser Extension
- Android App
- Desktop App (cross platform)

## installation
### [Docker](Docker.md)
```
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