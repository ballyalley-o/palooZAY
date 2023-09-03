import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      position='bottom-right'
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

export default Toast
