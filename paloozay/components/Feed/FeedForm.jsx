import React from 'react'
// styles
import * as _ from '@theme/styles'
// constants
import { _types } from '@constants'

const FeedForm = ({ value, onChange }) => {
  return (
    <form className='relative w-full flex-center'>
      <input
        required
        type='text'
        placeholder={_types.FEED.search}
        value={value}
        onChange={onChange}
        className={_.StyledFeedInput}
      />
    </form>
  )
}

export default FeedForm
