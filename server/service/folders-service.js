const Folder = require("../models/Folder")
const Song = require("../models/Song")
const FolderDto = require("../dtos/folder-Dto")
const ApiError = require("../ApiError/ApiError")
const { getSongs } = require("./songs-service")
const SongsDto = require("../dtos/songs-dto")

class FoldersService {
  async create(owner, name) {
    const candidate = await Song.findOne({ owner, name })
    if (candidate) {
      return candidate
    }

    const folder = await Folder.create({ owner, name })

    const folderDto = new FolderDto(folder)

    folderDto.songs = []
    return folderDto
  }

  async update(folderId, name) {
    const folder = await Folder.findById(folderId)
    folder.name = name
    folder.save()
    const folderDto = new FolderDto(folder)

    return folderDto
  }

  async getFolders(owner) {
    const folders = await Folder.find({ owner })

    const newFolders = []
    for (let folder of folders) {
      // const songs = await getSongs(owner, folder._id)

      newFolders.push({
        id: folder._id,
        name: folder.name,
      })
    }

    return newFolders
  }

  async getFolder(folderId) {
    const folder = await Folder.findById(folderId)

    const songs = await getSongs(owner, folder._id)

    const folderDto = new FolderDto(folder)
    const songsDto = new SongsDto(songs)

    folderDto.songs = songsDto

    return folderDto
  }

  async delete(folderId) {
    await Folder.findByIdAndDelete(folderId)
    await Song.deleteMany({ folder: folderId })
    return { message: "Папку видалено" }
  }
}

module.exports = new FoldersService()

// 622210cb7e3d6b743cd0cc9b

// {
//   'name':'ytytytyty',
//   'body':'jidvsdvfdvvnvnvnvnvnvnvnvnvnvnvnv',
//   'folderId':'622210cb7e3d6b743cd0cc9b'
// }
