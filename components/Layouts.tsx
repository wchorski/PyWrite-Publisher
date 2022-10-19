import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'
import { StyledMainCont } from '../styles/MainCont.styled'

export function Layout_Full_Width ( {children}: {children: React.ReactNode} ) {

  return (

    <div className='layout-wrap'>
      <Navbar />

      <StyledMainCont>
        {children}
      </StyledMainCont>


      <Footer />
      
    </div>
  )
}
export function Layout_Markdown ( {children}: {children: React.ReactNode} ) {

  return (

    <div className='layout-wrap'>
      {/* <Navbar /> */}

      <StyledMainCont>
        {children}
      </StyledMainCont>


      <Footer />
      
    </div>
  )
}

export function Layout_Just_Content ( {children}: {children: React.ReactNode} ) {

  return (

    <div className='layout-wrap'>

      {children}
      
    </div>
  )
}