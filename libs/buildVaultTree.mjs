import * as fs from 'fs'
import * as path from 'path'
import * as Os from 'os'


// const vaultTree = {
//   name: "vaultRoot",
//   isDir: true,
//   parentDir: null,
//   link: '/vault/',
//   children: [

//   ]
// }
const vaultTree = [

]


export function buildVaultTree(src) {

  try{
    fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
      let srcPath = path.join(src, entry.name);

      if(fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory()){
        const splitPath = (Os.platform() === 'win32') ? srcPath.split('\\') : srcPath.split('/')
        splitPath.shift(); splitPath.shift(); splitPath.unshift('/vault') //? remove '..' & 'vaultOriginal'   |   add 'vault'
        const entryPath = splitPath.slice()
        splitPath.pop() //? remove last array item (the current file || dir)
        const parentPath = splitPath

        // const currChildren = fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
        // })

        const currFolder = {
          name: entry.name,
          isDir: true,
          parentDir: src, 
          parentLink: parentPath.join('/'), 
          link: entryPath.join('/'),
        }


        vaultTree.push(currFolder)
        buildVaultTree(srcPath)

      } else if(fs.existsSync(srcPath) && fs.lstatSync(srcPath).isFile()) {
        
        const splitPath = (Os.platform() === 'win32') ? srcPath.split('\\') : srcPath.split('/')
        splitPath.shift(); splitPath.shift(); splitPath.unshift('/vault') //? remove '..' & 'vaultOriginal'   |   add 'vault'
        const entryPath = splitPath.slice()
        splitPath.pop() //? remove last array item (the current file || dir)
        const parentPath = splitPath
        

        const currFile = {
          name: entry.name,
          isDir: false,
          parentDir: src, 
          parentLink: parentPath.join('/'), 
          link: entryPath.join('/'),
          children: null
        }

        vaultTree.push(currFile)
      }
    });

    // console.log('vaultTree: ', vaultTree);
    return vaultTree

  } catch(err) {
    console.warn('*** buildVaultTree error: ');
    console.warn(err);
    console.warn('*** END');
  } 
        
}

export function unFlatten(data){

  let dataMap = {};
  data.forEach(function(node) {
    dataMap[node.link] = node;
  });
  // console.log('dataMap: ', dataMap);

  let tree = [];
  data.forEach(function(node) {
    // find parent
    var parent = dataMap[node.parentLink];
    if (parent) {
      // create child array if it doesn't exist
      (parent.children || (parent.children = []))
        // add node to parent's child array
        .push(node);
    } else {
      // parent is null or missing
      tree.push(node);
    }
  });

  // TODO build tree without one "root" folder
  const treeRoot = {
    name: "Root",
    isDir: true,
    link: '/vault',
    children: [...tree]
  }
  const jsonString = JSON.stringify(treeRoot)

  // const jsonString = JSON.stringify(tree)

  fs.writeFileSync('../public/vaultTree.json', jsonString, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
  })
}


// build something like

// const vaultTree = {
//   name: "Root",
//   isFolder: true,
//   items: [
//     {
//       name: "public",
//       isFolder: true,
//       items: [
//         {
//           name: "Data",
//           isFolder: true,
//           items: [
//             {
//               name: "folderData.js",
//               isFolder: false,
//               items: []
//             }
//           ]
//         },
//         {
//           name: "index.html",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       name: "src",
//       isFolder: true,
//       items: [
//         {
//           name: "components",
//           isFolder: true,
//           items: [
//             {
//               name: "Folder.js",
//               isFolder: false,
//               items: []
//             }
//           ]
//         },
//         {
//           name: "App.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           name: "index.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           name: "styles.css",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       name: "package.json",
//       isFolder: false,
//       items: []
//     }
//   ]
// };