const express = require('express')
const router =express.Router()
const controller = require('../controller/usercontroller')

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)

router.put("/block/:id",controller.updateBlockedUser)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:id', controller.destroyUser)

router.get('/getallusers',controller.getusers)

router.get('/getclients',controller.getClients)

router.get('/getadmins',controller.getadmins)

module.exports = router