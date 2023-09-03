import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// components
import { FormButtons, HashTagInput } from '@components/Form'
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
    <section className='w-full  flex-start flex-col mx-10'>
      <h1 className='head_text text-center '>
        <span className='vice'>
          {type} & <b>ZAY</b> IT!
        </span>
      </h1>
      <p className='desc text-center max-w-md font-light'>
        {_types[type]?.description}
      </p>
      <form
        onSubmit={onSubmit}
        action=''
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 border border-outline bg-transparent p-5 rounded-2xl border-gray-800'
      >
        <label htmlFor=''>
          <span className='text-lighter text-base text-gray-200'>
            PROMPT FORM
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here...'
            required
            className='form_textarea'
          />
        </label>

        {/* tags */}
        <label htmlFor=''>
          <span className='text-lighter text-base text-gray-200'>
            TAGS (optional)
          </span>
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
