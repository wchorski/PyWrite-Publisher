// ? credit https://amirardalan.com/blog/use-next-image-with-react-markdown
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { BsArrowReturnRight } from "react-icons/bs";
import { StyledImage } from 'styles/Image.styled';

export const MarkdownImage = (element) => {

  const [ratio, setRatio] = useState(1/1) // default to 16:9
  const [trueSrc, setTrueSrc] = useState('')
  const [isLoaded, setisLoaded] = useState(false)
  
  const image = element.element

  const metastring = image.alt
  const altMeta = metastring?.match(/.*(?=\|)/)
  const alt = altMeta ? altMeta[0] : "no caption"
  const metaWidth = metastring?.match(/(?<=\|).*/)
  const width = metaWidth ? metaWidth[0] : "200"
  const isPriority = metastring?.toLowerCase().match('{priority}')

  //? add external image sources in next.config.js

  useEffect(() => {
    const newSrc = ((/^http/).test(image.src))
      ? image.src
      : '/' + image.src 

    setTrueSrc(newSrc)
    setisLoaded(true)

  }, [image.src])
  


  
  return (<>
    {isLoaded && (

      <StyledImage>
        <Image
          className="nextImg"
          src={`${trueSrc}`}
          alt={alt}
          priority={isPriority}

          // set the dimension (affected by layout)
          width={width}
          height={width / ratio}
          layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => 
            setRatio(naturalWidth / naturalHeight)
          }
          onError={() => setTrueSrc('/placeholder-img.jpg')}
        />
          {alt ? 
            <small className="caption" aria-label={alt}>
              <span><BsArrowReturnRight /> {alt}</span>
            </small> 
          : null}
      </StyledImage>

    )}

    {!isLoaded && (
      <strong>LOADING...</strong>
    )}
  </>)
}
