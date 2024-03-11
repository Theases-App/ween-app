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

Payment.belongsTo(Reservation, { foreignKey: 'categorydetails_has_user_idCategoryUser' });





module.exports = Payment;
