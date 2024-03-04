const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Chat = sequelize.define('chat', {
  idchat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sender: DataTypes.STRING(225),
  reciever: DataTypes.STRING(225),
  participantsnumber: DataTypes.INTEGER
}, {
  tableName: 'chat',
  timestamps: false
});

module.exports = Chat;
