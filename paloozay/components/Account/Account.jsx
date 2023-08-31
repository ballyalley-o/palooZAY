'use client'

import PropTypes from 'prop-types'
import Prompt from '@components/Prompt'

const Account = ({ name, content, data, onEdit, onDelete }) => {
  return (
    <section className='w-full'>
      <h1>{name} Account</h1>
    </section>
  )
}

export default Account
