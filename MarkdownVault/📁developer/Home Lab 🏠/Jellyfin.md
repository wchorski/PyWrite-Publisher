#music #media #player #itunes #bash #powershell

![banner-dark (jellyfin.org)](https://jellyfin.org/images/logo.svg) 
> [!info] [Jellyfin](https://jellyfin.org/) The Free Software Media System.
> Jellyfin is the volunteer-built media solution that puts _you_ in control of your media. Stream to any device from your own server, with no strings attached. Your media, your server, your way.

I use this exclusively for music hosting because [Plex.tv](📁developer/Home%20Lab%20🏠/Plex.tv.md) has more restrictions on client music playback. Plus, with a little shell magic -> [iTunes playlist Sync](#iTunes%20playlist%20Sync)

---

### Connections
- [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md)
- Android Phone (Galaxy s9)

## installation
1. `./compose.yml` via [Docker](📁developer/Home%20Lab%20🏠/Docker.md)
```yaml
version: "3.7"

services:

  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    ports:
      - 8096:8096
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Chicago
    volumes:
      - ./config:/config
      - ./cache:/cache
      - /mnt/<externalDrive>/jellyfin/media:/media:ro #:ro = read-only

# networks:
#   default:
#     external:
#       name: nginx-prox-mgmt-3_default
```

---

## iTunes playlist Sync
1. powershell script that exports iTunes playlist from **.xml** -> **.m3u**
```powershell
put_script_here
```
2. copy files over to jellyfin's media folder via [FreeFileSync](📁developer/Home%20Lab%20🏠/FreeFileSync.md). Connected through a [SAMBA](📁developer/Home%20Lab%20🏠/SAMBA.md) share
3. **Bash** script that cleans up the **.m3u** files from _absolute path_ -> _relative path_
```bash
put_script_here
```
4. Jellyfin takes care of the rest, reading the updated **.m3u** and populated media library


---
[Home Lab 🏠](📁developer/Home%20Lab%20🏠/Home%20Lab%20🏠.md)