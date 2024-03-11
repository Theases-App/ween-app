const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Favorit = sequelize.define('favorit', {
  idfavorit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = Favorit;
