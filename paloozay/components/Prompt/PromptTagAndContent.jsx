import React from 'react'
import PropTypes from 'prop-types'
import { usePathname, useRouter } from 'next/navigation'

// styles
import * as _ from '@theme/styles'
// routes
import { SubLink } from '@routes'
const PromptTagAndContent = ({ session, post, onEdit, onDelete }) => {
  const pathName = usePathname()
  const router = useRouter()
  const handleTagClick = (tag) => {}
  return (
    <>
      <p className={_.StyledPromptContentP}>{post.prompt}</p>
      <p
        className={_.StyledTagContentP}
        onClick={() => {
          handleTagClick && handleTagClick(post.tag)
        }}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id &&
        pathName === SubLink.ACCOUNT && (
          <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
            <p
              className='font-inter text-sm cursor-pointer green_gradient'
              onClick={onEdit}
            >
              Edit
            </p>
            <p
              className='font-inter text-sm cursor-pointer orange_gradient'
              onClick={onDelete}
            >
              Delete
            </p>
          </div>
        )}
    </>
  )
}

PromptTagAndContent.propTypes = {
  post: PropTypes.object,
}

export default PromptTagAndContent
