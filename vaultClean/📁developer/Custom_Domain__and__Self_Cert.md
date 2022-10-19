#nginx #proxy #manager #pihole #certbot

[How to Create Custom Domains with PiHole and NGINX Proxy Manager – LTM Tech (ltm56.com)](/vault/https://ltm56.com/how-to-create-custom-domains-with-pihole-and-nginx-proxy-manager/)

[KB450428 – Nextcloud Self Signed Certificate with Nginx Proxy Manager – 45Drives Knowledge Base](/vault/https://knowledgebase.45drives.com/kb/kb450428-nextcloud-self-signed-certificate-with-ngnix-proxy-manager/#:~:text=Once__the__files__are__on__your__workstation__navigate,files__saved__to__your__workstation.__Then__click__Save.)

-   Because android won't accept http requests
-   But I don't want the db to be forward facing (use of personal VPN instead)

`sudo apt install openssl` - can be used on a throwaway machine

```

openssl req -newkey rsa:4096 \  
            -x509 \  
            -sha256 \  
            -days 3650 \  
            -nodes \  
            -out pywriter.lan.crt \  
            -keyout pywriter.lan.key

```