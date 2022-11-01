import React from 'react'

export const MarkdownLink = ({href, children}) => {
  // console.log(href);
  if(!children) return <strike>broken link</strike>

  const trueLink = ((/^http/).test(href))
    ? href
    : '/vault/' + href 

  return  <a href={trueLink}>{children[0]}</a>
}
