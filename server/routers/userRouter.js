const  { Router } = require('express')
const UserControles = require("../controles/userControles")
const auth = require("../middleware/authMiddleware")


const router = Router()


router.post('/registration', UserControles.registration)
router.post('/login', UserControles.login)
router.get('/logout',auth, UserControles.logout)
router.get('/refresh', UserControles.refresh)
 











module.exports = router