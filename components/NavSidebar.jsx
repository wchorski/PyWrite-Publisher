import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import imageLoader from "libs/imageLoader"
import { NavTree } from './NavTree'

export const NavSidebar = () => {
  return (
    <div className="navsidebar-cont">
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
