'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// hooks
import { useDialog } from '@hooks/use-dialog'
// routes
import { PATH } from '@routes'
// components
import { Account } from '@components/Account'
// constants
import { SNACKS, _types } from '@constants'
// utils
import logger from '@utils/logger'

const MyAccount = () => {
  const [feed, setFeed] = useState([])
  const [userData, setUserData] = useState(null)
  const { data: session } = useSession()
  const router = useRouter()
  const { renderDialog, showDialog, open } = useDialog()

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

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(PATH.users(session?.user.id.toString()))
      const data = await response.json()
      setUserData(data)
    }

    try {
      if (session?.user.id) fetchUser()
    } catch (error) {
      logger.error(error.message)
    }
  }, [feed])

  const handleEdit = (Feed) => {
    router.push(PATH.updatePrompt(Feed._id))
  }

  const handleDelete = async (Feed) => {
    try {
      await fetch(PATH.deletePrompt(Feed._id), {
        method: 'DELETE',
      })
      const filteredFeed = feed.filter((post) => post._id !== Feed._id)
      setFeed(filteredFeed)
      showDialog(false)
    } catch (error) {
      logger.error(error.message)
    }
  }

  const handleSendConfirmation = (Feed) => {
    showDialog()
    console.log(FeedId, 'FeedId')
    console.log(Feed._id, 'Feed._id')
    // renderDialog('DELETE', () => handleDelete(Feed))
  }

  const User = userData?.find((i) => i._id === session?.user.id)
  const FeedId = feed?.filter((i) => i.prompt?._id === feed?._id)

  return (
    <>
      <Account
        name={User?.username}
        content={_types.ACCOUNT.description}
        data={feed}
        onEdit={handleEdit}
        onDelete={handleSendConfirmation}
      />
      {open && renderDialog('DELETE', () => handleDelete(FeedId))}
    </>
  )
}

export default MyAccount
