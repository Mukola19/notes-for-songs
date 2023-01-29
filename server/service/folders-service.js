const Folder = require('../models/Folder')
const Song = require('../models/Song')
const FoldersDto = require('../dtos/folders-Dto')
const ApiError = require('../ApiError/ApiError')

class FoldersService {
  async create(userId, name, description) {
    const candidate = await Folder.findOne({ userId, name })

    if (candidate) throw ApiError.badRequest('Така папка вже є')
     
    const folder = await Folder.create({ userId, name, description })
    const folderDto = new FoldersDto(folder)

    return folderDto
  }

  async update(folderId, name, description) {
    const folder = await Folder.findById(folderId)
    folder.name = name
    folder.description = description
    folder.save()

    const folderDto = new FoldersDto(folder)
    return folderDto
  }

  async getFolders(userId) {
    const folders = await Folder.find({ userId })
    const foldserDto = folders.map(folder => new FoldersDto(folder))

    return foldserDto
  }

  async delete(folderId) {
    await Folder.findByIdAndDelete(folderId)
    await Song.deleteMany({ folderId })
    return { message: 'Папку видалено' }
  }
}

module.exports = new FoldersService()
