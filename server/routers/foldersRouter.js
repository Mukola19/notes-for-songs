const  { Router } = require('express')
const foldersControles = require('../controles/foldersControles')
const auth = require('../middleware/authMiddleware')
const validator = require('../middleware/validatorMiddleware')
const { folderValidator } = require('../validators/validators')


const router = Router()   

router.get('/', auth, foldersControles.getFolders)
router.post('/', auth, folderValidator(), validator, foldersControles.create)
router.put('/', auth, folderValidator(), validator, foldersControles.update)
router.delete('/:id', auth, foldersControles.delete)
 








 


module.exports = router