const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const User = require("../models/user");
const Event=require("../models/event")
const Favorit = sequelize.define('favorit', {
  idfavorit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_iduser:{
    type: DataTypes.INTEGER,
    allowNull: false 
  },
  event_idevent:{
    type: DataTypes.INTEGER,
    allowNull: false 
  }
}, {
  tableName: 'favorit' 
});
Favorit.belongsTo(User.User, { foreignKey: 'user_iduser' }); 
Favorit.belongsTo(Event.Event, { foreignKey: 'event_idevent' });
module.exports = Favorit;
