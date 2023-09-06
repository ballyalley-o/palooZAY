import React, { useState } from 'react'

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open dialog</button>
      {open && (
        <div className='dialog'>
          {children}
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Dialog
