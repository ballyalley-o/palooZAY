const HOME = '/'

const SubLink = {
  path: '/sublink',
  CREATE_PROMPT: '/create-prompt',
  ACCOUNT: '/account',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
}

const API = {
  root: '/api',
  prompt: {
    path: '/prompt',
    new: '/new',
    all: '/all',
    create: '/create',
  },
}

const apiPath = (parentPath, path) => {
  return API.root + parentPath + (path || '')
}

const PATH = {
  home: HOME,
  createPrompt: SubLink.path + SubLink.CREATE_PROMPT,
  new: apiPath(API.prompt.path, API.prompt.new),
  feed: apiPath(API.prompt.path),
}

export default SubLink
export { PATH, API }
