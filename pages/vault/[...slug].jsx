const process = require('process');
const __basedir = process.cwd();
import fs from 'fs'
const { resolve, join } = require('path');
const { readdir } = require('fs').promises;
import matter from "gray-matter";
import { MarkdownToReact } from '../../components/MarkdownToReact';

const Post = ( {slug, frontmatter, fileTitle, dateMod, markdown, folderChildren} ) => {

  return (
    <>
      <MarkdownToReact 
        slug={slug}
        frontmatter={frontmatter}
        fileTitle={fileTitle} 
        dateMod={dateMod} 
        markdown={markdown} 
        folderChildren={folderChildren
      }/>
    </>
  )
}


// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getStaticPaths = async () => {

  
  const filePathStrings = await getFiles('./MarkdownVault/')
  // console.log('-- filePathStrings: ', filePathStrings);
  
  const filePathArrays = filePathStrings.map(filepath => {
    const absolutePath = filepath.replace(__basedir, '') //? remove path to app, & .md extension
    const pathArray = process.platform === 'win32' ? absolutePath.split("\\").filter(Boolean) : absolutePath.split("/").filter(Boolean) //? if winodows split with back slashes everything else is forward slash
    pathArray.shift() //? SHIFT = remove vault folder so catch all route can read path correctly
    return pathArray 
  })
  
  // console.log('+++ filePathArrays: ', filePathArrays );

  const paths = filePathArrays.map(pathArray => ({
    params: {
      slug: pathArray
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const joinedSlug = slug.join("/") 

  try { 
    // check to see if .md file exists
    const mtime = fs.statSync(join('./MarkdownVault/', joinedSlug), 'utf8').mtime.toString();
    const markdown =  fs.readFileSync(join('./MarkdownVault/', joinedSlug), 'utf8').toString()
    const frontM = matter(markdown);

    return{
      props: {
        slug: joinedSlug,
        frontmatter: frontM.data,
        fileTitle: slug[slug.length-1],
        dateMod: mtime,
        markdown,
      }
    }

  } catch (err) {
    // if not an .md file it means it's a FOLDER 
    const folderChildren = []
    fs.readdirSync(join('./MarkdownVault/', joinedSlug), { withFileTypes: true }).forEach((entry) => {

      folderChildren.push(entry.name)

    })

    return{
      props: {
        slug: joinedSlug,
        fileTitle: slug[slug.length-1],
        folderChildren
      }
    }
    
  }
  

}

async function getFiles(dir) {
  
  const entries = await readdir(dir, { withFileTypes: true });

  const folders = []
  
  const files = await Promise.all(entries.map((entry) => {
    
    const path = resolve(dir, entry.name);

    if(fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
      folders.push(path)
      return getFiles(path)
  
    } else if(fs.existsSync(path) && fs.lstatSync(path).isFile()) {

      return path
    }

    // return entry.isDirectory() ? getFiles(path) : path;
  }));

  return Array.prototype.concat(...files, ...folders);
}


export default Post