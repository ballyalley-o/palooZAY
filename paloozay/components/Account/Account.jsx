'use client'

import PropTypes from 'prop-types'
import { Prompt } from '@components/Prompt'

const Account = ({ name, content, data, onEdit, onDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left blue_gradient'>
        <span>{name} Account</span>
      </h1>
      <p className='desc text-left'>{content}</p>
      <div className='mt-10 prompt_layout'>
        {data.map((feed) => (
          <Prompt
            key={feed._id}
            post={feed}
            onEdit={() => onEdit && onEdit(post)}
            onDelete={() => onDelete && onDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Account
