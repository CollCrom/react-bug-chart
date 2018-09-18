const ApiCall = () => {
  return fetch('https://ups-bugs-api.herokuapp.com/bugs/getAll')
}

export { ApiCall }