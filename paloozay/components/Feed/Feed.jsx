'use client'
import { useState, useEffect } from 'react'
// components
import { Prompt, PromptList } from '@components/Prompt'
// routes
import { PATH } from '@routes'
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [feed, setFeed] = useState([])

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(PATH.feed)
      const data = await response.json()
      setFeed(data)
    }

    try {
      fetchPosts()
    } catch (error) {
      logger.error(error.message)
    }
  }, [])

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
      <PromptList data={feed} onChange={() => {}} />
    </section>
  )
}

export default Feed
