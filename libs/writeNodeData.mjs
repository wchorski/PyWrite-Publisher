import * as fs from 'fs'
// import { __rootDir } from "../root-path.mjs";

export function writeNodeJSON(json){

  let nodeArray = []
  
  try{
    json.forEach(data => {
      const friendsArray = (data.internalLinks) ? (data.internalLinks).filter((item) => item !== null) : []
      const sanitizedFriends = friendsArray.map(friend => {
        const sanatized = friend.replaceAll('%20', ' ')
        return sanatized
      })

      const nameNoExtension = data.name.replace(/\.md$/, '')
  
      nodeArray.push({
        id: data.link,
        name: nameNoExtension,
        friends: sanitizedFriends
      })
    })
  
    fs.writeFileSync('public/nodeData.json', JSON.stringify(nodeArray), 'utf8', function (err) {
      if (err) return console.warn("An error occured while writing nodeData.json Object to File. ", err);
      console.log("nodeData.json file has been saved.");
    })

  } catch(err) {
    console.warn('nodeProc: ', err);
  }
}