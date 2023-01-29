const foldersService = require("../service/folders-service")

class FoldersControles {
  async create(req, res, next) {
    try {
      const { name, description } = req.body
      const folder = await foldersService.create(req.user.id, name, description )
      res.json(folder)
    } catch (e) {
      next(e)
    }
  }

  async update(req, res, next) {
    try {
      const { folderId, name, description  } = req.body
      const folder = await foldersService.update(folderId, name, description)
      res.json(folder)
    } catch (e) {
      next(e)
    }
  }

  async delete(req, res, next) {
    try {
      const folder = await foldersService.delete(req.params.id)
      res.json(folder)
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
