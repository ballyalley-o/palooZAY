import { StyledHome } from '@theme/styles/default'
import Logo from '@components/logo'

const Home = () => {
  return (
    <section className={StyledHome}>
      <div className='relative m-12'>
        <Logo />
      </div>

      <h2 className='text-3xl text-center text-gray-700'>
        Welcome to Paloozay!
      </h2>
    </section>
  )
}

export default Home
