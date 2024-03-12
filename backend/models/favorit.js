const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const User = require("../models/user").User

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


const getUserFavorites = (iduser) => {
  return Favorit.findAll({
    where: { user_iduser: iduser }
  });
};

module.exports = { Favorit, getUserFavorites };
