import React from 'react'
import PropTypes from 'prop-types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
// config
import { GLOBAL } from '@config'

const NavAccountIcon = ({ setToggleMenu }) => {
  const { data: session } = useSession()
  return (
    <Image
      src={session?.user.image}
      {...GLOBAL.ACCOUNT_ICON_SIZE}
      className='rounded-full'
      alt='profile'
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
