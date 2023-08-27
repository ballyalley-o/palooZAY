'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const Prompt = ({ post, onSubmit, onEdit, onDelete }) => {
  const [submit, setSubmit] = useState(false)

  // const  = post.creator.image
  const router = useRouter()
  const { data: session } = useSession()

  // const findImage = () => {
  //   if userId ===
  // }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
        </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  post: PropTypes.object,
}

export default Prompt
