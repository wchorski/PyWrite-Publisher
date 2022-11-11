const process = require('process');
// const __basedir = process.cwd();
import fs from 'fs'
// const { resolve, join } = require('path');
// const { readdir } = require('fs').promises;
import matter from "gray-matter";
import { MarkdownToReact } from 'components/MarkdownToReact';

const Vault = (props) => {


  return (
    <>
      <MarkdownToReact {...props}/>
    </>
  )
}

// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getStaticProps = async () => {


  try { 
    // check to see if .md file exists
    const mtime = fs.statSync('./MarkdownVault/index.md', 'utf8').mtime.toString()
    const markdown =  fs.readFileSync('./MarkdownVault/index.md', 'utf8').toString()
    const frontM = matter(markdown);

    return{
      props: {
        slug: 'index.md',
        frontmatter: frontM.data,
        fileTitle: 'index.md',
        dateMod: mtime,
        markdown,
      }
    }

  } catch (err) {

    console.warn('*** vault.jsx err, ', err); 
 
    return{
      props: {
        slug: '/index.md',
        frontmatter: {title: "Create an index.md", date: "yo that my homie"},
        fileTitle: 'index.md',
        dateMod: '1999-01-01',
        markdown: 'no index.md file exists in the root vault folder',
      }
    }
  }
}

export default Vault