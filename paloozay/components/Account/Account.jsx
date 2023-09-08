'use client'

// components
import { ProtectedRoute } from '@components/Protect'
import { Prompt } from '@components/Prompt'
import { AccountTitleAndDesc, AccountPromptWrapper } from '@components/Account'
// hooks
import { useDialog } from '@hooks/use-dialog'
// styles
import * as _ from '@theme/styles'
// constants

const Account = ({ name, content, data, onEdit, onDelete }) => {
  // const { pathname } = useLocation()
  const { renderDialog, setOpen } = useDialog()
  return (
    <ProtectedRoute>
      <section>
        <AccountTitleAndDesc name={name} content={content} />
        <AccountPromptWrapper>
          {data.map((feed) => (
            <Prompt
              key={feed._id}
              post={feed}
              onEdit={() => onEdit && onEdit(feed)}
              onDelete={() => {
                onDelete && onDelete(feed)
                setOpen(true)
              }}
            />
          ))}
        </AccountPromptWrapper>
        {onDelete && renderDialog('DELETE')}
      </section>
    </ProtectedRoute>
  )
}

export default Account
