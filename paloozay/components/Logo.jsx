import { FcStumbleupon } from 'react-icons/fc'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='object-contain h-10 mt-5 mb-15'>
      <h1 className='border-2 text-xl text-gray-100 p-2 s'>
        paloo
        <FcStumbleupon className='text-xl' alt='paloozay logo' />
        ZAY
      </h1>
    </div>
  )
}

export default Logo
