'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// components
import {
  NavMember,
  NavMobileMenu,
  NavMobileMember,
  AuthButton,
} from '@components/Nav'
import Image from 'next/image'
import Logo from '@components/Logo'
// styles
import * as _ from '@theme/styles'
// auth
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
// routes
import { SubLink, PATH } from '@routes'
// constants
import { BUTTONS, ASSETS, MENU } from '@constants'

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUseProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }
    setUseProviders()
  }, [providers])
  return (
    <nav className={_.StyledNav}>
      <Link href={PATH.home} className={_.StyledLogoLink}>
        <Logo />
      </Link>

      {/* desktop */}
      <div className={_.StyledWrapperDiv}>
        {session?.user ? (
          <NavMember />
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <AuthButton provider={provider} key={provider.id} signIn />
              ))}
          </>
        )}
      </div>

      {/* mobile */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <NavMobileMember />
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <AuthButton provider={provider} key={provider.id} signIn />
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
