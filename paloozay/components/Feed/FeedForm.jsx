import React from 'react'
// styles
import * as _ from '@theme/styles'
// constants
import { _types } from '@constants'
// components
import { FaSearch } from 'react-icons/fa'

const FeedForm = ({ value, onChange }) => {
  return (
    <form className={_.StyledFeedForm}>
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
