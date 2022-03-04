const  { Router } = require('express')
const foldersControles = require("../controles/foldersControles")
const auth = require("../middleware/authMiddleware")


const router = Router()   

router.get('/',auth, foldersControles.getFolders)
router.post('/',auth, foldersControles.create)
router.put('/',auth, foldersControles.update)
router.delete('/:id',auth, foldersControles.delete)
 








 


module.exports = router