const express = require('express')
const router =express.Router()
const controller = require('../controller/favoritcontroller')


router.post("/addfavorit",controller.createFavorit)
router.get('/:user_iduser', controller.getFavorites);
router.delete('/:idevent',controller.deleteFavoritByEventId)
module.exports=router