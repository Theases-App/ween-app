const express = require('express')
const router =express.Router()
const controller = require('../controller/usercontroller')

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:id', controller.destroyUser)

router.get('/getallusers',controller.getusers)

router.get('/getclients',controller.getClients)

router.get('/getadmins',controller.getadmins)
router.get('/getuser/:emailphone', controller.getOne)
module.exports = router