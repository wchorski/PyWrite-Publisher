#docker 
# [Portainer](https://www.portainer.io/)
Docker and Kubernetes Management. A no-code solution for spinning up containers. I usually use it to start / stop / log / shell into containers easily

## connections
- one

## installation
### [Docker](📁developer/Home%20Lab%20🏠/Docker.md)
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

### upgrade a container
[How to Update a Docker Container using Portainer - WunderTech](https://www.wundertech.net/how-to-update-a-docker-container-using-portainer/)
[video tutorial - WunderTech](https://www.youtube.com/watch?v=CK9blZF1lFo)
1. Select **Containers** http://YOUR_DOMAIN.lan:9000/#!/2/docker/containers, then press <button>⬜Stop</button>  the container that you’d like to update.
2. Select into the individual container,(you'll see `Container details` at the top of the page) and you’ll see a button named <button>🔄Recreate</button> By selecting this button, 
> [!error] make sure your critical data is mapped to a volume. That means bye bye to any data only living on RAM
4. Select **Pull latest image** toggle, then **Recreate**.
5. When this process is finished, the container will be recreated with the latest image. Select the container and **Start** it. The status will change to **running**