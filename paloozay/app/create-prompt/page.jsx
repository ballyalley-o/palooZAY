'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Form } from '@components/Form'
// constants
import { INITIAL_STATE } from '@constants'
// utils
import logger from '@utils/logger'

const CreatePrompt = () => {
  const [submit, setSubmit] = useState(false)
  const [post, setPost] = useState(INITIAL_STATE.CREATE_PROMPT)
  const { data: session } = useSession()
  const router = useRouter()

  const createPrompt = async (e) => {
    e.preventDefault()
    setSubmit(true)

    try {
      const response = await fetch(PATH.new, {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      })

      if (response.ok) {
        router.push(PATH.home)
      }
    } catch (error) {
      logger.error(error)
    } finally {
      setSubmit(false)
    }
  }

  return (
    <Form
      type='CREATE'
      post={post}
      setPost={setPost}
      submit={submit}
      onSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
