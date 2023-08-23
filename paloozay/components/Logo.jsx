import { FcStumbleupon } from 'react-icons/fc'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='object-contain h-10 p-2'>
      <h1 className='border-2 head_text text-gray-700 p-2 m-10'>
        paloo
        <FcStumbleupon className='text-6xl' alt='paloozay logo' />
        ZAY
      </h1>
    </div>
  )
}

export default Logo
