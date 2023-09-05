import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// components
import Image from 'next/image'
// styles
import * as _ from '@theme/styles'

const AccountIcon = ({ href, src, width, height }) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt='user_image'
        width={width}
        height={height}
        className={_.StyledImage}
      />
    </Link>
  )
}

AccountIcon.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

AccountIcon.defaultProps = {
  width: 40,
  height: 40,
}

export default AccountIcon
