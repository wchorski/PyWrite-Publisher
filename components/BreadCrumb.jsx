import React, {useState, useEffect} from 'react'
import Link  from "next/link";
import { StyledBreadCrum } from '../styles/BreadCrumb.styled';

export const BreadCrumb = ({slug}) => {

  const [slugArray, setSlugArray] = useState([])

  useEffect(() => {
    setSlugArray(slug.split('/').filter(Boolean))
    console.log(slugArray);
  
    return () => {
      console.log('that is all folks');
    }
  }, [slug])
  

  return (
    <StyledBreadCrum>
      <div className='arrows'>
      {slugArray.map((route, index) => {

        // if i is > 0 
        // cat all > i strings to beginning

        // array.pop remove from end
        // as many times as current i

        // const currSlug = slugArray.join('/')
        // const currSlug = slugArray.filter(route)
        console.log('index: ', index);
        // const newArr = slugArray.pop().slice()

        const currSlug = []
        slugArray.map((slg, i) => {
          i < index 
            ? currSlug.push(slg)
            : null
        });

        console.log('currSlug:, ', currSlug);
        console.log("slugArray.join('/') > ", slugArray.join('/'));
        // console.log('currSlug > ', currSlug);
        

        return (
          <li key={index}>
            {/* <p></p> */}
            <Link href={`/vault/${currSlug.join('/')}/${route}`}>{route}</Link>
          </li>
        )

        if(i === 0){
          return (
            <span>
              <Link href={`/vault/${route}`}>{route}</Link> /
            </span>
          )
        }
        if(i > 0){
          return (
            <span>
              <Link href={`/vault/${slugArray[0]}/${route}`}>{route}</Link> /
            </span>
          )
        }

      })

      }
    </div>
    </StyledBreadCrum>
  )
}
