// import * as fs from 'fs';
const { promises: fs } = require("fs")
import { cloneAFile } from "./clonefile";
const path = require("path")

const contentDynamic = 'pages/vault/[slug].jsx'

export async function copyDir(src, dest) {

  await fs.mkdir(dest, { recursive: true });
  let entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if(entry.isDirectory()){
      
      let cleanPath = destPath.replaceAll( ' ', '_')

      await copyDir(srcPath, cleanPath)
      cloneAFile(contentDynamic, `${cleanPath}/[slug].jsx`)
      
    } else {
      null;
    }
  }
}
