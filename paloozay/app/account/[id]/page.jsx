'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
// routes
import { PATH } from '@routes'
// components
import { Account } from '@components/Account'
// constants
import { SNACKS } from '@constants'
// utils
import logger from '@utils/logger'
import accountName from '@utils/accountName'

const UserAccount = ({ params }) => {
  const [userFeed, setUserFeed] = useState([])
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(PATH.user_posts(params?.id))
      const data = await response.json()
      setUserFeed(data)
    }

    try {
      if (params?.id) fetchPosts()
    } catch (error) {
      logger.error(error.message)
    }
  }, [params?.id])

  const User = userFeed.find(
    (i) => i.creator?.username === userFeed[0]?.creator?.username
  )

  const UserName = User?.creator?.username

  return (
    <Account
      name={UserName}
      content={`Welcome to ${accountName(UserName)} Account`}
      data={userFeed}
    />
  )
}

export default UserAccount
