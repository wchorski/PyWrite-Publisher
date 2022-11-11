#cloud #gmail #opensource 

## [Homepage - Nextcloud](https://nextcloud.com/)

> Regain control over your data. Remote collaboration made easy
>-   On-premises or cloud
>-   Customizable and scaleable
>-   No data leaks to third parties


> I dropped **Google Drive** harder than a DJ with a fresh new crate of tracks. I even brought on some friends and family  
> - me

---
### connections
- publicly face app with [Nginx](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md#Publicly%20Facing%20App)
- syncs pictures for [PhotoPrism](📁developer/Home%20Lab%20🏠/PhotoPrism.md) to read my every growing photo gallery
- used as my calendar server
- backup phone contacts

### installation
1. note that I use an external drive. You must set up your other drive first.
2. [Docker](📁developer/Home%20Lab%20🏠/Docker.md) `compose.yml`
```yaml
version: '2'

volumes:
  nextcloud:
  db:

services:
  db:
    image: mariadb
    restart: always
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW --innodb-read-only-compressed=OFF
    volumes:
      - /home/<username>/docker/nextcloud/db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=<password09>
      - MYSQL_PASSWORD=<password09>
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud

  app:
    image: nextcloud:25 # USE current version number, increment by one when upgrading
    restart: always
    ports:
      - 8080:80
    links:
      - db
    volumes:
      - /home/<username>/docker/nextcloud/html:/var/www/html
      - /home/<username>/docker/nextcloud/html/apps:/var/www/html/custom_apps 
      - /home/<username>/docker/nextcloud/html/config:/var/www/html/config 
      - /mnt/<externalDrive>/nextcloud/data:/var/www/html/data
    environment:
      - MYSQL_PASSWORD=<password09>
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_HOST=db
```

## How to Update
> [!error]
> UPDATE ONE MAJOR VERSION AT A TIME
> 23 => 24 👍
> 23 =/> 25 🚫

---
## Gmail SMTP server
Nextcloud needs a way to send password resets / notifications / alerts. So I've hooked it up with gmail's SMTP server using an google app password.  

---
## Troubleshooting
### Upgraded 2 versions up on accident 
Turn off Maintenance mode
> via `config/config.php` [source](https://help.nextcloud.com/t/cant-start-nextcloud-because-the-version-of-the-data-is-higher-than-the-docker-image-version-and-downgrading-is-not-supported/109438/4)
> -   go to your nextcloud folder and then open config/config.php
> -   search for `'maintenance' => true,`
> -   change `true` to `false`
> -   save your changes
> -   reload your web page


recover old ./version.php
> 1. restore /version.php from backup into the container  
> 2. run a manual update via 
> 	1. `docker-compose exec --user www-data nextcloud php occ -vvv upgrade` 
> 	2. `docker-compose exec --user www-data nextcloud php occ maintenance:mode --off`.  (or with method above)
> 	   
>  That got me back to a running v19.  
From there I could then pull the v20 docker image and run the upgrade to v20 using the same two commands.
> [source](https://help.nextcloud.com/t/cant-start-nextcloud-because-the-version-of-the-data-is-higher-than-the-docker-image-version-and-downgrading-is-not-supported/109438/4?u=wchorski)

If you don't make backups then you could possibly edit the container's `html/version.php`. Gotta thank [Duplicati](📁developer/Home%20Lab%20🏠/Duplicati.md) for saving my behind

#todo 
- [x] man description
- [x] my desc
- [ ] working on contact syncing