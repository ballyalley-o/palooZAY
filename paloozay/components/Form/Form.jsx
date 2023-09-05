import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// components
import { FormButtons, HashTagInput, FormLabel } from '@components/Form'
// styles
import * as _ from '@theme/styles'
// constants
import { _types, SNACKS } from '@constants'

const Form = ({ type, post, setPost, submit, onSubmit }) => {
  const [input, setInput] = useState(post.tag || '')

  const { tag } = post
  const tagString = tag?.toString()

  useEffect(() => {
    setInput(tagString || '')
  }, [tagString])

  const handleKeyPress = (e) => {
    if (e.key === ' ') {
      const words = input.split(' ')
      const lastWord = words[words.length - 1]

      if (!lastWord.startsWith('#')) {
        words[words.length - 1] = '#' + lastWord
        const updatedTag = words.join(' ')

        setInput(updatedTag)
        setPost({ ...post, tag: updatedTag })
      }
    }
  }

  const handleOnChange = (e) => {
    const newTag = e.target.value
    setInput(newTag)
  }

  return (
    <section className={_.StyledFormSection}>
      <FormLabel type={type} />
      <form onSubmit={onSubmit} action='' className={_.StyledForm}>
        <label htmlFor='prompt'>
          <span className={_.StyledFormLabelSpan}>PROMPT FORM</span>
          <textarea
            id='prompt'
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder={SNACKS.PROMPT.placeholder}
            required
            className={_.StyledFormTextarea}
          />
        </label>

        {/* tags */}
        <label htmlFor=''>
          <span className={_.StyledFormLabelSpan}>TAGS</span>
          <HashTagInput
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleOnChange}
          />
        </label>
        <FormButtons submit={submit} type={type} />
      </form>
    </section>
  )
}

Form.propTypes = {
  type: PropTypes.any,
  post: PropTypes.object,
  setPost: PropTypes.func,
  submit: PropTypes.bool,
  onSubmit: PropTypes.func,
}

export default Form
