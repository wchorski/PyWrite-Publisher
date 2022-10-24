// const { promises: fs } = require("fs")
// const fs = require("fs")
import * as fs from 'fs'
import * as path from 'path'
// import { __rootDir } from "../root-path.mjs";
// const path = require("path")
// import * as fs from 'fs';
// import * as path from 'path';


export function cleanVault(src, dest) {
  try{
    fs.mkdirSync(dest, { recursive: true });
  
  
    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);
  
      let cleanPath = cleanName(destPath)

      if(fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory()){
        cleanVault(srcPath, cleanPath)

      } else if(fs.existsSync(srcPath) && fs.lstatSync(srcPath).isFile()) {
        console.log("-- File Converted: ", srcPath);
        fs.copyFileSync(srcPath, cleanPath);
        // cleanLinks(srcPath, cleanPath); 
      }
    });

  } catch(err) {
    console.warn('*** cleanVault error: ');
    console.warn(err);
  }
        
}

// TODO could create a index.md inside each folder as it's "directory" home

// TODO do more
// allowed in URLs =>           $ – _ . + ! * ‘ ( ) , &
//! NOT allowed in URLs =>      [ ] { } | \ ” % ~ # ^ < >
// not allowed in obsidian =>   * " \/ < > : | ? # ^ [ ] | 
const space = '_.' 
// const apostrophy = '~.' 
// const ampersand = '~+~'
// const comma = '.~'
// const parenthOpen = '_'

export function cleanName(name){
  
  const cleaned =  name
  // .replaceAll( ' ', space) // space //TODO maybe bring this back if it isn't a headache
  // .replaceAll( "'", apostrophy) // apostrophy
  // .replaceAll('&', ampersand) // ampersand
  // .replaceAll(',', comma) // comma
  
  // console.log('cleanName: ', cleaned)

  return cleaned
}

export function cleanLinks(filepath, dest){
  
  try{
    const content = fs.readFileSync(filepath, 'utf8')

    const cleanedContent = content
    // .replaceAll( '%20', space) //TODO maybe bring this back if it isn't a headache
      // .replaceAll('.md', '') // remove file extension
      // .replaceAll('](myVault/', '](/vault/')
      // .replaceAll( '%27', apostrophy) 
      // .replaceAll( '%26', ampersand) 
      // .replaceAll( '%2C', comma) 
    
    fs.writeFileSync(dest, cleanedContent)
    // return cleanedContent
  
  } catch(err){
    console.log('**** cleanLinks Error *****');
    console.warn(err)
    console.log('**** cleanLinks Error END*****');
  }
}

export default cleanVault