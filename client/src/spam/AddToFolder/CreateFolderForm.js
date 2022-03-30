// import React, { useState } from 'react'
// import  { useDispatch } from 'react-redux'
// import { IconButton, ListItem, ListItemIcon } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add'
// import FolderIcon from '@mui/icons-material/Folder'
// import SaveAsIcon from '@mui/icons-material/SaveAs'
// import { AppInput } from '../../../commons/Elements/AppInput/AppInput'
// import { createFolder } from '../../../store/thunks/foldersThunk'
// import st from './SelectFolder.module.scss'
// import { AppButtonIcon } from '../../../commons/AppButtonIcon/AppButtonIcon'


// export const CreateFolderForm = () => {
//   const [name, setName] = useState('')
//   const dispatch = useDispatch()

//   const createHandler = e => {
//     if(e.keyCode === 13) {
//       dispatch(createFolder({ name }))
//     }
//   }

//   return (
//     <ListItem className={st.listItemCreate} disablePadding>
     

//         <AppInput
//           placeholder='Створити папку'
//           onChange={(e) => setName(e.target.value)}
//           onKeyDown={createHandler}
//           value={name}
//         />
//             <AppButtonIcon title='Створити'>
//           <AddIcon color={'color'} />
//         </AppButtonIcon>
       
//     </ListItem>
//   )
// }


// // onClick={() => setIsCreate(true)}