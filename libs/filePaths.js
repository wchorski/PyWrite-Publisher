// import * as fs from 'fs';
// const { promises: fs } = require("fs");
const { readdir } = require('fs/promises');
import * as path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from "gray-matter";

const vaultDir = "./vaultClean/"


export async function getAllFilepaths(path = vaultDir) {
  const entries = await readdir(path, { withFileTypes: true });

  // Get files within the current directory and add a path key to the file objects
  const files = entries
    .filter(entry => !entry.isDirectory())
    .map(file => ({ ...file, path: path + file.name }));

  // Get folders within the current directory
  const folders = entries.filter(entry => entry.isDirectory());

  for (const folder of folders){
    /*
      Add the found files within the subdirectory to the files array by calling the
      current function itself
    */
    files.push(...await getAllFilepaths(`${path}${folder.name}/`));
  }


  // return files.map(file => {
  //   const mdPathArray = file.path.replace(vaultDir, '').replace(/\.md$/, '').split("/")

  //   // console.log(mdPathArray);

  //   return {
  //     params: {
  //       filepath: mdPathArray // get the rest of path
  //     },
  //   };
  // })

  return files; //this prints out correctly

}

export async function getMarkdownData(thePath) {

  // log params
  console.log(slug);

  const fullPath = path.join(vaultDir, `${thePath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // TODO strip out spaces in any link tags

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
