export default (word, lengthword = 10) => {
  if (word.split('').length > lengthword) {
    return word.split('').slice(0, lengthword).join('') + '...'
  }
  return word
}
