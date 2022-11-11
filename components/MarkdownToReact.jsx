import React from 'react'
import { format } from 'date-fns'
import matter from "gray-matter";

import ReactMarkdown from 'react-markdown'

import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

import Head from 'next/head'
import Link from 'next/link';
import { AiFillFolderOpen } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";
import { RiCalendar2Line } from "react-icons/ri";
import { useState, useEffect } from "react"; 
import { Layout_Markdown } from "components/Layouts";
import { TableOfContents } from 'components/TableOfContents';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark as syntaxStyle} from 'react-syntax-highlighter/dist/cjs/styles/prism' //? use cjs instead of esm modules
import { StyledMarkdownContent } from 'styles/MarkdownContent.styled';
import { BreadCrumb } from 'components/BreadCrumb';
import { CalloutBlockQuote } from 'components/CalloutBlockQuote';
import { MarkdownLink } from 'components/MarkdownLink';
import { GraphD3 } from 'components/GraphD3';
import { MarkdownImage } from 'components/MarkdownImage';

export const MarkdownToReact = ({slug, frontmatter, fileTitle, dateMod, markdown, folderChildren}) => {

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
        return <h1 id={`${anchor}`}> {container(children)} </h1>;
      case 2:
        return <h2 id={`${anchor}`}> {container(children)} </h2>;
      case 3:
        return <h3 id={`${anchor}`}> {container(children)} </h3>;
      case 4:
        return <h4 id={`${anchor}`}> {container(children)} </h4>;
      case 5:
        return <h5 id={`${anchor}`}> {container(children)} </h5>;
  
      default:
        return <h6 id={`${anchor}`}> {container(children)} </h6>;
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

  const ImageRenderer = (element) => {
    return <MarkdownImage element={element} />
  }
  

  const components = {
    // p: ImageRenderer,
    img: ImageRenderer,
    a: LinkRenderer,
    blockquote: BlockQuoteRenderer,
    h2: HeadingRenderer,
    h3: HeadingRenderer,
    h4: HeadingRenderer,
    h5: HeadingRenderer,
    h6: HeadingRenderer,
    // TODO could also process ==highlighting== here with some regex
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match 
      ? (
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
        // TODO style default block
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {


    setIsLoading(false)
  
    // return () => {
      
    // }
  }, [slug])
  
  return (<>
    <Head>
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
                  : fileTitle
                }</h1>

              </div>
              <hr className='title-bottom-line'/>

              <div className='frontmatter'>

                <small> <RiCalendar2Line /> {format(new Date(dateMod), 'yyyy LLLL, Lo')}</small>
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
              {!isLoading && (
                <div className='GraphNTable'>
                  {/* // TODO put graph back  */}
                  <GraphD3 />
                  <TableOfContents key={slug}/>
                </div>
              )}
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
                  : fileTitle
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
  </>)
}
