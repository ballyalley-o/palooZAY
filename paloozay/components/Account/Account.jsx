'use client'

import PropTypes from 'prop-types'
// components
import { ProtectedRoute } from '@components/Protect'
import { Prompt } from '@components/Prompt'
// util
import accountName from '@utils/accountName'

const Account = ({ name, content, data, onEdit, onDelete }) => {
  return (
    <ProtectedRoute>
      <section className='w-full'>
        <h1 className='head_text text-left blue_gradient'>
          <span>{name}</span>
        </h1>
        <p className='desc text-left border-t text-white mb-2'>{content}</p>
        <div className='mt-10 prompt_layout'>
          {data.map((feed) => (
            <Prompt
              key={feed._id}
              post={feed}
              onEdit={() => onEdit && onEdit(feed)}
              onDelete={() => onDelete && onDelete(feed)}
            />
          ))}
        </div>
      </section>
    </ProtectedRoute>
  )
}

export default Account
