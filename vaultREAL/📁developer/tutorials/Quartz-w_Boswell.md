[Publishing your Obsidian Vault Online with Quartz (brandonkboswell.com)](brandonkboswell.com))

- also try [Obsidian-Zola](%F0%9F%93%81developer/tutorials/Obsidian-Zola.md) for a more plug n play way to publish Obsidian Vaults

1. clone [jackyzha0/quartz: 🌱](https://github.com/jackyzha0/quartz)
2. create repo for your **Public Garden**
3. make **Public Garden** a submodule of your **Quartz** repo 
4. Install **Hugo** for local server
	- `brew install hugo`
5. clone [brandonkboswell/obsidian-export](https://github.com/brandonkboswell/obsidian-export/tree/title_frontmatter) in `libs` folder
	- install [Rust](https://www.rust-lang.org/tools/install)
	- `cd ./libs/obsidian-export`
	- `cargo build`
6. clone [Obsidian-Hugo](%5Bjackyzha0/hugo-obsidian)in `libs` folder
	- install [How to Install Go on Windows](https://golangdocs.com/install-go-windows)
	- add to machine `PATH`

### Directory
| app           | dir                               |
| ------------- | --------------------------------- |
| **Quartz**        | /STORAGE/quartz/dnd               |
| **Vault**         | /obsidian/vaults/dnd              |
| **hugo-obsidian** | /STORAGE/quartz/dnd/hugo-obsidian |
|               |                                   |

### Config Files
| app          | dir                              |
| ------------ | -------------------------------- |
| **Hugo**         | quartz/dnd/config.toml           |
| **Quartz**       | quartz/dnd/data/config.yaml      |
| **Quartz Graph** | quartz/dnd/data/graphConfig.yaml |
|              |                                  |
9. add `.export-ignore` into target Obsidian Vault's root
```fallback
templates/*
private/*
1-1/*
business/*
collections/*
people/*
to_publish/*
files/*
temporal/*
personal/*
screenshots/*
ideas/*
.trash/*
.obsidian/*
_content_calendar.md
```

10. Start hugo server from **Quartz** dir `./serve.sh`****
11. `./compile.sh` - easy to config variables on top of script
```fallback
#!/bin/bash

QUARTZ="/mnt/uasis5/quartz/dnd"
HUGO_OBS="/mnt/uasis5/quartz/dnd/libs/hugo-obsidian"
OBS_EXP="/mnt/uasis5/quartz/dnd/libs/obsidian-export"
VAULT="/mnt/uasis5/obsidian/vaults/DnD"

cd $HUGO_OBS;
rm -fr $QUARTZ/content/*;
rm -rf $QUARTZ/public/*;

$OBS_EXP/target/debug/obsidian-export --add-titles --frontmatter=always $VAULT $QUARTZ/content;

go run $HUGO_OBS -input=$QUARTZ/content -output=$QUARTZ/assets/indices -index -root=$QUARTZ; (cd $QUARTZ && hugo --minify)
```

12. publish to github
- `cd ./quartz/public`
- `git add.`
- `git commit -m 'new update'`
- `git push origin`
