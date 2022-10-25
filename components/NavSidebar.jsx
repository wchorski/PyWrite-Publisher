import { useState } from "react";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import imageLoader from "libs/imageLoader"
import { NavTree } from './NavTree'
import { AiOutlineShrink, AiOutlineExpandAlt } from "react-icons/ai";

export const NavSidebar = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [styleState, setStyleState] = useState({width: 'auto'})


  const toggleNav = () => {

    setIsOpen(!isOpen)

    isOpen
      ? setStyleState({width: '20em'})
      : setStyleState({width: '2em'})
  }

  return (
    <div className="navsidebar-cont" style={styleState}>

      <button onPointerDown={toggleNav}>
        {isOpen ? <AiOutlineExpandAlt /> : <AiOutlineShrink />}
      </button>

      <nav>
        <ul>
          <li>
            <Link href={'/vault/📁developer'}>
              <a > 
                <Image 
                  loader={imageLoader}
                  unoptimized
                  src="/pywriter-logo-v1@2x.svg" 
                  alt="There a Will There a Website Logo" 
                  width={72} height={32} 
                />
              </a>
            </Link>

          </li>
          <li>
              <Link href={'/vault/🚿shower_thoughts'}>
                <a>🚿</a>
              </Link>
          </li>
        </ul>
        
        <NavTree />
      </nav>
    </div>
  )
}
