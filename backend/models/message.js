const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
//const User=require("./user.js")

const Message = sequelize.define('message', {

  idmessage: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  chatRoom_idchat: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_iduser: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'message',
  timestamps: false 

  content:{
    type: DataTypes.TEXT("long"),
    allowNull:false,
}

});

//relation between Messages and users
/*User.hasMany(Message)
Message.belongsTo(User)*/

module.exports = Message;
