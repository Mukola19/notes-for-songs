import { $authHost } from '.'

class FolderApi {
  async getFolders() {
    const res = await $authHost.get('/folders')
    return res.data
  }

  async create(form) {
      //form = { name }
    const res = await $authHost.post('/folders', form)
    return res.data
  }

  async update(form) {
      //form = { name, folderId }
    const res = await $authHost.put('/folders', form)
    return res.data
  }

  async delete(folderId) {
    const res = await $authHost.delete('/folders/' + folderId)
    return res.data
  }
}

export const folderApi = new FolderApi()
