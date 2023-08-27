const SNACKS = {
  EMAIL: {
    exists: 'Email already exists',
    notFound: 'Email not found',
    required: 'Email is required',
  },
  USERNAME: {
    exists: 'Username already exists',
    notFound: 'Username not found',
    required: 'Username is required',
    invalid:
      'Username must be 8-20 characters long and can only contain letters and numbers',
  },
  PROMPT: {
    required: 'Prompt content is required',
    notFound: 'Prompts not found',
    found: 'Prompts found',
  },

  TAG: {
    required: 'Atleast 1 Tag is required',
  },
}

export default SNACKS
