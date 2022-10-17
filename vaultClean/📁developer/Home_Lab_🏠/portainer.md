#docker 
# [Portainer](https://www.portainer.io/)
Docker and Kubernetes Management. A no-code solution for spinning up containers. I usually use it to start / stop / log / shell into containers easily

## connections
- one

## installation
### [Docker](Docker.md)
1. `./compose.yml`
```
version: "3.2"

services:
  portainer:
    image: portainer/portainer-ce:2.11.1
    container_name: portainer
    restart: always
    ports:
      - 8000:8000
      - 9000:9000
      - 9443:9443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./portainer_data:/data

# networks:
#   default:
#     external:
#       name: nginx-prox-mgmt-3_default
```

2. `./upgrade.sh`
```
#! /bin/bash
echo "[[ upgrading portainer ]]"

echo "[[ stop portainer docker ]]"
sudo docker stop portainer

echo "[[ remove old portainer docker ]]"
sudo docker rm portainer

echo "[[ sudo docker-compose u -d ]]"
cd /home/<username>/docker/portainer

sudo docker-compose up -d
```