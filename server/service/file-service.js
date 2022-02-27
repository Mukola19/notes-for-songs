const {  v4 } = require("uuid")
const path = require("path")
// const ApiError = require('../error/ApiError')

class FileService {
  async add(img) {
    if (!img) {
      return ""
    }

    const name = v4 + ".jpg"
    img.mv(path.join(__dirname, "..", "static", name))

    return name
  }

  async delete() {}
}

module.exports = new FileService()
