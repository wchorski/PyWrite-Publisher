## Tips & Tricks
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