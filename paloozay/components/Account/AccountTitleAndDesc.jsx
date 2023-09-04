import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'

const AccountTitleAndDesc = ({ name, content }) => {
  return (
    <>
      <h1 className={_.StyledAccount}>
        <span>{name}</span>
      </h1>
      <p className={_.StyledAccountContentP}>{content}</p>
    </>
  )
}

AccountTitleAndDesc.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
}

export default AccountTitleAndDesc
