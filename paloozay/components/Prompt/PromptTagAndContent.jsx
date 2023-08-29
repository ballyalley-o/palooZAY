import React from 'react'
import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'

const PromptTagAndContent = ({ post }) => {
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
    </>
  )
}

PromptTagAndContent.propTypes = {
  post: PropTypes.object,
}

export default PromptTagAndContent
