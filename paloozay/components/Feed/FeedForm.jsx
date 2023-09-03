import React from 'react'

const FeedForm = ({ value, onChange }) => {
  return (
    <form className='relative w-full flex-center'>
      <input
        type='text'
        placeholder='Look for prompts and by tags or key names'
        value={value}
        onChange={onChange}
        required
        className='search_input peer'
      />
    </form>
  )
}

export default FeedForm
