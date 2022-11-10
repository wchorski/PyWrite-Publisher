// ? credit https://amirardalan.com/blog/use-next-image-with-react-markdown
import React, {useState} from 'react'
import Image from 'next/image'
import { BsArrowReturnRight } from "react-icons/bs";

export const MarkdownImage = (input) => {

  const [ratio, setRatio] = useState(16/9) // default to 16:9
  
  const { node } = input.paragraph

  if (node.children[0].tagName === "img") {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.match(/.*(?=\|)/)[0]
    const metaWidth = metastring.match(/(?<=\|).*/)[0]
    const width = metaWidth ? metaWidth : "200"
    const isPriority = metastring?.toLowerCase().match('{priority}')


    return (
      <div className="imgWrapper">

          <Image
            className="nextImg"
            src={`/${image.properties.src}`}
            alt={alt}
            priority={isPriority}

            // set the dimension (affected by layout)
            width={width}
            height={width / ratio}
            layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
            onLoadingComplete={({ naturalWidth, naturalHeight }) => 
              setRatio(naturalWidth / naturalHeight)
            }
          />
            {alt ? 
              <small className="caption" aria-label={alt}>
                <span><BsArrowReturnRight /> {alt}</span>
              </small> 
            : null}
   
      </div>
    )
  }
  return <p>{input.paragraph.children}</p>
}
