const express = require('express')
const router =express.Router()
const controller = require('../controller/blockcontroller')

router.get('/check/:id', controller.checkBlock)

router.post('/addblock',controller.addBlock)

router.get('/getblocked',controller.getallblocked)

router.delete('/delblock/:id',controller.deleteFromblock)

module.exports = router