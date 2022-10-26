import React, {useState, useEffect} from 'react'
import Link  from "next/link";
import { StyledBreadCrum } from '../styles/BreadCrumb.styled';

export const BreadCrumb = ({slug}) => {

  const [slugArray, setSlugArray] = useState([])

  useEffect(() => {
    setSlugArray(slug.split('/').filter(Boolean))
  
    // return () => {
    //   console.log('that is all folks');
    // }
  }, [slug])
  

  return (
    <StyledBreadCrum>
      <div className='arrows'>
        {slugArray.map((route, index) => {

          const currSlug = []
          slugArray.map((slg, i) => {
            i < index 
              ? currSlug.push(slg)
              : null
          });

          return (
            <li key={index}>
              <Link href={`/vault${currSlug.join('/')}/${route}`}>{route}</Link>
            </li>
          )
        })}
      </div>
    </StyledBreadCrum>
  )
}
