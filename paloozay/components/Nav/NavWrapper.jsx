import React from 'react'
// styles
import * as _ from '@theme/styles'

export const NavMobile = ({ children }) => {
  return <div className={_.StyledMobileDiv}>{children}</div>
}

export const NavDesktop = ({ children }) => {
  return <div className={_.StyledWrapperDiv}>{children}</div>
}
