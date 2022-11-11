## [Home - Docker](https://www.docker.com/)
fast, easy and portable application development through containerization 

If I haven't figured out a way to [containerize]([What is a Container? - Docker](https://www.docker.com/resources/what-container/)) an app, I will find a way. Pretty much the backbone of how I deploy and maintain many services.    

---

### connections
- [portainer](📁developer/Home%20Lab%20🏠/portainer.md)
- [Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md)
- [Nextcloud](📁developer/Home%20Lab%20🏠/Nextcloud.md)
- [PhotoPrism](📁developer/Home%20Lab%20🏠/PhotoPrism.md)
- [Wordpress](📁developer/Home%20Lab%20🏠/Wordpress.md)
- [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md)
- [ReactJS](📁developer/Home%20Lab%20🏠/ReactJS.md)
- [vaultwarden](📁developer/Home%20Lab%20🏠/vaultwarden.md)
- [Jellyfin](📁developer/Home%20Lab%20🏠/Jellyfin.md)
- [Plex.tv](📁developer/Home%20Lab%20🏠/Plex.tv.md)
- pretty much any of my microservices. Especially if it's public facing 

### installation
1. [Install Docker Desktop on Linux](https://docs.docker.com/desktop/install/linux-install/)

---
## Tips & Tricks
specifiy a file other than `docker-compose.yml` or `compose.yml`
```bash
docker-compose -f docker-compose.test.yml up
```


#todo 
- [ ] try out watchtower  to auto update containers [Docker Compose File For Watchtower | JamesCoyle.net Limited](https://www.jamescoyle.net/how-to/docker-compose-files/3323-docker-compose-file-for-watchtower#:~:text=Create%20a%20new%20directory%20and%20save%20the%20above,from%20the%20moment%20you%20start%20the%20Watchtower%20container.)