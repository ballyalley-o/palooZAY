'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// components
import Image from 'next/image'
import Logo from '@components/Logo'
// auth
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
// routes
import { SubLink } from '@routes'
// constants
import { BUTTONS, ASSETS, MENU } from '@constants'

const Nav = () => {
  const isUserLoggedIn = true
  const [providers, setProviders] = useState(null)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }
    setProviders()
  }, [providers])
  return (
    <nav className='flex-between w-full mb-16 bg-black mt-5'>
      <Link href='/' className='flex  gap-2 flex-center'>
        <Logo />
      </Link>

      {/* desktop */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={SubLink.CREATE_PROMPT} className='black_btn'>
              {BUTTONS.CREATE_PROMPT}
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              {BUTTONS.SIGN_OUT}
            </button>
            <Link href={SubLink.ACCOUNT}>
              <Image
                src={ASSETS.PROFILE}
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
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                    classNames = 'black_btn'
                  }}
                >
                  BUTTONS.SIGN_IN
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src={ASSETS.ACCOUNT}
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
                {/* <Link
                  href={SubLink.CREATE_PROMPT}
                  className='dropdown_link'
                  onClick={() => setToggleMenu(false)}
                >
                  {MENU.ACCOUNT}
                </Link> */}
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                  }}
                  classNames='black_btn'
                >
                  {BUTTONS.SIGN_IN}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
