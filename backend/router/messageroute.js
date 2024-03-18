// const express = require('express')
// const router =express.Router()
// const controller = require('../controller/messagecontroller')
const messageRoute = require('express').Router();
const {Addmessage,Getmessage}=require("../controller/messagecontroller.js")

messageRoute.get("/msg/:room",Getmessage)
messageRoute.post("/msg",Addmessage)


module.exports =messageRoute