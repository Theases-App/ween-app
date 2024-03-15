const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
//const User=require("./user.js")

const Message = sequelize.define('message', {
  content:{
    type: DataTypes.TEXT("long"),
    allowNull:false,
}
});

//relation between Messages and users
/*User.hasMany(Message)
Message.belongsTo(User)*/

module.exports = Message;
