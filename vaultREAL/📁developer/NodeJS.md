## Tips & Tricks

### get app root directory consistently - [source](https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/)
```js
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const __rootDir = __dirname //import this to use in any file
```
### Copy / Clone directory and files
- [source - KyleMit](https://stackoverflow.com/a/64255382/15579591)
```javascript
const { promises: fs } = require("fs")
const path = require("path")

async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await fs.copyFile(srcPath, destPath);
    }
}
```

- [source - Anders](https://stackoverflow.com/a/68552726/15579591)
```typescript
import { promises as fs } from "fs"
import path from "path"

export const copyDirectory = async (src: string, dest: string) => {
  const [entries] = await Promise.all([
    fs.readdir(src, { withFileTypes: true }),
    fs.mkdir(dest, { recursive: true }),
  ])

  await Promise.all(
    entries.map((entry) => {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)
      return entry.isDirectory()
        ? copyDirectory(srcPath, destPath)
        : fs.copyFile(srcPath, destPath)
    })
  )
}
```

### Error: Import statment outside module, typscript babel
[javascript - SyntaxError: Cannot use import statement outside a module - Stack Overflow](https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module)

### Recursivley read file paths in directory & return array of strings 
https://stackoverflow.com/a/45130990/15579591
```javascript
const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

// return example

// [
	// C:\\users\\you\\app\\folder\\file1
	// C:\\users\\you\\app\\folder\\file2
	// C:\\users\\you\\app\\folder2\\file1
	// C:\\users\\you\\app\\folder2\\file2
// ]
```

### run a javascript (js) module via command line
being able to to run any `js` file via a terminal inside of your [ReactJS](📁developer/Home%20Lab%20🏠/ReactJS.md) app seems simple, but requires special file naming

`serverScript.mjs` --> *notice the `.mjs` as we'll need that for the import*
```js
export function printToConsole(string) {

  console.log(string)

}
```

`runMe.mjs`
```js
import {printToConsole} from './`serverScript.mjs';

printToConsole('Hello World')
```

`node runMe.mjs` --> don't forget the file extension `.mjs` when running this node file


### Get current running operating system
```javascript
let osValue = process.platform;

if (osValue == 'darwin') {
    console.log("Mac OS");
}else if(osValue == 'win32'){
    console.log("Window OS")
}else if(osValue== 'android') {
    console.log("Android OS")
}else if(osValue== 'linux') {
    console.log("Linux OS")
}
else{
    console.log("Other os")
}
```

```javascript
import * as Os from 'os'


console.log(Os.release()); 
console.log(Os.platform()); 

// output 
// 10.0.21996
// win32
```

