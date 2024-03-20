const chatRoom = require("../models/chatroom.js")
const {Event}= require("../models/event.js")
const User = require("../models/user.js")

const GetRooms=async(req,res)=>{
    try {
        const result=await chatRoom.findAll({include:Event})  
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

const AddchatRoom = async(req, res)=>{
    try {
    const result=await chatRoom.create(req.body)
     res.send(result)
    } catch (error) {
        res.send(error)
    }
}


const GetRoomOfUsers = async(req,res)=>{
    try {
        const result=await chatRoom.findAll({where:{UserIduser:req.params.id},include:Event})  
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

const GetUserOfRoom = async(req, res)=>{
    try {
    const result=await chatRoom.findAll({attributes:['UserIduser'],where:{eventIdevent:req.params.id},include:User})  
    res.send(result)
} catch (error) {
    res.send(error)
}

}


module.exports ={AddchatRoom,GetRooms,GetRoomOfUsers,GetUserOfRoom}
