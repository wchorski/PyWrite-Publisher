import { useRouter } from 'next/router'
import Link from 'next/link'
import { MouseEvent } from 'react';

export default function ActiveLink({ name, href }: {name: string, href: string}) {
  const { pathname: urlPathname, push: routerPush  } = useRouter();

  const isActive = urlPathname === href ? 'active' : 'nonoooo'

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    routerPush(href)
  }

  return (
    <Link href={href}>
      <a onClick={handleClick} className={isActive}> 
        {name} 
      </a>
    </Link> 

  )
}