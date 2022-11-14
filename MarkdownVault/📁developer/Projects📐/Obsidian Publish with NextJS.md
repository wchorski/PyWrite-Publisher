codename: **Obsidian Pywrite**

## Features
- create a statically generated site with [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md), and pump in my [Obsidian.md](📁developer/Home%20Lab%20🏠/Obsidian.md.md) vault as the content. 
- convert [Markdown](📁developer/Markdown.md) into html via [remarkjs/remark-html](https://github.com/remarkjs/remark-html) or [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown) [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md)

### syntax highlighting style themes
[react-syntax-highlighter/AVAILABLE_STYLES_PRISM.MD at master · react-syntax-highlighter/react-syntax-highlighter (github.com)](github.com)))

#todo 
- [ ] ==FEATURE== put .md files in a 'data-base' that's fetched by nextjs. create .env variable that points to location. if route doesn't exist, take from `./vault` folder
- [x] ==BUG== = Headers with same name breaks **Table of Contents** (i.e. Dark Room White Tunnel.md)
	- [x] if headername exists? increment a key number onto next one. Can fix with Math.Random() but Should force user to make unique header names
- [x] ==BUG== search query disappears before able to click on link
- [x] ==BUG== -> on build, `Table of Contents` does not update when parent `[..slug].jsx` changes
- [x] ==BUG== -> `tableofcontents.jsx` incorrectly nests some headers (i believe it's when lilttle content is below a header)
- [x] ==BUG== = External links get app route appended to it
	- [x] if start of link starts with "http" do not clean
- [ ] ==feature== Fuse.js bold found search matches  in excerpt searchQuery - [Fuse.js with highlight (github.com)](https://gist.github.com/evenfrost/1ba123656ded32fb7a0cd4651efd4db0)
- [x] ==style== : table style
- [x] ==style== : keep middle column static width
- [x] ==style== : checkboxes also show list 
- [x] ==style== : convert and style all callout quotes
	- [x] fix "not array null" by skipping if not array
- [ ] ==style== : mask on top above header bg color so it looks like rocky yellow rocks coming out of bottom border
- [x] ==style== : fade out scrollbar after time. reveal  while scrolling or hover
- [ ] ==style== html highlight text inside "==text==" [How to Highlight text in Html - javatpoint](https://www.javatpoint.com/how-to-highlight-text-in-html#:~:text=1%20Step%201%3A%20Firstly%2C%20we%20have%20to%20type,which%20we%20want%20to%20highlight.%20...%20More%20items) 
- [x] ==style== : cross out on checked boxes `task-list-item` 
- [x] ==feature== - clickable slug breadcrumbs for easy backwards navigation
- [x] ==feature== - searchable field, use Fuse.js
- [ ] ==feature== - mermaid integration
- [ ] ==feature== - callouts collapsible
- [ ] ==feature== - callouts single line no content 
- [ ] ==feature== - copy all contents in codeblock single click
- [ ] ==feature== make tags clickable links
- [ ] ==feature== graph
	- [x] strait from Obsidian.md dev "We use `d3-force` for force simulation, and `PixiJS` for actually rendering the graph."
	- [x]  tech that native Obsidian.md uses [Network Graph | D3js](https://d3-graph-gallery.com/network.html)
	- [x] tech that Mind Stone uses [Cytoscape.js](https://cytoscape.org/cytoscape.js-tutorial-demo/) 
	- [x] display nodes routes to internal links
	- [x] clickable nodes take to page
	- [x] hover, highlight friend nodes too
	- [x] zoom pan canvas 
	- [x] make sticky with **ABOVE** table of contents
	- [ ] full screen graph
	- [ ] try building with Pixi.js
- [x] ==feature== site search
	- [x] zola uses - elastilunr.js
	- [x] could use typesense, but need to run separate server
	- [x] [Fuse.js](https://fusejs.io/) [video tut]([How to Add Search to a React App with Fuse.js - YouTube](https://www.youtube.com/watch?v=GZl-yEz4_qw))
- [ ] home page
	- [x] recently added notes carousel
	- [ ] ==style== front page with growing sprout garden. flowers are clickable graph view?
- [x] folders have their own page that shows all internal link structure
	- [x] make it obvious what's a folder and what's a file
- [x] Covert **Markdown** to show in NextJS
- [x] import and use frontmatter optionally 
- [x](daveceddia.com))
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
- [x] automate menu nav to match ./pages directory 
- [x] ==create `aside` with page heading shortcuts==
	- [x] gather all heading tags after hydration (use `isLoading` for react-markdown)
	- [x] build out  smooth scrolling sticky `aside` list 
	- [x] link that connects current route `/vault/MarkdownPage` with `#TheHeading`\
	- [x] highlight active heading anchor
- [x] append `<h1>` of pretty filename to top of any file that doesn't have `title:` metadata 
- [x] use rsync to copy over vault
- [x] pretty up any **slug** (exp: change 'space' to underscore, '&' to 'and', etc) (possibly do this after file has been found, then pretty the URL for user. sounds dangerous tho)
- [x] emoji's work in URL thank god
- [x] shortcut `/` that focus search bar
- [x] drop a `index.jsx` in root of any `./vault` directory with a spread of links to child files
- [ ] create a loading animation
- [x] can i fix dynamic routing with `./pages/[...folder]/[...slug]`? - NO, CATCH ALLs CAN ONLY BE AT END
- [x] does grabbing images work?
- [ ] load images with `nextjs/image`
- [x] fix list indentation when words wrap in Table of Contents
- [x] pretty css on tables
- [x] show language used in codeblock
- [x] do i need to even remove '.md' for NextJS routing? yeah i can leave on .md
- [ ] tags
	- [ ] [[Solved] Regex to find words that start with a specific | 9to5Answer](https://9to5answer.com/regex-to-find-words-that-start-with-a-specific-character)
	- [ ] strip tags out of .md
	- [ ] put them in <a> tags in the sidebar 

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

## how do I set up git & vercel for multiple vaults?
1. use git branches to push different vaults?
2. self host markdown files to be fetched via NextJS 
3. can i merge updates from master branch / master fork? ✅