const  { Router } = require('express')
const router = Router()

router.use('/user', require('./userRouter'))
router.use('/songs', require('./songsRouters'))
// router.use('/categories', require('./categoriesRouter'))














module.exports = router