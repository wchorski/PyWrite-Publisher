import * as fs from 'fs'
import * as path from 'path'


export function moveAttachments(sourceDir, targetDir){

  try {
    fs.readdirSync(sourceDir, { withFileTypes: true }).forEach(entry => {
      let srcPath = path.join(sourceDir, entry.name);
  
      if(fs.existsSync(sourceDir) && fs.lstatSync(srcPath).isFile()) {
  
        const trgPath = srcPath.replace('..\\MarkdownVault\\_attachments', targetDir)

        fs.rename(srcPath, trgPath, err => {
          if (err) { console.warn(err); }

          else { console.log(`Moved ${sourceDir} to ${targetDir}`); }

        });

      }
    })
  } catch(err) {
    console.warn(err);
  } 
}