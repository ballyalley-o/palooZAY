'use client'

import { useSession } from 'next-auth/react'
// components
import { ProtectedRoute } from '@components/Protect'
import { Prompt } from '@components/Prompt'
import {
  AccountTitleAndDesc,
  AccountPromptWrapper,
  AccountIcon,
} from '@components/Account'
// styles
import * as _ from '@theme/styles'
// constants
import { ASSETS } from '@config'

const Account = ({ name, content, data, onEdit, onDelete }) => {
  const { data: session } = useSession()
  return (
    <ProtectedRoute>
      <section className=''>
        <AccountTitleAndDesc name={name} content={content} />
        <AccountIcon src={ASSETS.google.src(session)} />
        <AccountPromptWrapper>
          {data.map((feed) => (
            <Prompt
              key={feed._id}
              post={feed}
              onEdit={() => onEdit && onEdit(feed)}
              onDelete={() => onDelete && onDelete(feed)}
            />
          ))}
        </AccountPromptWrapper>
      </section>
    </ProtectedRoute>
  )
}

export default Account
