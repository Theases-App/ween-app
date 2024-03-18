const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const ChatRoom = sequelize.define('chatRoom', {
  idchat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event_idevent: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'chatRoom',
  timestamps: false 
});

module.exports = ChatRoom;


