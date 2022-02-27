const  { Router } = require('express')
const songsControles = require("../controles/songsControles")
const auth = require("../middleware/authMiddleware")


const router = Router()   

router.get('/',auth, songsControles.getSongs)
router.get('/:id',auth, songsControles.getOneSong)
router.post('/',auth, songsControles.create)
router.put('/',auth, songsControles.update)
router.delete('/:id',auth, songsControles.delete)
 








 


module.exports = router