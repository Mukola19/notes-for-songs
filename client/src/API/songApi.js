import { $authHost } from '.'

class SongApi {
  async getSongs(folderId = null, term = null) {
    const params = {}
    if(folderId) params.folderId = folderId
    if(term) params.term = term

    const res = await $authHost.get('/songs', { params })
    return res.data
  }

  async getOneSong(songId) {
    const res = await $authHost.get('/songs/' + songId)
    return res.data
  }

  async create(form) {
    const res = await $authHost.post('/songs', form)
    return res.data
  }

  async update(form) {
    const res = await $authHost.put('/songs', form)
    return res.data
  }

  async delete(songId) {
    const res = await $authHost.delete('/songs/' + songId)
    return res.data
  }
}

export const songApi = new SongApi()
