const {  DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const UserHasChat = sequelize.define('userhaschat', {
    user_iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    chat_idchat: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'chat',
        key: 'idchat'
      }
    }
  }, {
    tableName: 'userhaschat',
    timestamps: false
  });
  
  module.exports = UserHasChat;