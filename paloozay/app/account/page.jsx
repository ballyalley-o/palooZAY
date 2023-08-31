'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Account } from '@components/Account'

const MyAccount = () => {
  const { data: session } = useSession()
  const [feed, setFeed] = useState([])

  const handleEdit = () => {}
  const handleDelete = async () => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(PATH.user_posts(session?.user.id))
      const data = await response.json()
      setFeed(data)
    }

    try {
      if (session?.user.id) fetchPosts()
    } catch (error) {
      toast.error(error)
      logger.error(error)
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
