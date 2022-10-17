# [WordPress.com](https://wordpress.com/)
Welcome to the world’s most popular website builder.

## connections
- uses MariaDB

## installation
### [Docker](Docker.md)
1. `compose.yml`
```
version: '3.7'

services:

  db:
    image: mariadb:10
    container_name: wp-<websitename>-db
    restart: always
    volumes:
      - '/mnt/uasis5/wp/<websitename>/db:/var/lib/mysql'
      - '/mnt/uasis5/wp/<websitename>/backups:/backups'
    environment:
      MYSQL_DATABASE: <websitename>_db
      MYSQL_USER: <websitename>_user
      MYSQL_PASSWORD: <superstrongpassword>
      MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
      MYSQL_ROOT_PASSWORD: <superstrongpassword>

  wordpress:
    image: wordpress:latest
    container_name: wp-<websitename>-wordpress
    restart: always
    depends_on: ['db']
    ports: ['3330:80']
    links: ['db:db']
    volumes:
      - '/mnt/<externalDrive>/wp/<websitename>/wordpress:/var/www/html'
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_NAME: <websitename>_db
      WORDPRESS_DB_USER: <websitename>_user
      WORDPRESS_DB_PASSWORD: <superstrongpassword>
      
  phpmyadmin:
    image: phpmyadmin/phpmyadmin:4.7
    container_name: wp-<websitename>-phpmyadmin
    restart: always
    depends_on: ['db']
    ports: ['3331:80']
    links: ['db:db']
    environment:
      PMA_HOST: 'db'
      PMA_USER: '<websitename>_user'
      PMA_PASSWORD: '<superstrongpassword>'
```