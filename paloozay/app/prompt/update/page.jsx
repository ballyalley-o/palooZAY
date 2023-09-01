'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Form } from '@components/Form'
// constants
import { INITIAL_STATE } from '@constants'
// utils
import logger from '@utils/logger'

const EditPrompt = () => {
  const [submit, setSubmit] = useState(false)
  const [post, setPost] = useState(INITIAL_STATE.CREATE_PROMPT)
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  useEffect(() => {
    const fetchPrompt = async () => {
      const response = await fetch(PATH.getPrompt(promptId))
      const data = await response.json()

      setPost({ prompt: data.prompt, tag: data.tag })
    }
    if (promptId) fetchPrompt()
  }, [promptId])

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submit={submit}
      onSubmit={() => {}}
    />
  )
}

export default EditPrompt
