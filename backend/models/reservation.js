const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');



const Reservation = sequelize.define('reservation', {
  idreservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});






module.exports = Reservation;
