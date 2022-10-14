import { remark } from 'remark';
import html from 'remark-html';
import * as fs from 'fs';
import * as path from 'path';
import matter from "gray-matter";

// TODO this needs to be a dynamic 'absolute path' matching
const vaultDir = "./vaultClean"

export function getAllSlugs() {

  console.log('getAllslugs');
  const fileNames = fs.readdirSync(vaultDir);

  // ----------------------------------------------
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ] ----------------------------------------------
  
  return fileNames.map((fileName) => {

    const prettyName = fileName.replace(/\.md$/, '')

    return {
      params: {
        slug: prettyName ,
        path: '/this/is/the/path'
      },
    };
  });
}

export async function getSlugData(slug) {

  // log params
  console.log(slug);

  // const fullPath = path.join(vaultDir, `${slug}.md`);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // TODO strip out spaces in any link tags

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // // Combine the data with the id and contentHtml
  // return {
  //   slug,
  //   contentHtml,
  //   ...matterResult.data,
  // };
}