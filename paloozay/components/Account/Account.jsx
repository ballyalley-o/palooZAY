'use client'

import PropTypes from 'prop-types'
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
              }}
            />
          ))}
        </AccountPromptWrapper>
      </section>
    </ProtectedRoute>
  )
}

Account.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  data: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  setOpen: PropTypes.func,
}

export default Account
