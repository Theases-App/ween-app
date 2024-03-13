const express = require('express')
const router =express.Router()
const controller = require('../controller/favoritcontroller')


router.post("/addfavorit",controller.createFavorit)

router.get('/:userId', controller.getFavorits);
module.exports=router