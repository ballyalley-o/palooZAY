import Image from 'next/image'
// styles
import { StyledLoaderWrapper } from '@theme/styles'
// assets
import { ASSETS } from '@config'

const Loading = () => {
  return (
    <div className={StyledLoaderWrapper}>
      <Image {...ASSETS.loader} />
    </div>
  )
}

export default Loading
