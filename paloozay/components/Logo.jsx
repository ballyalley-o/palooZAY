import { FcStumbleupon } from 'react-icons/fc'
import Image from 'next/image'
// styles
import * as _ from '@theme/styles'
// config assets
import { ASSETS } from '@config'

const Logo = () => {
  return (
    <div className={_.StyledLogoWrapperDiv}>
      <h1 className={_.StyledLogoH1}>
        <i>paloo</i>
        <Image {...ASSETS.main} />
        ZAY
      </h1>
    </div>
  )
}

export default Logo
