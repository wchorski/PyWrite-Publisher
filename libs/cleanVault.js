// const { promises: fs } = require("fs")
const path = require("path")
const fs = require("fs")
// import * as fs from 'fs';
// import * as path from 'path';

// export async function cleanVault(src, dest) {

//   console.log('==cleanVault beginning==')

//   await fs.mkdir(dest, { recursive: true });
//   // console.log('==cleanVault await fs.mkdir(dest, ...)==')
//   let entries = await fs.readdir(src, { withFileTypes: true })
//   // console.log('==cleanVault entries==')
  
//   for (let entry of entries) {
//     // console.log("==entry==: ", entry);
//     let srcPath = path.join(src, entry.name);
//     let destPath = path.join(dest, entry.name);
    
//     let cleanPath = cleanName(destPath)

//     entry.isDirectory() 
//       ? await copyDir(srcPath, cleanPath) 
//       : await fs.copyFile(srcPath, cleanPath);
//   }
// }
export function cleanVault(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    let cleanPath = cleanName(destPath)
    
    entry.isDirectory()
      ? cleanVault(srcPath, cleanPath)
      : fs.copyFileSync(srcPath, cleanPath);
  });
}

// export const cleanVault = async (src, dest) => {

//   console.log('===== cleanvault trigger ======');
//   console.log(src);

//   const [entries] = await Promise.all([
//     fs.readdir(src, { withFileTypes: true }),
//     fs.mkdir(dest, { recursive: true }),
//   ])
  
//   console.log('===== cleanvault trigger 2 ======');
//   console.log(entries);

//   await Promise.all(
//     entries.map((entry) => {

//       console.log('===== cleanvault trigger ======');
//       console.log(entry);

//       const srcPath = path.join(src, entry.name)
//       const destPath = path.join(dest, entry.name)

//       let cleanPath = cleanName(destPath)
//       console.log(cleanPath);

//       // entry.[Symbol(type)]: 2 //FOLDER
//       // entry.[Symbol(type)]: 1 //File

//       return entry.isDirectory()
//         ? cleanVault(srcPath, cleanPath)
//         : fs.copyFile(srcPath, cleanPath)
//     })
//   )
// }


const space = '_' 
const apostrophy = '~.' 
const ampersand = '~+~'
const comma = '.~'

export function cleanName(name){
  
  const cleaned =  name
  .replaceAll( ' ', space) // space
  .replaceAll( "'", apostrophy) // apostrophy
  .replaceAll('&', ampersand) // ampersand
  .replaceAll(',', comma) // comma
  
  console.log('cleanName: ', cleaned)

  return cleaned
}

export function cleanLink(link){

  // target links after [] & inside (...)
  const cleaned = link
    .replaceAll( '%20', space) // space
    .replaceAll( "%27", apostrophy) // apostrophy
    .replaceAll('%26', ampersand) // ampersand
    .replaceAll('`%2C`', comma) // comma

  return cleaned
}

