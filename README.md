# nextjs-obsidian-publish
alternative to Obsidian Publish

#todo 
- [ ] `convertDirToNext.js` - // TODO do i need to clean a cleaned vault?
- [ ] is the routing all a mess? just delete everything out of `./pages/vault/*` copy `./pages/dynamic/[slug].jsx` -> `./pages/vault/[slug].jsx` and the rest will build itself on page load

> [!warning]
> as of now, I clone the entire vault as I sanatize. So be weary if your vault is large in file size as this app will double copy all files 


## this app's syntax 

> [!warning]
> all contents of file that match `](` are replaced with `](/vault/` as to make all links work. if anywhere you reference a `](` in your notes (or code) it will be ?yanked 

> [!warning]
> don't use links/tags in headers. It will screw up the "Table of Contents" widget

> [!warning]
> if you use **ANY** of the following character combos **ANYWHERE** in your *file > names* or *content*, then this will replace it

```js
const space = '_' 
const apostrophy = '~.' 
const ampersand = '~+~'
const comma = '.~'

const cleaned_Filenames =  name
  .replaceAll( ' ', space) // space
  .replaceAll( "'", apostrophy) // apostrophy
  .replaceAll('&', ampersand) // ampersand
  .replaceAll(',', comma) // comma

const cleanedContent = content
    .replaceAll('.md', '') // remove file extension
    .replaceAll( '%20', space) 
    .replaceAll( '%27', apostrophy) 
    .replaceAll( '%26', ampersand) 
    .replaceAll( '%2C', comma) 
```