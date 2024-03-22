const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Message = sequelize.define('message', {
  content:{
    type: DataTypes.TEXT("long"),
    allowNull:false,
}
});


module.exports = Message;





/*const { DataTypes } = require('sequelize');
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
  timestamps: false // If you don't have timestamp columns
});

module.exports = Message;*/
