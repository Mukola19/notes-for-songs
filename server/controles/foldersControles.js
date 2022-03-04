const foldersService = require("../service/folders-service")

class FoldersControles {
  async create(req, res, next) {
    try {
      const { name } = req.body
      const type = await foldersService.create(req.user.id, name)
      res.json(type)
    } catch (e) {
      next(e)
    }
  }

  async update(req, res, next) {
    try {
      const { name, folderId } = req.body
      const type = await foldersService.update(folderId, name)
      res.json(type)
    } catch (e) {
      next(e)
    }
  }

  async delete(req, res, next) {
    try {
      const type = await foldersService.delete(req.params.id)
      res.json(type)
    } catch (e) {
      next(e)
    }
  }

  async getFolders(req, res, next) {
    try {
      const folders = await foldersService.getFolders(req.user.id)
      res.json(folders)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new FoldersControles()
