const {  DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const UserHasChat = sequelize.define('user_has_chat', {
  user_iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  chat_idchat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, {
  tableName: 'user_has_chat',
  timestamps: false, 
});


  
  module.exports = UserHasChat;