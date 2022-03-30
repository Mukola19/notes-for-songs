const Song = require("../models/Song")
const ApiError = require("../ApiError/ApiError")
const SongDto = require("../dtos/song-dto")
const SongsDto = require("../dtos/songs-dto")

class SongsService {
  // owner = userId
  async create(owner, name, body, folderId) { 
    const candidate = await Song.findOne({ owner, name , folder: folderId })
    if (candidate) {
      throw ApiError.errStatus400('Така пісня вже є')
    }

    const song = await Song.create({ owner, name, body, folder: folderId })
    const songDto = new SongDto(song)

    return songDto
  }

  async update(songId, name, body, folderId) {
    const song = await Song.findByIdAndUpdate(songId, { name, body, folder: folderId })

    const songDto = new SongDto(song)

    return songDto
  }

  async getSongs(userId, folderId) {
    let songs = []
    if (folderId) {
      songs = await Song.find({ owner: userId, folder: folderId })
    } else {
      songs = await Song.find({ owner: userId })
    }

    const songsDto = songs.map((song) => new SongsDto(song))

    return songsDto
  }

  async getOneSong(songId) {
    const song = await Song.findById(songId)

    const songDto = new SongDto(song)

    return songDto
  }

  async delete(songId) {
    const data = await Song.findByIdAndDelete(songId)
    return data
  }
}

module.exports = new SongsService()
