import { adjectives, nouns } from '@utils/generate-username/mock-arr'

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function splitName(name) {
  return name.split(' ')[0]
}

function generateRandomUsername(name) {
  const adjective = getRandomElement(adjectives)
  const noun = getRandomElement(nouns)

  return `${adjective}${splitName(name)}the${noun}`
}

const randomUsername = (name) => generateRandomUsername(name)

export default randomUsername
