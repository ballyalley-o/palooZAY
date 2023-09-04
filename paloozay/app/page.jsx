import * as _ from '@theme/styles'
import Logo from '@components/Logo'
// components
import { Feed } from '@components/Feed'
import { MetaDesc } from '@components/Meta'
import { MainLabel } from '@components/Home'
// constants
import { DESC } from '@constants/meta-data'
import { _types } from '@constants'

const Home = () => {
  return (
    <section className={_.StyledHome}>
      <div className={_.StyledHomeContainer}>
        <MainLabel />
        <MetaDesc />
      </div>
      <Feed />
    </section>
  )
}

export default Home
