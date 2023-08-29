'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
// components
import Tooltip from '@components/Tooltip'
import { PromptContent, PromptTagAndContent } from '@components/Prompt'
// assets
import { FaCopy } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
// styles
import * as _ from '@theme/styles'

const Prompt = ({ post, onSubmit, onEdit, onDelete }) => {
  const [submit, setSubmit] = useState(false)
  const [copied, setCopied] = useState('')

  // const  = post.creator.image
  const router = useRouter()
  const { data: session } = useSession()

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <div className={_.StyledPromptMainDiv}>
      <div className={_.StyledPromptDiv}>
        <PromptContent post={post} />
        <div className=''>
          <Tooltip content={copied === post.prompt ? 'Copied!' : 'Copy'}>
            <button
              type='button'
              className={copied ? _.StyledPreTooltip : _.StyledPostTooltip}
              onClick={handleCopy}
            >
              {copied === post.prompt ? <TiTick /> : <FaCopy />}
            </button>
          </Tooltip>
        </div>
      </div>
      <PromptTagAndContent post={post} />
    </div>
  )
}

Prompt.propTypes = {
  post: PropTypes.object,
}

export default Prompt
