import { FcStumbleupon } from 'react-icons/fc'
import Image from 'next/image'
// constants
import { ASSETS } from '@constants'

const Logo = () => {
  return (
    <div className='object-contain h-10 mt-5 mb-15'>
      <h1 className='border-2 text-xl text-gray-100 p-2 s'>
        <i>paloo</i>
        <Image
          src={ASSETS.ACCOUNT}
          width={15}
          height={15}
          className='rounded-full'
          alt='profile'
          cursor='auto'
          style={{ cursor: 'arrow' }}
        />
        ZAY
      </h1>
    </div>
  )
}

export default Logo
