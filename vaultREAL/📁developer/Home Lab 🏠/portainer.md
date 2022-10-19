#docker 
# [Portainer](https://www.portainer.io/)
Docker and Kubernetes Management. A no-code solution for spinning up containers. I usually use it to start / stop / log / shell into containers easily

## connections
- one

## installation
### [Docker](%F0%9F%93%81developer/Home%20Lab%20%F0%9F%8F%A0/Docker.md)
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
echo "[ upgrading portainer ](%20upgrading%20portainer%20)"

echo "[ stop portainer docker ](%20stop%20portainer%20docker%20)"
sudo docker stop portainer

echo "[ remove old portainer docker ](%20remove%20old%20portainer%20docker%20)"
sudo docker rm portainer

echo "[ sudo docker-compose u -d ](%20sudo%20docker-compose%20u%20-d%20)"
cd /home/<username>/docker/portainer

sudo docker-compose up -d
```