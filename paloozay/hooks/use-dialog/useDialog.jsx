import { useState } from 'react'
import PropTypes from 'prop-types'
//components
import { Dialog } from '@hooks/use-dialog'
// constants
import { DIALOGS } from '@constants'

const useDialog = () => {
  const [open, setOpen] = useState(false)

  const showDialog = () => {
    setOpen(true)
  }

  const hideDialog = () => {
    setOpen(false)
  }

  const renderDialog = (_type, onClick) => {
    return (
      open && (
        <Dialog
          onClick={onClick}
          handleClose={hideDialog}
          content={DIALOGS[_type]?.content}
          title={DIALOGS[_type]?.title}
          confirm={DIALOGS[_type]?.confirm}
          close={DIALOGS[_type]?.close}
        />
      )
    )
  }
  return { showDialog, hideDialog, renderDialog, open }
}

useDialog.propTypes = {
  _type: PropTypes.string,
  onClick: PropTypes.func,
}

export default useDialog
