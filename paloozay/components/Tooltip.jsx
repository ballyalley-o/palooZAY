import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ content, children }) => {
  return (
    <div className='tooltip-container relative flex'>
      {children}
      <div className='tooltip orange_gradient font-satoshi bold text-xl'>
        {content}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string,
}

export default Tooltip
