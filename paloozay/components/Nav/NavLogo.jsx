import React from 'react'
import Link from 'next/link'
// components
import Logo from '@components/Logo'
// styles
import * as _ from '@theme/styles'
// constants
import { PATH } from '@routes'

const NavLogo = () => {
  return (
    <Link href={PATH.home} className={_.StyledLogoLink}>
      <Logo />
    </Link>
  )
}

export default NavLogo
