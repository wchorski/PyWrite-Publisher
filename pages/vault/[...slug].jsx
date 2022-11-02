const process = require('process');
const __basedir = process.cwd();
// import { __rootDir } from "root-path.mjs";
import fs from 'fs'
const { resolve, join } = require('path');
const { readdir } = require('fs').promises;
import matter from "gray-matter";

import ReactMarkdown from 'react-markdown'
const wikiLinkPlugin = require('remark-wiki-link');
// import directive from "remark-directive";

import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

import Head from 'next/head'
import Link from 'next/link';
import { AiFillFolderOpen } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";
// import Link from "next/link";
import { useState, useEffect } from "react"; 
import { Layout_Markdown } from "components/Layouts";
import { TableOfContents } from 'components/TableOfContents';
// import { SearchFuse } from 'components/SearchFuse';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark as syntaxStyle} from 'react-syntax-highlighter/dist/cjs/styles/prism' //? use cjs instead of esm modules
import { StyledMarkdownContent } from '../../styles/MarkdownContent.styled';
import { BreadCrumb } from '../../components/BreadCrumb';
import { CalloutBlockQuote } from '../../components/CalloutBlockQuote';
import { MarkdownLink } from '../../components/MarkdownLink';

const Post = ( {slug, frontmatter, fileTitle, markdown, folderChildren} ) => {
  // console.log('*** Slug: ', slug);

  // const {title, date, desc, description} = frontmatter

  const [isLoading, setIsLoading] = useState(true)

  const HeadingRenderer = ({ level, children }) => {

    // Access actual (string) value of heading
    const heading = children[0];
  
    // If we have a heading, make it lower case
    let anchor = typeof heading === 'string' ? heading.toLowerCase() : '';
  
    // Clean anchor (replace special characters whitespaces).
    // Alternatively, use encodeURIComponent() if you don't care about
    // pretty anchor links
    anchor = anchor.replace(/[^a-zA-Z0-9 ]/g, '');
    anchor = anchor.replace(/ /g, '-');
  
    // Utility
    const container = (children) => (
      // ? don't need the link tags cuz i got a side nav
      // <a href={`#${anchor}`}>
      //   <span>{children}</span>
      // </a>
      <>{children}</>
    );
  
    // TODO check for headers with same string and incriment anchor
    switch (level) {
      case 1:
        return <h1 id={`${anchor}`}>{container(children)}</h1>;
      case 2:
        return <h2 id={`${anchor}`}>{container(children)}</h2>;
      case 3:
        return <h3 id={`${anchor}`}>{container(children)}</h3>;
  
      default:
        return <h6 id={`${anchor}`}>{container(children)}</h6>;
    }
  };

  const LinkRenderer = ({href, children}) => {
    // eslint-disable-next-line react/no-children-prop
    return <MarkdownLink href={href} children={children}/>
  }

  const BlockQuoteRenderer = ({children}) => {
    // eslint-disable-next-line react/no-children-prop
    return <CalloutBlockQuote children={children} />
  }
  

  const components = {
    a: LinkRenderer,
    blockquote: BlockQuoteRenderer,
    h2: HeadingRenderer,
    h3: HeadingRenderer,
    h4: HeadingRenderer,
    h5: HeadingRenderer,
    h6: HeadingRenderer,
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <div className="codeblock-cont">
          <span className='code-language'>{match[1]}</span>
          <SyntaxHighlighter
            // eslint-disable-next-line
            children={String(children).replace(/\n$/, '')}
            style={syntaxStyle}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        </div>
        
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }

  // TODO don't need this is not initially cleaning vault
  const cleanTitle = fileTitle.replaceAll('_.', ' ')


  useEffect(() => {


    setIsLoading(false)
  
    return () => {
      
    }
  }, [slug])
  

  return (
    <>
      <Head>
        {/*  A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children */}
        {/* <title> {frontmatter.title ? frontmatter.title  : cleanTitle} </title>  */}
        <title> Dev Garden </title>
        <meta name={frontmatter?.desc} content="tawtaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout_Markdown >

        {!folderChildren && (
          <div className='body-aside-cont'>
            <div className="markdown-body">
              <div className="header-cont">
                <h1 className='markdown-title'>{
                  frontmatter?.title 
                  ? frontmatter?.title
                  : cleanTitle
                }</h1>
              </div>
              <hr className='title-bottom-line'/>

              <div className='frontmatter'>

                <BreadCrumb slug={slug}/><br/>

                {frontmatter.title && (<>
                  <small>date: {frontmatter.date?.toString()}</small> <br/>
                  <small>desc: {frontmatter.description}</small> <br/>
                </>)}
              </div>
              
              <StyledMarkdownContent className='content-cont'>
                
                <ReactMarkdown 
                  // eslint-disable-next-line 
                  children={markdown} 
                  remarkPlugins={[remarkGfm, remarkFrontmatter]} 
                  components={components}
                />
              </StyledMarkdownContent>

            </div>

            <aside >
              {!isLoading && (<>
                <TableOfContents key={slug}/>
                </>)}
              {isLoading && (
                <p>LOADING...</p>
              )}
            </aside>
          </div>
          )}

          {/* //* if slug is a folder */}
          {folderChildren && (<>
            
            <div className="markdown-body">
              <div className="header-cont">
                <h1 className='markdown-title'>{
                  frontmatter?.title 
                  ? frontmatter?.title
                  : cleanTitle
                }</h1>
              </div>
              <hr className='title-bottom-line'/>
              
              <ul className='folder-contents'>

                {folderChildren.map((child, i) =>{
                  const url = (slug+'/'+child)
                  const regexMD = /.md/
                  let icon = ''

                  switch (regexMD.test(child)) {
                    case true:
                      icon = <TbMarkdown />
                      break;
                      
                    case false:
                      icon = <AiFillFolderOpen style={{color: "var(--c-1)"}} />
                      break;

                    default:
                      console.warn(`WHAT AM I?.`);
                  }

                  return(
                    <li key={i}>
                      {icon}
                      <Link href={url}>
                        <a> 
                          {child} 
                        </a>
                      </Link> 
                    </li>
                  )
                })}
              </ul>
            </div>
          </>)}

      </Layout_Markdown>
    </>
  )
}


// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BACKEND +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getStaticPaths = async () => {

  
  const filePathStrings = await getFiles('./vaultClean/')
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
    const markdown =  fs.readFileSync(join('./vaultClean/', joinedSlug), 'utf8').toString()
    const frontM = matter(markdown);

    return{
      props: {
        slug: joinedSlug,
        frontmatter: frontM.data,
        fileTitle: slug[slug.length-1],
        markdown,
      }
    }

  } catch (err) {
    // if not an .md file it means it's a FOLDER 
    const folderChildren = []
    fs.readdirSync(join('./vaultClean/', joinedSlug), { withFileTypes: true }).forEach((entry) => {

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