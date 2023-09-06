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

  // this auto concatinates # to the beginning of a word
  const handleKeyPress = (e) => {
    if (e.key === ' ') {
      // this splits the input into an array of words
      const words = input.split(' ')
      // this gets the last word in the array
      const lastWord = words[words.length - 1]

      // if the last word doesn't start with a #, add it
      if (!lastWord.startsWith('#')) {
        words[words.length - 1] = '#' + lastWord
        // this joins the array back into a string
        const updatedTag = words.join(' ')

        // this updates the input value
        setInput(updatedTag)
        // this updates the post
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
