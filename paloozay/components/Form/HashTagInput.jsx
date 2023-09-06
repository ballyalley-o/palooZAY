import { useState } from 'react'

const HashTagInput = ({ id, value, onChange, onKeyPress }) => {
  return (
    <div>
      <input
        id={id}
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
