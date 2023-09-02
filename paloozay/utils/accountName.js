const accountName = (Name) => {
  if (!Name) {
    return
  }
  if (Name?.slice(-1) === 's') {
    return `${Name}'`
  }
  return `${Name}'s`
}

export default accountName
