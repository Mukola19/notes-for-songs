const songsService = require("../service/songs-service")

class SongsControles {
  async create(req, res, next) {
    try {
      const { name, body, description, folderId } = req.body
      const song = await songsService.create(req.user.id, name, body ,description, folderId)
      res.json(song)
    } catch (e) {
      next(e)
    }
  }
 


  async update(req, res, next) {
    try {
        const { name, body , folderId, songId } = req.body
        const song = await songsService.update(songId, name, body , folderId)
        res.json(song)
    } catch (e) {
      next(e)
    }
  } 


  async delete(req, res, next) {
    try {
        const songId = await songsService.delete(req.params.id)
        res.json(songId)
    } catch (e) {
      next(e)
    }
  }

 
  async getSongs(req, res, next) {
    try {
        const { folderId, term } = req.query
        const songs = await songsService.getSongs(req.user.id, folderId, term)
        res.json(songs)
    } catch (e) {
      next(e)
    }
  }


  async getOneSong(req, res, next) {
    try {
        const song = await songsService.getOneSong(req.params.id)
        res.json(song)
    } catch (e) {
      next(e)
    }
  }



}

module.exports = new SongsControles()
