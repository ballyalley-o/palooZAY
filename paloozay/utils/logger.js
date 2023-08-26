import colors from 'colors'

const logger = {
  info: (message) => {
    console.log(colors.bgBlue(message))
  },
  error: (error) => {
    console.log(colors.bgRed(error))
  },
  success: (message) => {
    console.log(colors.bgGreen(message))
  },
  warning: (message) => {
    console.log(colors.bgYellow(message))
  },
  mongo: (message) => {
    console.log(colors.bgMagenta(message))
  },
}

export default logger
