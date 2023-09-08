import { useState } from 'react'
import PropTypes from 'prop-types'
//components
import { Dialog } from '@hooks/use-dialog'
// constants
import { DIALOGS } from '@constants'

const useDialog = () => {
  const [open, setOpen] = useState(false)
  const renderDialog = ({ _type }) => {
    return (
      <Dialog
        handleOpen={open}
        handleClose={() => setOpen(false)}
        content={DIALOGS[_type]?.content}
        title={DIALOGS[_type]?.title}
        close={DIALOGS[_type]?.close}
      />
    )
  }
  return { renderDialog, setOpen }
}

useDialog.propTypes = {
  _type: PropTypes.string,
}

export default useDialog
