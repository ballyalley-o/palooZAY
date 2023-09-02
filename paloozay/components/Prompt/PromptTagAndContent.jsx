import React from 'react'
import PropTypes from 'prop-types'
import { usePathname, useRouter } from 'next/navigation'
// styles
import * as _ from '@theme/styles'
// routes
import { SubLink } from '@routes'
// components
import Tooltip from '@components/Tooltip'
// assets
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

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
          <div className='mt-5 flex-end gap-4  border-gray-100 pt-3'>
            <Tooltip content='Edit'>
              <BiEditAlt
                className='font-inter text-sm cursor-pointer text-white'
                onClick={onEdit}
              />
            </Tooltip>
            <Tooltip content='Delete'>
              <RiDeleteBinLine
                className='font-inter text-sm cursor-pointer text-red-500'
                onClick={onDelete}
              />
            </Tooltip>
          </div>
        )}
    </>
  )
}

PromptTagAndContent.propTypes = {
  post: PropTypes.object,
}

export default PromptTagAndContent
