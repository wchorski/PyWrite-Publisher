#github #netlify 

## [vrtmrz/obsidian-livesync (github.com)](https://github.com/vrtmrz/obsidian-livesync/)
Self-hosted LiveSync is a community implemented synchronization plugin.  
A self-hosted or purchased CouchDB acts as the intermediate server. Available on every obsidian-compatible platform.

This is how I keep my [pywriter](../../pywriter.md) vault in sync between my **phone** and other devices. I also use it to sync up with my **Dungeon's & Dragons** vault.

---

### connections


### installation
1. download plugin through the community plugins tab in [Obsidian](📁developer/Home%20Lab%20🏠/Obsidian.md)
2. spin up a **CouchDB** server and make it public facing via [Nginx Proxy Manager](Nginx%20Proxy%20Manager.md)
4. `./compose.yml`
```yaml
version: "3.7"

services:

  obsidianDB_dnd:
    image: couchdb:3.1.2
    restart: always
    ports:
      - "5984:5984"
    networks:
      - nginx-prox-mgmt-3_default
    environment:
      - COUCHDB_USER=<ADMIN_USER>
      - COUCHDB_PASSWORD=<STRONG_PASSWORD>
    volumes:
      - /mnt/<EXTERNAL_DRIVE>/obsidian-livesync-data/vault1:/opt/couchdb/data
      - ./local.ini:/opt/couchdb/etc/local.ini

networks:
  nginx-prox-mgmt-3_default:
    external: true
```

3. `./local.ini`
```ini
[couchdb]
single_node=true

[chttpd]
require_valid_user = true

[chttpd_auth]
require_valid_user = true
authentication_redirect = /e=_/_utils/session.html

[httpd]
WWW-Authenticate = Basic realm="couchdb"
enable_cors = true

[cors]
origins = app://obsidian.md,capacitor://localhost,http://localhost
credentials = true
headers = accept, authorization, content-type, origin, referer
methods = GET, PUT, POST, HEAD, DELETE
max_age = 3600
```

> [!note] central server
> Obsidian-livesync only syncs when 2 instances of Obsidian are open (i.e. the mobile app and desktop app). I wanted the convenience of **central server** that is always is always receiving and delivering updates even if other clients are closed with [vrtmrz/filesystem-livesync (github.com)](https://github.com/vrtmrz/filesystem-livesync)
> 

4. `git clone --recursive https://github.com/vrtmrz/filesystem-livesync `
5. `cp dat/config.sample.json dat/config.json`
6. `compose.yml`
```yaml
version: "3.7"

services:

  server:
    image: filesystem-livesync:latest
    build: ./docker/Dockerfile
    restart: always
    environment:
      - CHOKIDAR_USEPOLLING=1
    volumes:
      - ./dat:/data
```

---
## Regex to ignore files
- check the setting under the "🔁 **Sync Settings**" tab **Regular expression to ignore files**
	- I wanted to ignore 2 things: any `Untitled.md` files and anything in a `private ` directory
	- regex copy pasta: `Untitled.*\.md$|private`
``


## Setup my DnD-Live vault
1. start a new vault folder `dnd-live`
2. Core Options
	1. "Editor"
		- Spellcheck - on
	2. "File & Links" 
		- Default location for new notes - `same folder as current file`
		- New link format - `Absolute path in vault` 
		- Default location for new attachments - `In subfolder under current folder` 
		- Subfolder name - `_attachments`
	3. "Appearance"
		- CSS snippets - turn on first one
	4. copy / replace files from `.obsidian`
		- `appearance.json`
		- `core-plugins.json`
		- `graph.json`
		- `hotkeys.json`
		- `templates.json`
1. download `obsidian-livesync` from **Community Plugins**
2. follow [Regex to ignore files](#Regex%20to%20ignore%20files) to ignore correct files / folders also `|📁 Dungeon Master`
3. **🛰 Remote Database** tab
	1. URI `https://dungeon-db.williamusic.com/dnd-live`
	2. Username: `admin_dnd`
	3. Password: `***`
	4. Database name: `dnd-live`
	5. Test Database Connection
4. **🔧 Miscellaneous**
	1. Presets - Livesync - click <button>Apply</button>
5. Add `.obsidian` plugins and configurations
	1. copy from `cloutdrive` link

---
## backlinks
[Home Lab 🏠](Home%20Lab%20🏠.md)

#todo 
- [ ] add code here