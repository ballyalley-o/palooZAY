'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Account } from '@components/Account'
// constants
import { SNACKS } from '@constants'
// utils
import logger from '@utils/logger'

const MyAccount = () => {
  const { data: session } = useSession()
  const [feed, setFeed] = useState([])
  const router = useRouter()

  const handleEdit = (Feed) => {
    router.push(PATH.updatePrompt(Feed._id))
  }
  const handleDelete = async (Feed) => {
    const confirmed = confirm(SNACKS.CONFIRM.delete_prompt)

    if (confirmed) {
      try {
        await fetch(PATH.deletePrompt(Feed._id), {
          method: 'DELETE',
        })

        const filteredFeed = feed.filter((post) => post._id !== Feed._id)

        setFeed(filteredFeed)
      } catch (error) {
        logger.error(error.message)
      }
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(PATH.user_posts(session?.user.id))
      const data = await response.json()
      setFeed(data)
    }

    try {
      if (session?.user.id) fetchPosts()
    } catch (error) {
      logger.error(error.message)
    }
  }, [])
  return (
    <Account
      name={session?.user.name}
      content='Welcome to your Account'
      data={feed}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default MyAccount
