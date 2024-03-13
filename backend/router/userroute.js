const express = require('express')
const router =express.Router()
const controller = require('../controller/usercontroller')

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:iduser', controller.destroyUser)

router.get('/getallusers',controller.getusers)

router.get('/getclients',controller.getClients)

router.get('/getadmins',controller.getadmins)
router.get('/getuser/:iduser', controller.getOne)
router.put('/editimage/:iduser',controller.updateuserimage)
router.put("/editcountry/:iduser",controller.updateusercountry)
router.put("/editprofile/:iduser",controller.editprofile)
module.exports = router