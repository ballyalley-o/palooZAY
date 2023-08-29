import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
// styles
import * as _ from '@theme/styles'

const PromptContent = ({ post }) => {
  return (
    <div className={_.StyledPromptWrapperDiv}>
      <Image
        src={post.creator.image}
        alt='user_image'
        width={40}
        height={40}
        className={_.StyledImage}
      />
      <div className={_.StyledContentWrapperDiv}>
        <h3 className={_.StyledUserNameP}>{post.creator.username}</h3>
        <p className={_.StyledEmailCardP}>{post.creator.email}</p>
      </div>
    </div>
  )
}

PromptContent.propTypes = {
  post: PropTypes.object,
}

export default PromptContent
