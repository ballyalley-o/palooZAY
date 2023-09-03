import { useState } from 'react'

const HashTagInput = ({ value, onChange, onKeyPress }) => {
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className='form_input'
      />
    </div>
  )
}

export default HashTagInput
