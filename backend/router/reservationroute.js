const express = require('express')
const router =express.Router()
const controller = require('../controller/reservationcontroller')



router.post("/add/:userid/:categorydetails_idcategorydetails",controller.doreservation)
router.get("/getall",controller.getallres)

module.exports=router




