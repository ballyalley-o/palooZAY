const BUTTONS = {
  PRIMARY: 'primary',
  CREATE_PROMPT: 'Create a Prompt',
  SIGN_IN: 'Sign In',
  SIGN_OUT: 'Sign Out',
  FORM: {
    SUBMIT: (submit, type) => (submit ? 'Loading...' : type),
    CANCEL: 'DISCARD',
  },
}

export default BUTTONS
