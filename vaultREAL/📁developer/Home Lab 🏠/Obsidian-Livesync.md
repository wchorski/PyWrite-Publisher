#github #netlify 

## [vrtmrz/obsidian-livesync (github.com)](https://github.com/vrtmrz/obsidian-livesync/)
> Self-hosted LiveSync is a community implemented  synchronization plugin.  
> A self-hosted or purchased CouchDB acts as the intermediate server. 

This is how I keep my [pywriter](../../pywriter.md) vault in sync between my **phone** and other devices. I also use it to sync up with my **Dungeon's & Dragons** vault.

---

### connections


## installation
### backend
1. spin up a [CouchDB](📁developer/Home%20Lab%20🏠/CouchDB.md) server and make it public facing via [Nginx Proxy Manager](Nginx%20Proxy%20Manager.md). **vrtmrz** also has an [all in one solution](https://github.com/vrtmrz/self-hosted-livesync-server) if your are not currently using a **Reverse Proxy**
2. `./compose.yml`
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

> [!note] I prefer a central server
> **Obsidian-livesync** only syncs when 2 client instances of Obsidian are open *(i.e. the mobile app and desktop app)*. I like to think of [vrtmrz/filesystem-livesync](https://github.com/vrtmrz/filesystem-livesync) as the #headless version of [Obsidian](📁developer/Home%20Lab%20🏠/Obsidian.md) that makes sure all the other are up-to-date

4. `git clone --recursive https://github.com/vrtmrz/filesystem-livesync `
5. `cp dat/config.sample.json dat/config.json`

`./dat/config.json`
```json
{
  "config_1": {
    "server": {
      "uri": "https://<URL>/<DATABASE_NAME>",
      "auth": {
          "username": "<COUCH_ADMIN>",
          "password": "<STRONGPASSWORD>"
      },
      "initialScan": false,
      "customChunkSize": 100
    },
    "local": {
        "path": "./dat/vault",
        "initialScan": true
    },
    "auto_reconnect": true,
    "sync_on_connect": true
  }
}
```
6. place your vault inside `./dat/vault`
your directory should look like
```
.
├─ etc, etc, etc
├─ package.json
├─ src
├─ docker
└─ __dat__
   ├─ config.json
   ├─ __vault__
   └─ ├─ first_note.md
	  └─ second_note.md
```

Notice I don't have a `.obsidian` folder in here. The [Obsidian-Livesync](📁developer/Obsidian-Livesync.md) plugin handles syncing other plugins. Then I copy over Themes and settings. 

7. This is an add from me to the [vrtmrz/filesystem-livesync](https://github.com/vrtmrz/filesystem-livesync) repo. If I can [Docker](📁developer/Home%20Lab%20🏠/Docker.md) **Compose** it, I will.
`compose.yml`
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
`docker compose up -d --remove-orphans`

---
## Setup new client (mobile, laptop, friend)
### Regex to ignore files
1. follow the plugin [obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)'s instructions
	- add URL of hosted **CouchDB** server
	- [creds](📁shower_thoughts/creds.md) should match "auth" in `config.json`
2. check the setting under the "🔁 **Sync Settings**" tab **Regular expression to ignore files**
	- I wanted to ignore 2 things: any `Untitled.md` files and anything in a `private` directory
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