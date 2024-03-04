const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Payment = sequelize.define('payment', {
  idpayment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  payment: DataTypes.STRING(225)
}, {
  tableName: 'payment',
  timestamps: false
});



module.exports = Payment;
