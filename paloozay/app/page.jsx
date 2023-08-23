import { StyledHome } from '@theme/styles/default'
import Logo from '@components/Logo'
// components
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className={StyledHome}>
      {/* <div className='relative m-12'>
        <Logo />
        <span>
          <h2 className='text-2xl orange_gradient text-center text-gray-700 font-light'>
            Easy AI prompts
          </h2>
        </span>
      </div> */}
      <div className='container'>
        <br className='max-md:hidden' />
        <div className=''>
          <p className='desc text-center font-light'>
            Discover AI Prompts – your creative partner for limitless
            inspiration! Ignite your writing with endless AI-generated prompts.
            Whether a writer, poet, or seeking fresh ideas, our app overcomes
            blocks and fuels imagination. Elevate your writing experience with
            AI Prompts and let your creativity thrive.
          </p>
        </div>
      </div>
      {/* Feed */}
    </section>
  )
}

export default Home
