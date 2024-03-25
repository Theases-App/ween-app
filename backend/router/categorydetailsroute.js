const express = require('express')
const router =express.Router()
const controller = require('../controller/categorydetailscontroller')


router.get("/getall/:eventIdevent",controller.geteventcategory)
router.post("/post/:idcategorydetails",controller.addcategory)

module.exports=router