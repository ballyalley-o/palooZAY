import { StyledHome } from '@theme/styles/default'
import Logo from '@components/Logo'
// components
import Feed from '@components/Feed/Feed'
// constants
import { DESC } from '@constants/meta-data'

const Home = () => {
  return (
    <section className={StyledHome}>
      <div className=' text-center'>
        <span>
          <h2 className='text-8xl orange_gradient text-center text-gray-700 font-light'>
            EASY <b>AI</b> PROMPTS
          </h2>
        </span>
        <br className='max-md:hidden' />
        <div className=''>
          <p className='desc text-center font-light'>{DESC}</p>
        </div>
      </div>
      <Feed />
    </section>
  )
}

export default Home
