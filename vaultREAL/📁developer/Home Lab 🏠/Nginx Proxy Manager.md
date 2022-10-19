
> Expose your services easily and securely [https://nginxproxymanager.com/](https://nginxproxymanager.com/)

Gotta be honest, writing Nginx code was always a headache, but once I found this I never want to go back. This makes **routing** and **SSL** certificates a breeze.  

---

### connections
- [Pi-hole](%F0%9F%93%81developer/Home%20Lab%20%F0%9F%8F%A0/Pi-hole.md) for local DNS. Make pretty URLs for local or public services

### installation
1. `compose.yml` via [Docker](%F0%9F%93%81developer/Home%20Lab%20%F0%9F%8F%A0/Docker.md) 
```yaml
version: '3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

Default Admin User:
```
Email:    admin@example.com
Password: changeme
```

---

## Publicly Facing App
1. 

## Pretty URLs for Local Apps
1. [Pi-hole](%F0%9F%93%81developer/Home%20Lab%20%F0%9F%8F%A0/Pi-hole.md) DNS setup
2. **Nginx** to link Port number 

---

#todo 
- [ ] explain how you set up router to forward port 80 & 443
- [ ] explain using domain name and IP address
- [ ] show how to connect pi-hole to give any service a pretty URL
- [ ] finish "publicly facing app"
- [ ] finish "pretty urls for ..."