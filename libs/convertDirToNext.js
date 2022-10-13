const { promises: fs } = require("fs")
const path = require("path")
import { cloneAFile } from "./clonefile";

const contentDynamic = 'pages/dynamic/[[...slug]].jsx'

export async function copyDir(src, dest) {

  await fs.mkdir(dest, { recursive: true });
  let entries = await fs.readdir(src, { withFileTypes: true });
  
  for (const entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);
    
    if(entry.isDirectory()){
      
      // TODO do i need to clean a cleaned vault?
      let cleanPath = destPath.replaceAll( ' ', '_')

      await copyDir(srcPath, cleanPath)
      cloneAFile(contentDynamic, `${cleanPath}/[[...slug]].jsx`)
      
    } else {
      null;
    }
  }
}
