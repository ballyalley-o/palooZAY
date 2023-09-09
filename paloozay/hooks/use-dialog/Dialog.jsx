import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Dialog = ({
  handleOpen,
  handleClose,
  onClick,
  close,
  confirm,
  content,
  title,
}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(false)

  const handleOpenClick = () => {
    setOpen(true)
    if (handleOpen) {
      handleOpen()
    }
  }
  const handleCloseClick = () => {
    setOpen(false)
    if (handleClose) {
      handleClose()
    }
  }

  return (
    <div className='dialog ' onClick={handleOpenClick}>
      <div className='bg-primary-orange'>
        <h1 className='text-xl'>{title}</h1>
      </div>
      <hr />
      <div className=''>
        <div className='dialog-wrapper '>
          <div className='gap-3'>{content}</div>
          <button className='dialog-close' type='button' onClick={onClick}>
            {confirm}
          </button>
          <button
            className='dialog-close mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600'
            onClick={handleCloseClick}
          >
            {close}
          </button>
        </div>
      </div>
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
  close: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  handleOpen: PropTypes.bool,
}

export default Dialog
