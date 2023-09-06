import PropTypes from 'prop-types'
import { useSession } from 'next-auth/react'
// styles
import * as _ from '@theme/styles'
// components
import { AccountIcon } from '@components/Account'
// config
import { ASSETS } from '@config'

const AccountTitleAndDesc = ({ name, content }) => {
  const { data: session } = useSession()
  return (
    <>
      <div className='flex justify-space-evenly gap-4 items-center'>
        <span>
          <h1 className={_.StyledAccount}>
            <span>{name}</span>
          </h1>
        </span>
        <span>
          <AccountIcon
            src={ASSETS.google.src(session)}
            href={`/account/${session?.user?._id}`}
            width={80}
            height={80}
          />
        </span>
      </div>

      <p className={_.StyledAccountContentP}>{content}</p>
    </>
  )
}

AccountTitleAndDesc.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
}

export default AccountTitleAndDesc
