const { DataTypes } = require('sequelize');
const sequelize = require('../database/index')


const Notifications = sequelize.define('notifications', {
  idnotification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  notification: DataTypes.STRING(45),
});



module.exports = Notifications;
