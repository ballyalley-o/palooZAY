import React from 'react'
// components
import { Prompt } from '@components/Prompt'
// styles
import { StyledPromptListDiv } from '@theme/styles'

/**
 *
 * @param {object} data
 * @param {function} onChange
 * @returns
 */
const PromptList = ({ data, onChange, handleTagClick }) => {
  return (
    <div className={StyledPromptListDiv}>
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
