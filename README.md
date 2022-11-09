# nextjs-obsidian-publish
alternative to Obsidian Publish

codename: Obsidian Pywrite 

## 🎁 Features

## 🏭 Production Setup
0. copy any notes into `./vaultOriginal`
0. run `node ./libs/cleanMyVault.mjs`
0. `npm run build`


## Markdown Tips
```md
create unique headers per page.
### Dogs 
### Cats ✔

Do not repeate same header on the same page
### Fish 
### Fish 🚫 

even if it's a smaller header
### Birds 
#### Birds 🚫 
```

```md
do NOT use links in headers
## Clean Header ✔
## [bad header](https://www.windows93.net/) 👎
```


#todo 
- [ ]

> [!warning]
> as of now, I clone the entire vault as I sanatize. So be weary if your vault is large in file size as this app will double copy all files 


## this app's syntax 
> [!warning]
> all contents of file that match `](` are replaced with `](/vault/` as to make all links work. if anywhere you reference a `](` in your notes (or code) it will be yanked 

> [!warning]
> don't use **links/tags** in headers. It will screw up the "Table of Contents" widget