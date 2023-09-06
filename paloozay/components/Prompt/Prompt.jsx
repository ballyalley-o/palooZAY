'use client'

import PropTypes from 'prop-types'
import { useSession } from 'next-auth/react'
// components
import {
  PromptContent,
  PromptTagAndContent,
  PromptTooltip,
} from '@components/Prompt'
// styles
import * as _ from '@theme/styles'

const Prompt = ({
  post,
  onSubmit,
  onEdit,
  onDelete,
  tooltip,
  handleTagClick,
}) => {
  // const  = post.creator.image
  const { data: session } = useSession()

  return (
    <div className={_.StyledPromptMainDiv}>
      <div className={_.StyledPromptDiv}>
        <PromptContent post={post} />
        <PromptTooltip post={post} />
      </div>
      <PromptTagAndContent
        session={session}
        post={post}
        onEdit={onEdit}
        onDelete={onDelete}
        handleTagClick={handleTagClick}
      />
    </div>
  )
}

Prompt.propTypes = {
  post: PropTypes.object,
}

export default Prompt
