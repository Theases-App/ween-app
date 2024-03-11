 const express = require('express')
 const router =express.Router()
 const controller = require('../controller/authentificationcontroller')

 router.get('/get/:id', controller.checkToken)

 router.post('/add/:id', controller.saveToken)
 
 router.delete('/delete/:id', controller.destroyToken)

 
module.exports = router