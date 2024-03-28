const express = require('express');
const router = express.Router();
const controller = require('../controller/notificationcontroller');

router.get("/notif", controller.getNotificationsForEvent);
router.post("/add", controller.createNotification);
router.put("/update/:idnotification", controller.updateSeenStatus);

module.exports = router;
