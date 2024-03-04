const { DataTypes } = require('sequelize');
const sequelize = require('../database/index')


const Notification = sequelize.define('notification', {
    idnotification: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    notification: DataTypes.STRING(45)
  });

  module.exports = Notification