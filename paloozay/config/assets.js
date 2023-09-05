// styles
import * as _ from '@theme/styles'

export const ASSETS = {
  // logo
  main: {
    src: '/assets/images/logo.svg',
    width: 15,
    height: 15,
    alt: 'profile',
    className: _.StyledLogo,
  },
  // loader
  loader: {
    src: '/assets/icons/loader.svg',
    alt: 'loader',
    width: 50,
    height: 50,
    className: _.StyledLoader,
  },
  google: {
    src: (session) => session?.user.image,
    width: 40,
    height: 40,
    alt: 'profile',
    className: _.StyledLogo,
  },
  prompt: {
    src: (post) => post.creator?.image,
    size: {
      width: 40,
      height: 40,
    },
  },
}
