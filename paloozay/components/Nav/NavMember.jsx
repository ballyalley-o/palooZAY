import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
// config
import { GLOBAL } from '@config'
//routes
import { PATH, SubLink } from '@routes'
// styles
import * as _ from '@theme/styles'
// constants
import { BUTTONS } from '@constants'

const NavMember = () => {
  const { data: session } = useSession()
  return (
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
          {...GLOBAL.ACCOUNT_ICON_SIZE}
          className='rounded-full'
          alt='profile'
        />
      </Link>
    </div>
  )
}

export default NavMember