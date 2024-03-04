const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Message = sequelize.define('message', {
  idchatsroom: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: DataTypes.STRING(225)
}, {
  tableName: 'message',
  timestamps: false
});



module.exports = Message;
