import React from 'react'
import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'
// components
import { _types, SNACKS } from '@constants'

const FormPrompt = ({ post, onSubmit }) => {
  const promptId = 'prompt'
  const handlePromptChange = (e) =>
    onSubmit({ ...post, prompt: e.target.value })

  return (
    <label htmlFor={promptId}>
      <span className={_.StyledFormLabelSpan}>{_types.PROMPT.title}</span>
      <textarea
        id={promptId}
        value={post.prompt}
        onChange={handlePromptChange}
        placeholder={SNACKS.PROMPT.placeholder}
        className={_.StyledFormTextarea}
        required
      />
    </label>
  )
}

FormPrompt.propTypes = {
  post: PropTypes.object,
}

export default FormPrompt
