const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Favorit = sequelize.define('favorit', {
  idfavorit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event: DataTypes.STRING(225)
}, {
  tableName: 'favorit',
  timestamps: false
});



module.exports = Favorit;
