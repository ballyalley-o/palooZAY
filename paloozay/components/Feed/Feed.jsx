'use client'
import { useState, useEffect } from 'react'
// components
import { PromptList } from '@components/Prompt'
import { FeedForm } from '.'
// styles
import * as _ from '@theme/styles'
// routes
import { PATH } from '@routes'
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'

const Feed = () => {
  const [feed, setFeed] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchResults, setSearchResults] = useState([])

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

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, 'i')
    return feed.filter(
      (i) =>
        regex.test(i.creator.username) ||
        regex.test(i.prompt) ||
        regex.test(i.tag)
    )
  }

  const handleSearch = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value)
        setSearchResults(searchResult)
      })
    )
  }

  const handleTag = (tag) => {
    setSearchText(tag)

    const searchResult = filterPrompts(tag)
    setSearchResults(searchResult)
  }

  return (
    <section className={_.StyledFeed}>
      <FeedForm value={searchText} onChange={handleSearch} />
      {searchText ? (
        <PromptList data={searchResults} onChange={handleTag} />
      ) : (
        <PromptList data={feed} onChange={handleTag} />
      )}
    </section>
  )
}

export default Feed
