import '@theme/css/globals.css'

export const metadata = {
  title: 'palooZAY',
  description: 'AI powered Cues for faster queueing',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
