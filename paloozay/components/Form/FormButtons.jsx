import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// route
import { PATH } from '@routes'
// styles
import * as _ from '@theme/styles'
// constants
import { BUTTONS } from '@constants'

const FormButtons = ({ submit, type }) => {
  return (
    <div className={_.StyledFormDiv}>
      <Link href={PATH.home} className={_.StyledFormCancelButton}>
        {BUTTONS.FORM.CANCEL}
      </Link>
      <button type='submit' disabled={submit} className={_.StyledFormButton}>
        {BUTTONS.FORM.SUBMIT(submit, type)}
      </button>
    </div>
  )
}

export default FormButtons
