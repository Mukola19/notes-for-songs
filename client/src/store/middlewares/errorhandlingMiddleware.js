export default ({ dispatch }) => {
  return (next) => {
    return (action) => {

      return next(action)
    }
  }
}
