import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// components
import Image from 'next/image'
import { AccountIcon } from '@components/Account'
// styles
import * as _ from '@theme/styles'
// config
import { ASSETS } from '@config'

const PromptContent = ({ post }) => {
  return (
    <div className={_.StyledPromptWrapperDiv}>
      <AccountIcon
        href={`/account/${post.creator?._id}`}
        src={ASSETS.prompt.src(post)}
        {...ASSETS.prompt.size}
      />
      <div className={_.StyledContentWrapperDiv}>
        <h3 className={_.StyledUserNameP}>{post.creator?.username}</h3>
        <p className={_.StyledEmailCardP}>{post.creator?.email}</p>
      </div>
    </div>
  )
}

PromptContent.propTypes = {
  post: PropTypes.object,
}

export default PromptContent
