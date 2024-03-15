const express = require('express')
const router =express.Router()
const controller = require('../controller/reservationcontroller')



router.post("/add/:userid/:categorydetails_idcategorydetails/:idevent",controller.doreservation)
router.get("/getall",controller.getallres)
router.get("/getall/:userid/:idevent",controller.getoneres)
module.exports=router




