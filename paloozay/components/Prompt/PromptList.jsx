import React from 'react'
// components
import { Prompt } from '@components/Prompt'

/**
 *
 * @param {object} data
 * @param {function} onChange
 * @returns
 */
const PromptList = ({ data, onChange, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((feed) => (
        <Prompt
          key={feed._id}
          post={feed}
          onChange={onChange}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default PromptList
