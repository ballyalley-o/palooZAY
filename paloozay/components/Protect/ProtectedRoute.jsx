'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// routes
import { PATH } from '@routes'

const ProtectedRoute = ({ children }) => {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session?.user) {
    return router.push(PATH.home)
  }
  return children
}

export default ProtectedRoute
