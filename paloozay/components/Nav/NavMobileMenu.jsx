import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
// components
import { NavMember, AuthButton } from '@components/Nav'
// styles
import * as _ from '@theme/styles'
// routes
import { SubLink, PATH } from '@routes'
// constants
import { BUTTONS, MENU } from '@constants'

const NavMobileMenu = ({ setToggleMenu, provider }) => {
  return (
    <div className='dropdown'>
      <Link
        href={SubLink.ACCOUNT}
        className='dropdown_link'
        onClick={() => setToggleMenu(false)}
      >
        {MENU.ACCOUNT}
      </Link>
      <Link
        href={PATH.createPrompt}
        className='dropdown_link'
        onClick={() => setToggleMenu(false)}
      >
        {MENU.CREATE_PROMPT}
      </Link>
      <AuthButton
        content={BUTTONS.SIGN_OUT}
        provider={provider}
        onClick={() => {
          setToggleMenu(false)
          signOut()
        }}
      />
      {/* <button
        type='button'
        onClick={() => {
          setToggleMenu(false)
          signOut()
        }}
        className={_.StyledMobileMenuBtn}
      >
        {BUTTONS.SIGN_OUT}
      </button> */}
    </div>
  )
}

export default NavMobileMenu
