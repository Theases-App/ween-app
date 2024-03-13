// const express = require('express')
// const router =express.Router()
// const controller = require('../controller/chatcontroller')
const roomsRoute = require('express').Router();
const{AddchatRoom,GetRooms,GetRoomOfUsers,GetUserOfRoom}= require("../controller/chatcontroller")

roomsRoute.get("/rooms",GetRooms);
roomsRoute.post("/rooms",AddchatRoom)
roomsRoute.get("/rooms/:id",GetRoomOfUsers)
roomsRoute.get("/room/:id",GetUserOfRoom)


module.exports =roomsRoute;