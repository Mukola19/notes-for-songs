const  { Router } = require('express')
const router = Router()

router.use('/user', require('./userRouter'))
router.use('/songs', require('./songsRouters'))
router.use('/folders', require('./foldersRouter'))














module.exports = router