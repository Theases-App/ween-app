const { DataTypes } = require('sequelize');
const sequelize = require('../database/index')
const Event=require("../models/event")


const Notifications = sequelize.define('notifications', {
  idnotification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  notification: DataTypes.STRING(45),
  event_idevent:{
    type: DataTypes.INTEGER,
    allowNull: false 
  }
  
},{
  tableName:"notifications"
});
Notifications.belongsTo(Event.Event, { foreignKey: 'event_idevent' });


module.exports = Notifications;
