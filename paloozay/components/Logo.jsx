import { FcStumbleupon } from 'react-icons/fc'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='object-contain h-10 '>
      <h1 className='border-2 text-xl text-gray-900 p-2 s'>
        paloo
        <FcStumbleupon className='text-xl' alt='paloozay logo' />
        ZAY
      </h1>
    </div>
  )
}

export default Logo
