Here are my little tidbits and rants about my love hate relationship with **JS** 

## Es6

### get all header tags on a page and display - [](/vault/https://softauthor.com/get-element-by-tag-name-in-javascript/#:~:text=Get__Element__(s)__By__Tag__Name__In__JavaScript,Get__Element__(s)__By__Tag__Name__From__Parent)
```html
<div>div <br>box 1</div>
<div>div <br>box 2</div>
<div>div <br>box 3</div>
<span>span <br>box 4</span>
<span>span <br>box 5</span>
```

Let’s get only the **span** elements.
```javascript
const spanBoxes = document.getElementsByTagName("span");
console.log(spanBoxes); // HTMLCollection[2]
```


## Trials & Tribulations
### For loop finishing at first Array Item
- I was writing a `for` loop and it was not going through all the entries in the **array**
```js
import { cloneAFile } from "./clonefile";

let entries = [1, 2, 3, 4]

for (const entry of entries) {

	console.log(entry)

	cloneAFile('file.txt', `newPath/file.txt`)

}
```
- This was returning only the first `entry` and then ending. BUT there was no error. Turns out I **commented out** all contents inside my external `clonefile` script. 