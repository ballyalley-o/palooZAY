'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'
// components
import Tooltip from '@components/Tooltip'
// assets
import { FaCopy } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'

const PromptTooltip = ({ post }) => {
  const [copied, setCopied] = useState('')

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(''), 3000)
  }
  return (
    <div className={_.StyledTooltipWrapperDiv}>
      <Tooltip
        content={(copied === post.prompt ? 'Copied!' : 'Copy') || tooltip}
      >
        <button
          type='button'
          className={copied ? _.StyledPreTooltip : _.StyledPostTooltip}
          onClick={handleCopy}
        >
          {copied === post.prompt ? <TiTick /> : <FaCopy />}
        </button>
      </Tooltip>
    </div>
  )
}

PromptTooltip.propTypes = {
  post: PropTypes.object,
}

export default PromptTooltip
