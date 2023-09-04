import PropTypes from 'prop-types'

const TextLaborate = ({ text }) => {
  return <b>{text}</b>
}

TextLaborate.propTypes = {
  text: PropTypes.string,
}

export default TextLaborate
