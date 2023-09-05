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

const PromptTagAndContent = ({
  session,
  post,
  onEdit,
  onDelete,
  handleTagClick,
}) => {
  const pathName = usePathname()

  return (
    <>
      <p className={_.StyledPromptContentP}>{post.prompt}</p>
      <p
        className={_.StyledTagContentP}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleTagClick && handleTagClick(post.tag)
        }}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator?._id &&
        pathName === SubLink.ACCOUNT && (
          <div className={_.StyledTooltipWrapper}>
            <Tooltip content='Edit'>
              <BiEditAlt className={_.StyledEditTooltip} onClick={onEdit} />
            </Tooltip>
            <Tooltip content='Delete'>
              <RiDeleteBinLine
                className={_.StyledTrashTooltip}
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
