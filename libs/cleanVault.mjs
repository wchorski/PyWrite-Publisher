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
        console.log("File to Convert: ", srcPath);
        fs.copyFileSync(srcPath, cleanPath);
        cleanLinks(srcPath, cleanPath); 
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
const space = '__' 
// const apostrophy = '~.' 
// const ampersand = '~+~'
// const comma = '.~'
// const parenthOpen = '_'

export function cleanName(name){
  
  const cleaned =  name
  .replaceAll( ' ', space) // space
  // .replaceAll( "'", apostrophy) // apostrophy
  // .replaceAll('&', ampersand) // ampersand
  // .replaceAll(',', comma) // comma
  
  // console.log('cleanName: ', cleaned)

  return cleaned
}

export function cleanLinks(filepath, dest){

  // console.log("== dest: ", dest);
  
  // const fakeFile = 'C:\\Users\\wchorski\\vscode\\nextjs-obsidian-publish\\vaultOriginal\\private\\linkpage.md'
  // const regExp = /\]\(([^)]+)\)/g; //? find anything inside ]( ... )
  // const regExp = /\(([^)]+)\)/g; //? find anything inside ( ... )

  // const content = fs.readFileSync(filepath, 'utf8')
  // console.log(content);
  // const matches = regExp.exec(content)
  // console.log(matches[0]);
  
  // TODO reverse fs.readFileSync with fs.copyFileSync
  // find any string inside ( ... )
  // loop through found array and cleanLink()
  // return file ocntents as new to 'cleanpath'
  
  try{
    const content = fs.readFileSync(filepath, 'utf8')

    const cleanedContent = content
      // .replaceAll('.md', '') // remove file extension
      .replaceAll( '%20', space) 
      .replaceAll('](', '](/vault/')
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