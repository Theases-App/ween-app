const express = require('express')
const router =express.Router()
const controller = require('../controller/notificationcontroller')

router.get("/notif",controller.getnot)

module.exports = router