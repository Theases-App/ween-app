const express = require('express')
const router =express.Router()



const controller = require('../controller/stripe')
router.post('/create-payment-intent',controller.Add)
module.exports=router
