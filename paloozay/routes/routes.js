const HOME = '/'

const SubLink = {
  path: '/sublink',
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
    update: (id) => `/update?id=${id}`,
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
  createPrompt: API.prompt.path + API.prompt.create,
  getPrompt: (id) => apiPath(API.prompt.path, API.prompt.get(id)),
  updatePrompt: (id) => API.prompt.path + API.prompt.update(id),
  deletePrompt: (id) => apiPath(API.prompt.path, API.prompt.get(id)),
  new: apiPath(API.prompt.path, API.prompt.new),
  feed: apiPath(API.prompt.path),
  users: (id) => apiPath(API.user.path, API.user.user(id)),
  user_posts: (id) => apiPath(API.user.path, API.user.user_posts(id)),
}

export default SubLink
export { PATH, API }
