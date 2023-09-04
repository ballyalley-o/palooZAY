'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// components
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
  const [toggleMenu, setToggleMenu] = useState(false)

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
          <div className={_.StyledMenuWrapperDiv}>
            <Link href={PATH.createPrompt} className='black_btn'>
              {BUTTONS.CREATE_PROMPT}
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              {BUTTONS.SIGN_OUT}
            </button>
            <Link href={SubLink.ACCOUNT}>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div className='flex gap-3 md:gap-5' key={provider.id}>
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id)
                    }}
                    className='outline_btn'
                  >
                    {BUTTONS.SIGN_IN}
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
      {/* mobile */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => {
                setToggleMenu((prev) => !prev)
              }}
            />
            {toggleMenu && (
              <div className='dropdown'>
                <Link
                  href={SubLink.ACCOUNT}
                  className='dropdown_link'
                  onClick={() => setToggleMenu(false)}
                >
                  {MENU.ACCOUNT}
                </Link>
                <Link
                  href={SubLink.CREATE_PROMPT}
                  className='dropdown_link'
                  onClick={() => setToggleMenu(false)}
                >
                  {MENU.CREATE_PROMPT}
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleMenu(false)
                    signOut()
                  }}
                  className='mt-5 w-full outline_btn'
                >
                  {BUTTONS.SIGN_OUT}
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div className='flex gap-3 md:gap-5' key={provider.id}>
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id)
                    }}
                    className='mt-5 w-full outline_btn'
                  >
                    {BUTTONS.SIGN_IN}
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
