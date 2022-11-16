import React from 'react'
import { TiPencil, TiInfoLarge } from "react-icons/ti";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TbZoomQuestion } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { CgAbstract } from "react-icons/cg";
import { MdTipsAndUpdates, MdOutlineLiveHelp } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { StyledCallout } from 'styles/CalloutBlockquote.styled'
import { MarkdownLink } from './MarkdownLink';

export const CalloutBlockQuote = ({children}) => {
  // console.log('callout: ', children[1].props.children);
  // let contentArray = []
  const contentArray = children[1].props.children.map(child => {

    if(typeof child === 'string') {
      const regex = /(?<=\[).*(?=\])/
      const type = child.match(regex)

      if(type !== null) return child.replace(`[${type[0]}]`, '')
      return child
    }

    if(child.props.href){
      // eslint-disable-next-line react/no-children-prop, react/jsx-key
      return <MarkdownLink href={child.props.href} children={child.props.children} key={child.props.href}/>
    }
  })

  // console.log('contentArray: ', contentArray);

  const quote = children[1].props.children[0]
  // const quote = contentArray[0]
  const regex = /(?<=\[).*(?=\])/
  const type = quote.match(regex)

  // contentArray.shift()
  // quote.replace(`[${type[0]}]`, '')
  // contentArray.unshift(quote)
  // console.log(contentArray);

  let params = {
    type: "",
    icon: '',
    color: "rgb(181, 206, 0)",
    color2: "rgba(182, 206, 0, 0.247)",
    content: contentArray,
  }

  if(type){
    switch (type[0]) {
      case '!TIP':
        params = {
          type: 'TIP',
          icon: <MdTipsAndUpdates />,
          color: 'rgb(0, 191, 165)',
          color2: 'rgba(0, 191, 166, 0.185)',
          content: contentArray
        }
        break;

      case '!success':
        params = {
          type: 'Success',
          icon: <GrStatusGood />,
          color: 'rgb(70, 255, 98)',
          color2: 'rgba(70, 255, 98, 0.158)',
          content: contentArray
        }
        break;

      case '!todo':
        params = {
          type: 'Todo',
          icon: <BsListCheck />,
          color: '#29bf00',
          color2: '#29bf002d',
          content: contentArray
        }
        break;

      case '!abstract':
        params = {
          type: 'abstract',
          icon: <CgAbstract />,
          color: 'rgb(0, 191, 165)',
          color2: 'rgba(0, 191, 166, 0.164)',
          content: contentArray
        }
        break;
        
      case '!info':
        params = {
          type: 'info',
          icon: <TiInfoLarge />,
          color: 'rgb(0, 191, 166)',
          color2: 'rgba(0, 191, 166, 0.144)',
          content: contentArray
        }
        break;

      case '!note':
        params = {
          type: 'note',
          icon: <TiPencil />,
          color: 'rgb(0, 191, 165)',
          color2: 'rgba(0, 191, 166, 0.158)',
          content: contentArray
        }
        break;

      case '!FAQ':
        params = {
          type: 'FAQ',
          icon: <MdOutlineLiveHelp />,
          color: 'rgb(174, 123, 240)',
          color2: 'rgba(83, 0, 191, 0.185)',
          content: contentArray
        }
        break;

      case '!question':
        params = {
          type: 'question',
          icon: <TbZoomQuestion />,
          color: 'rgb(0, 185, 191)',
          color2: 'rgba(0, 185, 191, 0.192)',
          content: contentArray
        }
        break;

      case '!quote':
        params = {
          type: 'quote',
          icon: <FaQuoteLeft />,
          color: 'rgb(147, 181, 182)',
          color2: 'rgba(147, 181, 182, 0.192)',
          content: contentArray
        }
        break;

      case '!example':
        params = {
          type: 'Example',
          icon: <RiCheckboxBlankCircleLine />,
          color: 'rgb(110, 126, 175)',
          color2: 'rgba(147, 148, 182, 0.178)',
          content: contentArray
        }
        break;

      case null:
        params = {
          type: 'null',
          icon: "🔳",
          color: '#585858'
        }
        break;
  
      default:
        params = {
          type: 'default',
          icon: "✨",
          color: '#727c5e',
          content: contentArray
        }
        break;
    }
  } else if(!type){
    // console.log('no type');
    return null
  }
  
  return (
    <StyledCallout className="callout-cont" color={params.color} color2={params.color2} >

      {type && (
        <div className="type">

          {params.icon}
          <span className='title'>{params.type}</span>
        </div>
      )}

        <div className="content">
          <p>{params.content}</p>
        </div>
    </StyledCallout>
  )


}
