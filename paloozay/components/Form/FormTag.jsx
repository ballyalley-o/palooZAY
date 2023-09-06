import React from 'react'
// styles
import * as _ from '@theme/styles'
// constants
import { _types } from '@constants'
// components
import { HashTagInput } from '@components/Form'

const FormTag = ({ input, onKeyPress, onChange }) => {
  const tagId = 'tag'
  return (
    <label htmlFor={tagId}>
      <span className={_.StyledFormLabelSpan}>{_types.TAGS.title}</span>
      <HashTagInput
        id={tagId}
        value={input}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </label>
  )
}

export default FormTag
