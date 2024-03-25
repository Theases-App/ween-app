const {User}=require("../models/user.js")
const Message=require("../models/message.js")

const Getmessage=async(req,res)=>{
    try {
        const result=await Message.findAll({where:{eventIdevent:req.params.room},include:User})  
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

const Addmessage = async(req, res)=>{
    try {
        const result=await Message.create(req.body)
  res.send(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {Addmessage,Getmessage}