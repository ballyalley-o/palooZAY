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
    noId: 'No prompt id found',
    required: 'Prompt content is required',
    notFound: 'Prompts not found',
    found: 'Prompts found',
    updated: 'Prompt updated',
    deleted: 'Prompt deleted',
    placeholder: 'What do you want to write about?',
  },
  CONFIRM: {
    delete_prompt: 'Are you sure you want to delete this prompt?',
  },

  TAG: {
    required: 'Atleast 1 Tag is required',
  },

  ERROR: {
    500: 'Internal Server Error',
    404: 'Not Found',
    403: 'Forbidden',
  },
}

export default SNACKS
