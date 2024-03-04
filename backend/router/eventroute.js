const express = require('express')
const router =express.Router()
const controller = require('../controller/eventcontroller')

router.get('/getall', controller.getAll)
router.get('/getall/:eventcategory',controller.geteventbycategory)
router.get('/getall/:id',controller.getevent)
router.post('/add/:id',controller.addevents)
router.put('/update/:id',controller.updateevent)
router.delete('/delete/:id',controller.deletedevents)


module.exports=router