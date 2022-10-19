Create a statically generated site with [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md), and pump in my [Obsidian](📁developer/Home%20Lab%20🏠/Obsidian.md) vault as the content. 
- convert [Markdown](📁developer/Markdown.md) into html via [remarkjs/remark-html](https://github.com/remarkjs/remark-html) or [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)

### syntax highlighting styles
[react-syntax-highlighter/AVAILABLE_STYLES_PRISM.MD at master · react-syntax-highlighter/react-syntax-highlighter (github.com)](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD)

#todo 
- [x] Covert **Markdown** to show in NextJS
- [x] import and use frontmatter optionally 
- [x] [React Hook to Run Code After Render (daveceddia.com)](https://daveceddia.com/react-hook-after-render/)
- [x] Dynamically create pages based on .md Files
- [x] drill down the **Vault's** directory to retain Obsidian's file structure in NextJS's routing
	- [x] use node to copy directory structure from `./vault` -> `./pages`
	- [x] drop a `[slug].jsx` file in the base of each directory
		- [ ] figure out why this isn't working **async**
- [x] each `[slug].jsx` check's it's own absolute path, then looks in vault 
- [x] ==clean links== could be better
	- [x] during **remark** conversion. remove `.md` from any `<a>` tags so links work correctly 
	- [x] spaces ` ` = `%20`
	- [x] apostrophes `'` = `%27`
	- [x] ampersand `&` = `%26`
	- [x] comma `,` = `%2C`
	- [x] only sanatize inside `( ... )` using regex
	- [x] add `/vault/` in front of every link to make it absolute for NextJS routing
- [ ] automate menu nav to match ./pages directory 
- [ ] ==create `aside` with page heading shortcuts==
	- [x] gather all heading tags after hydration (use `isLoading` for react-markdown)
	- [x] build out  smooth scrolling sticky `aside` list 
	- [x] link that connects current route `/vault/MarkdownPage` with `#TheHeading`\
	- [x] highlight active heading anchor
- [x] append `<h1>` of pretty filename to top of any file that doesn't have `title:` metadata 
- [ ] use rsync to copy over vault
- [ ] use **chokedar** to watch and update app's vault 
- [x] pretty up any **slug** (exp: change 'space' to underscore, '&' to 'and', etc) (possibly do this after file has been found, then pretty the URL for user. sounds dangerous tho)
- [x] emoji's work in URL thank god
- [x] absolute links - [Next.js Absolute Imports and Aliases (ahmadawais.com)](https://ahmadawais.com/next-js-absolute-imports-aliases/#:~:text=Next.js%20Absolute%20Imports%20%23%20Basically%20you%20only%20need,via%20jsconfig.json%20%28JS%20projects%29%20or%20tsconfig.json%20%28TS%20projects%29.)
- [ ] search bar with autocomplete 
- [ ] shortcut `/` that focus search bar
- [ ] delete / remove files folders when not building from scratch
- [ ] drop a `index.jsx` in root of any `./vault` directory with a spread of links to child files
- [ ] create a loading animation
- [x] can i fix dynamic routing with `./pages/[...folder]/[...slug]`? - NO, CATCH ALLs CAN ONLY BE AT END
- [ ] make tags clickable links
- [ ] primitive sanataion of 


## Other Tutorials 
- copy folders / files with node - [stackoverflow](https://stackoverflow.com/a/64255382/15579591)
- auto gen menu off of ./pages - [reactjs - How to generate a menu based on the files in the pages directory in Next.js - Stack Overflow](https://stackoverflow.com/questions/63692392/how-to-generate-a-menu-based-on-the-files-in-the-pages-directory-in-next-js)
- *Video Tut* [Next.js static blog with Markdown and React.js TypeScript - YouTube](https://www.youtube.com/watch?v=vdW1VStKUUU)
- *Legacy* [How to use the Remark Markdown converters with Next.js projects - DEV Community 👩‍💻👨‍💻](https://dev.to/jameswallis/how-to-use-the-remark-markdown-converters-with-next-js-projects-a8a)
- single directory deep markdown to nextJS - [Static Blog With Next.js and Markdown - YouTube](https://www.youtube.com/watch?v=MrjeefD8sac&t=2055s) 

## Trial & Tribulations
1. converting markdown to NextJS is pretty easy with **remarkjs**
2. copying the folder structure from ./vault to ./pages was fairly simple with the help of **stackoverflow**
3. cloning a `[slug].jsx` was a nightmare as something to do with Node's *async fs.writefile* wasn't writing and didn't show errors, so I made a seprate file to clone a file and that works for some reason  
4. characters allowed in URLs`ALPHA  DIGIT  "-" / "." / "_" / "~"` 
5. dynamically getting vault filepaths with `fs` and `path` while also  splitting the url into an Array  so the Catch All `[...slug].jsx` can read it
6. render heading tags with anchors dynamically - https://github.com/remarkjs/react-markdown/issues/358#issuecomment-782917944 -> [eegil](https://github.com/eegli)

---

## Setup for new users
1. don't forget this file. sometimes it doesn't copy over -> `./pages/vault/[slug].jsx`

## just messin
[Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md)
[2022.10.28 Teresa & Thomas](📁music/DJ_William🎛/2022.10.28%20Teresa%20&%20Thomas.md)