const express = require('express')
const router =express.Router()
const controller=require("../controller/userhasnotifcations")


router.get("/:iduser",controller.getusernotifications)

module.exports = router

