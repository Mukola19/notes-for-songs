const  { Router } = require('express')
const UserControles = require("../controles/userControles")
const auth = require("../middleware/authMiddleware")
const validatorMiddleware  = require('../middleware/validatorMiddleware')
const { registrationValidator , loginValidator}  = require('../validators/validators')


const router = Router()


router.post('/registration', registrationValidator(), validatorMiddleware, UserControles.registration)
router.post('/login', loginValidator(), validatorMiddleware, UserControles.login)
router.get('/logout', auth, UserControles.logout)
router.get('/refresh',auth, UserControles.refresh)
router.get('/activate/:link', UserControles.activate)
router.post('/photo',auth, UserControles.setPhoto)
router.delete('/photo',auth, UserControles.deletePhoto)
 


 








module.exports = router