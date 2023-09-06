import React from 'react'
import PropTypes from 'prop-types'
import { signIn } from 'next-auth/react'
// styles
import * as _ from '@theme/styles'
// constants
import { BUTTONS } from '@constants'

const AuthButton = ({ provider, onClick, content, signIn }) => {
  return (
    <div className={_.StyledMenuWrapperDiv}>
      <button
        type='button'
        key={signIn && provider.id}
        onClick={() => onClick(provider)}
        className={!signIn ? _.StyledSignOutBtn : _.StyledSignedInDiv}
      >
        {content || BUTTONS.SIGN_IN}
      </button>
    </div>
  )
}

AuthButton.propTypes = {
  provider: PropTypes.object,
  onClick: PropTypes.func,
  signIn: PropTypes.bool,
  disabled: PropTypes.bool,
}

AuthButton.defaultProps = {
  onClick: (provider) => {
    signIn(provider.id)
  },
}

export default AuthButton
