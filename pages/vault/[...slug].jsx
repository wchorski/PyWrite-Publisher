const process = require('process');
const __basedir = process.cwd();
import fs from 'fs'
const { resolve, join } = require('path');
const { readdir } = require('fs').promises;
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Head from 'next/head'
import Link from "next/link";
import { useState, useEffect } from "react"; 
import { Layout_Markdown } from "components/Layouts";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark as syntaxStyle} from 'react-syntax-highlighter/dist/cjs/styles/prism' //? use cjs instead of esm modules

const Post = ( {slug, frontmatter, fileTitle, markdown} ) => {

  // const {title, date, desc, description} = frontmatter

  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState({})
  const [headings, setHeadings] = useState([])

  useEffect(() => {


    setContent(<ReactMarkdown 
      children={markdown} 
      remarkPlugins={[remarkGfm]} 
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={syntaxStyle}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />)

    isLoading(false)
  }, [])

  // useEffect(() => {
  //   console.log('useeffectt');

  //   setHeadings(Array.from(document.getElementsByTagName('h2')))
  //   console.log('headings', headings);
  
  //   return () => {
  //     console.log('finishedddd');
  //   }
  // }, [])
  

  return (
    <>
     <Head>
        <title> {frontmatter.title ? frontmatter.title : fileTitle} </title>
        <meta name={frontmatter.description} content="tawtaw" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <Layout_Markdown >
        <h1>{
          frontmatter.title 
          ? frontmatter.title
          : fileTitle
        }</h1>

        <div className='frontmatter'>
          <small>slug: {slug}</small> <br/>
          <small>date: {frontmatter?.date}</small> <br/>
          <small>description: {frontmatter?.description}</small> <br/>
        </div>

        <section className='content-cont'>
          {content}
        </section>
        
        <aside >
            <Link href={`/portfolio`}>
              <a> <h2>Header 2</h2> </a>
            </Link>
            <Link href={`/portfolio`}>
              <a> <h3>Header 3</h3> </a>
            </Link>
            <Link href={`/portfolio`}>
              <a> <h4>Header 4</h4> </a>
            </Link>
        </aside>

      </Layout_Markdown>
    </>
  )
}


export const getStaticPaths = async () => {

  const filePathStrings = await getFiles('./vaultClean/')
  
  const filePathArrays = filePathStrings.map(filepath => {
    const absolutePath = filepath.replace(__basedir, '').replace(/\.md$/, '') //? remove path to app, & .md extension
    const pathArray = absolutePath.split("\\").filter(Boolean)
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

  const markdown =  fs.readFileSync(join('./vaultClean/', joinedSlug + '.md'), 'utf8').toString()

  const frontM = matter(markdown);

  // TODO prettyTitle.js

  return{
    props: {
      slug: joinedSlug,
      frontmatter: frontM.data,
      fileTitle: slug[slug.length-1],
      markdown,
    }
  }
}

async function getFiles(dir) {

  const entries = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(entries.map((entry) => {

    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? getFiles(path) : path;
  }));

  return Array.prototype.concat(...files);
}


export default Post