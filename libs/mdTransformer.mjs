const unified = require('unified')
const wikiLinkPlugin = require('remark-wiki-link');



export function transform(){
  let processor = unified().use(wikiLinkPlugin)
  
  console.log('processor: ', processor);

}