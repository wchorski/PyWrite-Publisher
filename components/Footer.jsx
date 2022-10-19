import React from 'react'
import styles from 'styles/Home.module.css'
import Image from 'next/image'
import imageLoader from "libs/imageLoader"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.WilliaMusic.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pywriter 4{''}
        <span className={styles.logo}>
          <Image 
            loader={imageLoader}
            unoptimized
            src="/pywriter-logo-v1@2x.svg" 
            alt="There a Will There a Website Logo" 
            width={72} height={32} 
          />
        </span>
      </a>
    </footer>
  )
}

export default Footer