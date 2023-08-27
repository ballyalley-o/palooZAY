'use client'
import { useState, useEffect } from 'react'
// components
import { Prompt } from '@components/Prompt'

const Feed = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Look for prompts and by tags or key names'
          value={searchText}
          onChange={handleSearch}
          required
          className='search_input peer'
        />
      </form>
    </section>
  )
}

export default Feed
