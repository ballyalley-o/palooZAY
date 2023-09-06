import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
// components
import { AuthButton } from '@components/Nav'
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
        className={_.StyledMenuDropdownLink}
        onClick={() => setToggleMenu(false)}
      >
        {MENU.ACCOUNT}
      </Link>
      <Link
        href={PATH.createPrompt}
        className={_.StyledMenuDropdownLink}
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
    </div>
  )
}

export default NavMobileMenu
