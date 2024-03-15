const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
/*const Message=require("./message.js")
const {Event}=require("./event.js")
const User=require("./user.js")*/
const ChatRoom = sequelize.define('chatRoom', {

});
/*
//relation between chatRoom and Users
User.hasMany(ChatRoom)
ChatRoom.belongsTo(User)
//relation between chatRoom and messages
ChatRoom.hasMany(Message)
Message.belongsTo(ChatRoom)

*/
module.exports = ChatRoom;


