const HOME = '/'

const SubLink = {
  path: '/sublink',
  CREATE_PROMPT: '/create-prompt',
  UPDATE_PROMPT: (id) => `/${id}`,
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
    get: (id) => `/${id}`,
    create: '/create',
    update: (id) => `/update?id=${id.toString()}`,
  },
  user: {
    path: '/users',
    new: '/new',
    all: '/all',
    create: '/create',
    user: (id) => `/${id}`,
    user_posts: (id) => `/${id}/posts`,
  },
}

const apiPath = (parentPath, path) => {
  return API.root + parentPath + (path || '')
}

const PATH = {
  home: HOME,
  createPrompt: SubLink.path + SubLink.CREATE_PROMPT,
  getPrompt: (id) => apiPath(API.prompt.path, API.prompt.get(id)),
  updatePrompt: (id) => API.prompt.path + API.prompt.update(id),
  deletePrompt: (id) => apiPath(API.prompt.path, API.prompt.get(id)),
  new: apiPath(API.prompt.path, API.prompt.new),
  feed: apiPath(API.prompt.path),
  users: apiPath(API.user.path, API.user.user),
  user_posts: (id) => apiPath(API.user.path, API.user.user_posts(id)),
}

export default SubLink
export { PATH, API }
