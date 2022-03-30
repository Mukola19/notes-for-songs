// import React, { useState } from 'react'
// import AddIcon from '@mui/icons-material/Add'
// import { AppButtonIcon } from '../../../commons/AppButtonIcon/AppButtonIcon'
// import st from './SelectFolder.module.scss'
// import { FolderItem } from './FolderItem'
// import { CreateFolderForm } from './CreateFolderForm'

// export const SelectFolder = ({ folders,field  }) => {
//   const [ isCreate, setIsCreate] = useState(false)


//   return (
//     <>
//       <div className={st.header}>
//         <h4>Вибереть папку</h4>
    
//       </div>


//       <div className={st.list}>
//         { true? <CreateFolderForm /> : null}
//         {folders.map(item => (
//           <FolderItem {...item} key={item.id} field={field} />
//         ))}
//       </div>
//     </>
//   )
// }
