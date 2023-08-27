import '@theme/css/globals.css'
import { META } from '@constants/meta-data'
// components
import Logo from '@components/Logo'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Toast from '@components/ToastContainer'

export const metadata = META

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
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
