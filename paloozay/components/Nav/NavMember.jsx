import React, { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
// config
import { ASSETS } from '@config'
//routes
import { PATH, SubLink } from '@routes'
// styles
import * as _ from '@theme/styles'
// constants
import { BUTTONS } from '@constants'

const NavMember = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const disabled = pathname === PATH.createPrompt

  return (
    <div className={_.StyledMenuWrapperDiv}>
      <Link
        href={PATH.createPrompt}
        className={_.StyledPromptLink}
        style={{
          display: disabled ? 'none' : 'flex',
        }}
      >
        {BUTTONS.CREATE_PROMPT}
      </Link>
      <button type='button' onClick={signOut} className={_.StyledSignedInDiv}>
        {BUTTONS.SIGN_OUT}
      </button>
      <Link href={SubLink.ACCOUNT}>
        <Image
          alt='google_image'
          src={ASSETS.google.src(session)}
          width={ASSETS.google.width}
          height={ASSETS.google.height}
          className={ASSETS.google.className}
        />
      </Link>
    </div>
  )
}

export default NavMember
