'use client'

// components
import { ProtectedRoute } from '@components/Protect'
import { Prompt } from '@components/Prompt'
import { AccountTitleAndDesc, AccountPromptWrapper } from '@components/Account'
// styles
import * as _ from '@theme/styles'

const Account = ({ name, content, data, onEdit, onDelete }) => {
  return (
    <ProtectedRoute>
      <section className='w-full'>
        <AccountTitleAndDesc name={name} content={content} />
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
