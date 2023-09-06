import React from 'react'
import PropTypes from 'prop-types'
import { useSession } from 'next-auth/react'
// styles
import * as _ from '@theme/styles'
import Image from 'next/image'
// config
import { ASSETS } from '@config'

const NavAccountIcon = ({ setToggleMenu }) => {
  const { data: session } = useSession()
  return (
    <Image
      alt='google_logo'
      src={ASSETS.google.src(session)}
      width={ASSETS.google.width}
      height={ASSETS.google.height}
      className={_.StyledLogo}
      onClick={() => {
        setToggleMenu((prev) => !prev)
      }}
    />
  )
}

NavAccountIcon.propTypes = {
  setToggleMenu: PropTypes.func,
}

export default NavAccountIcon
