const Song = require('../models/Song')
const ApiError = require('../ApiError/ApiError')
const SongDto = require('../dtos/song-dto')
const SongsDto = require('../dtos/songs-dto')

class SongsService {
  async create(userId, name, body, description, folderId) {
    const candidate = await Song.findOne({ userId, name, folderId })

    if (candidate) throw ApiError.badRequest('Така пісня вже є')

    const song = await Song.create({
      userId,
      name,
      body,
      description,
      folderId
    })
    const songDto = new SongDto(song)

    return songDto
  }

  async update(songId, name, body, description, folderId) {
    const song = await Song.findByIdAndUpdate(songId, {
      name,
      body,
      description,
      folderId,
    })

    const songDto = new SongDto(song)

    return songDto
  }

  async getSongs(userId, folderId, term) {
    let songs = []

    if (!folderId && !term) {
      songs = await Song.find({ userId })
    }
    if (!folderId && term) {
      songs = await Song.find({
        userId,
        name: { $regex: term, $options: 'i' },
      })
    }
    if (folderId && !term) {
      songs = await Song.find({ userId, folderId })
    }
    if (folderId && term) {
      songs = await Song.find({
        userId,
        folderId,
        name: { $regex: term, $options: 'i' },
      })
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
