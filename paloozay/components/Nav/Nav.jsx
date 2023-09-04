'use client'

import React from 'react'
import { useState, useEffect } from 'react'
// components
import {
  NavLogo,
  NavMember,
  NavMobileMember,
  AuthButton,
  NavMobile,
  NavDesktop,
} from '@components/Nav'
// styles
import * as _ from '@theme/styles'
// auth
import { useSession, getProviders } from 'next-auth/react'

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
      <NavLogo />

      {/* desktop */}
      <NavDesktop>
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
      </NavDesktop>

      {/* mobile */}
      <NavMobile>
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
      </NavMobile>
    </nav>
  )
}

export default Nav
