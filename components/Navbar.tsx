import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import ROLES_LIST from '../config/roles_list'
// import Link from 'next/link'
import LinkActive from './LinkActive'

// import { BsEmojiHeartEyes } from 'react-icons/bs'

import { StyledNavBar } from '../styles/Navbar.styled'

export const Navbar = () => {

  // const { data: session, status } = useSession()


  return (

    <StyledNavBar>
      <div className="nav-bg-main">
        <nav className="main">
          <ul>
            <li key={1}> <LinkActive name={'Home'} href={'/'}/></li>
            <li key={2}> <LinkActive name={'Portfolio'} href={'/portfolio'}/></li>

            {/* {session && session.user.roles.admin === ROLES_LIST.admin && (
              <li key={4}> <LinkActive name={'Admin'} href={'/admin'}/></li>
            )} */}

          </ul>
        </nav>


        {/* <div className="nav-bg-sub">
          <nav className="sub">

            {session && status === "authenticated" && (
              <>
                <BsEmojiHeartEyes style={{ color: session.user?.color, fontSize: "30px" }} />
                <Link href={`/users/${session.user?.email}`}>{session.user?.name}</Link>
                <Link href='/api/auth/signout' >
                  <a onClick={e => { e.preventDefault(); signOut() }} className='btn' > Sign Out</a>
                </Link>
              </>
            )}

            {!session && status === "unauthenticated" && (
              <>
                <Link href='/api/auth/signin' >
                  <a onClick={e => { e.preventDefault(); signIn() }} className='btn' > Login </a>
                </Link>
              </>
            )}
          </nav>
        </div> */}
      </div>


    </StyledNavBar>
  )
}
