import { folderApi } from '../../API/folderApi'
import { changeLoading } from '../app/appReducer'
import { setFolder, setFolders } from './foldersReducer'

export const getFolders = () => async dispatch => {
  try {
    dispatch(changeLoading(true))
    const folders = await folderApi.getFolders()
    dispatch(setFolders(folders))
  } catch (e) {
    console.log(e)
  }
  dispatch(changeLoading(false))
}

export const createFolder = form => async dispatch => {
  //form = { name }
  try {
    dispatch(changeLoading(true))
    const folder = await folderApi.create(form)
    dispatch(setFolder(folder))
  } catch (e) {
    console.error(e)
    dispatch(changeLoading(false))
  }
}

export const updateFolder = form => async dispatch => {
  //form = { name, folderId }

  try {
    dispatch(changeLoading(true))
    const folder = await folderApi.update(form)

    dispatch(setFolder(folder))
  } catch (e) {
    console.error(e)
  }
  dispatch(changeLoading(false))
}

export const deleteFolder = folderId => async dispatch => {
  try {
    const data = await folderApi.delete(folderId)
    dispatch(getFolders())
  } catch (e) {
    console.error(e)
  }
}

