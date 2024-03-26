const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const {Event} = require("../models/event");

const Notification = sequelize.define('notification', {
  idnotification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  notification: DataTypes.STRING(45),
  event_idevent: {  
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seen:DataTypes.STRING(45)
}, {
  tableName: "notifications"
});

Event.hasOne(Notification, { foreignKey: 'event_idevent' });
Notification.belongsTo(Event, { foreignKey: 'event_idevent' });

module.exports = Notification;