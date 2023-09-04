import PropTypes from 'prop-types'
// styles
import * as _ from '@theme/styles'
// constants
import { _types } from '@constants'

const FormLabel = ({ type }) => {
  return (
    <>
      <h1 className={_.StyledFormLabelH1}>
        <span className='vice'>{_types[type]?.label(type)}</span>
      </h1>
      <p className={_.StyledFormDescP}>{_types[type]?.description}</p>
    </>
  )
}

FormLabel.propTypes = {
  type: PropTypes.any,
}

export default FormLabel
