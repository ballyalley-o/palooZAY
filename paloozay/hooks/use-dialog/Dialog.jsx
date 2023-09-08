import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Dialog = ({ handleOpen, handleClose, close, content, title }) => {
  //   const [open, setOpen] = useState(false)

  //   const handleClose = () => {
  //     setOpen(false)
  //   }

  return (
    <div>
      {handleOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50'>
          <div className='dialog-content'>
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-lg text-gray-200'>{content}</p>
            <button onClick={handleClose}>{close}</button>
          </div>
        </div>
      )}
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
  close: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
}

export default Dialog
