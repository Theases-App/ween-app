const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');



const Reservation = require('./reservation');

const Payment = sequelize.define('payment', {
  idpayment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  payment: DataTypes.STRING(225),
});







module.exports = Payment;
