import * as _ from '@theme/styles'
import { _types } from '@constants'
// components
import TextLaborate from '@components/TextLaborate'

const MainLabel = () => {
  return (
    <span>
      <h2 className={_.StyledHomeH2}>EASY</h2>
      <h2 className={_.StyledHomeH2}>
        <TextLaborate text='AI' />
      </h2>
      <h2 className={_.StyledHomeH2}>PROMPTS</h2>
    </span>
  )
}

export default MainLabel
