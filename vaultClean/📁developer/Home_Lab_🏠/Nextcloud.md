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
- publicly face app with [Nginx](Nginx%20Proxy%20Manager.md#Publicly%20Facing%20App)
- syncs pictures for [PhotoPrism](PhotoPrism.md) to read my every growing photo gallery
- used as my calendar server
- backup phone contacts

### installation
1. note that I use an external drive. You must set up your other drive first.
2. [Docker](Docker.md) `compose.yml`
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
    image: nextcloud
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

---
## Gmail SMTP server
Nextcloud needs a way to send password resets / notifications / alerts. So I've hooked it up with gmail's SMTP server using an google app password.  

---

#todo 
- [x] man description
- [x] my desc
- [ ] working on contact syncing