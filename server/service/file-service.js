const { v4 } = require('uuid')
const path = require('path')
// const fs = require('fs')
const { unlink } = require('fs')
const ApiError = require('../ApiError/ApiError')

class FileService {
  add(photo) {
    if (!photo) return ''
    const name = v4() + '.jpg'
    photo.mv(path.join(__dirname, '..', 'static', name))
    return name
  }

  delete(photoName) {
    unlink(path.join(__dirname, '..', 'static', photoName), error => {
      if(error) {
        throw ApiError.internal()

      }
    })
  }
}

module.exports = new FileService()
