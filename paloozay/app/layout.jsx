import '@theme/css/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { META } from '@constants/meta-data'
// components
import Meta from '@components/Meta'
import { Nav } from '@components/Nav'
import MainGradient from '@components/MainGradient'
import Provider from '@components/Provider'
import Toast from '@components/ToastContainer'
// constants
import { GLOBAL } from '@config'

export const metadata = META

const RootLayout = ({ children }) => {
  return (
    <html lang={GLOBAL.LOCALE}>
      <Meta />
      <body>
        <Provider>
          <MainGradient />
          <main className='app'>
            <Nav />
            <div>{children}</div>
          </main>
          <Toast />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
