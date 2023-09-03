import '@theme/css/globals.css'
import 'react-toastify/dist/ReactToastify.css'
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
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='../assets/icons/paloozay.ico' />
      </head>
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
