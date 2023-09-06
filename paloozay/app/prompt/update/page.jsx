'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Form } from '@components/Form'
// constants
import { INITIAL_STATE, SNACKS, _types } from '@constants'
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'

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

  const updatePrompt = async (e) => {
    e.preventDefault()
    setSubmit(true)

    if (!promptId) return alert(SNACKS.PROMPT.noId)

    try {
      const response = await fetch(PATH.getPrompt(promptId), {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      })

      if (response.ok) {
        toast.success(SNACKS.PROMPT.updated)
        router.push(PATH.home)
      }
    } catch (error) {
      logger.error(error.message)
    } finally {
      setSubmit(false)
    }
  }

  return (
    <Form
      type={_types.PAGES.edit}
      post={post}
      setPost={setPost}
      submit={submit}
      onSubmit={updatePrompt}
    />
  )
}

export default EditPrompt
