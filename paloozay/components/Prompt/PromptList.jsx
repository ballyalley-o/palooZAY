import React from 'react'
// components
import { Prompt } from '@components/Prompt'

/**
 *
 * @param {object} data
 * @param {function} onChange
 * @returns
 */
const PromptList = ({ data, onChange }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <Prompt key={post.id} data={post} onChange={onChange} />
      ))}
    </div>
  )
}

export default PromptList
