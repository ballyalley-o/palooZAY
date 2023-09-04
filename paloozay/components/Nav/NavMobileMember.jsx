'use client'

import { useState } from 'react'
import { NavAccountIcon, NavMobileMenu } from '@components/Nav'

const NavMobileMember = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='flex'>
      <NavAccountIcon setToggleMenu={setToggleMenu} />
      {toggleMenu && (
        <NavMobileMenu setToggleMenu={setToggleMenu} provider={null} />
      )}
    </div>
  )
}

export default NavMobileMember
