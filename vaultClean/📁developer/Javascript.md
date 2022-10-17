Here are my little tidbits and rants about my love hate relationship with **JS** 

## Es6

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