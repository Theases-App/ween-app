const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


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
});

module.exports = Message;
