import * as _ from '@theme/styles'
import { _types } from '@constants'
// components
import TextLaborate from '@components/TextLaborate'

const MainLabel = () => {
  return (
    <span>
      <h2 className={_.StyledHomeH2}>{_types.MAIN.main}</h2>
      <h2 className={_.StyledHomeH2}>
        <TextLaborate text={_types.MAIN.sub} />
      </h2>
      <h2 className={_.StyledHomeH2}>{_types.MAIN.dub}</h2>
    </span>
  )
}

export default MainLabel
