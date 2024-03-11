const {  DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const UserHasNotifications = sequelize.define('user_has_notifications', {
  user_iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  notifications_idnotification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});


module.exports = UserHasNotifications;
