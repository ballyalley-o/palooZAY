const middleware = (req, res, next) => {
  if (!next.isAuthenticated()) {
    res.redirect('/login')
  } else {
    next()
  }
}

export default middleware
