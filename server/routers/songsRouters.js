const  { Router } = require('express')
const songsControles = require('../controles/songsControles')
const auth = require('../middleware/authMiddleware')
const validator = require('../middleware/validatorMiddleware')
const { songValidator } = require('../validators/validators')

const router = Router()   

router.get('/',auth, songsControles.getSongs)
router.get('/:id',auth, songsControles.getOneSong)
router.post('/', auth, songValidator(), validator, songsControles.create)
router.put('/', auth, songValidator(), validator, songsControles.update)
router.delete('/:id', auth, songsControles.delete)
 








 


module.exports = router