# nextjs-obsidian-publish
alternative to Obsidian Publish

codename: *Obsidian.md Pyrite Publisher*

## 🎁 Features
0. interactive node graph
0. callout quote blocks
0. markdown links (no support for wiki links)
0. file tree navigation
0. interactive table of contents
0. markdown images (external and internally hosted)

## 🏭 Production Setup
1. copy any notes into `./MarkdownVault/`

```shell
./MarkdownVault/
  - index.md
  - file1.md
  - file2.md
  * folderA/
    - fileA1.md
    - fileA2.md
```

2. (optional) include a `./MarkdownVault/index.md` that acts as the glossery of your notes
3. run `node ./libs/init.mjs`
4. `npm run build`


## 👇 Markdown Tips 
```md
create unique headers per page.
### Dogs 
### Cats ✔

Do not repeate same header on the same page
### Fish 
### Fish ❌ 

even if it's a smaller header
### Birds 
#### Birds ❌
```
> [!warning]
> don't use **links/tags** in headers. It will screw up the "Table of Contents" widget

```md
do NOT use links in headers

## Clean Header ✔
## [bad header](https://www.windows93.net/) ❌
```

>[!warning] all attachments in `./MarkdownVault/_attachments` will all be publicly viewable

```md
keep all attacments in `./MarkdownVault/_attachments/` directory

./MarkdownVault/_attachments/camel.jpg ✔
./MarkdownVault/_attachments/reptiles/lizard.jpg ❌
```

## 🌠 Wishlist 
- [ ] better functioning graph with Pixi.js
- [ ] interactive tag system
