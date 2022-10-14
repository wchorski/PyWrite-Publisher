# nextjs-obsidian-publish
alternative to Obsidian Publish

#todo 
- [ ] `convertDirToNext.js` - // TODO do i need to clean a cleaned vault?
- [ ] is the routing all a mess? just delete everything out of `./pages/vault/*` copy `./pages/dynamic/[slug].jsx` -> `./pages/vault/[slug].jsx` and the rest will build itself on page load

> [!warning]
> as of now, I clone the entire vault as I sanatize. So be weary if your vault is large in file size as this app will double copy all files 