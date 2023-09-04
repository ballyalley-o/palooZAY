import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'

const AccountPromptWrapper = ({ children }) => {
  return <div className={_.StyledAccountPromptDiv}>{children}</div>
}

AccountPromptWrapper.propTypes = {
  children: PropTypes.node,
}

export default AccountPromptWrapper
