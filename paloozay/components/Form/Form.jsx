import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// components
import { FormButtons, FormLabel, FormPrompt, FormTag } from '@components/Form'
// styles
import * as _ from '@theme/styles'
// constants
import { _types } from '@constants'

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
        {/* prompt */}
        <FormPrompt post={post} onSubmit={setPost} />
        {/* tag */}
        <FormTag
          input={input}
          onKeyPress={handleKeyPress}
          onChange={handleOnChange}
        />
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
