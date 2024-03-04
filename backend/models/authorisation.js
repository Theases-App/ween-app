const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Authorisation = sequelize.define('authorisation', {
  idauthorisation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: {
    type: DataTypes.STRING(225),
    allowNull: true
  }
}, {
  tableName: 'authorisation',
  timestamps: false
});

const addToken = (token) => {
    return Authorisation.create(token)
  }
  
  const getToken = (id) => {
    return Authorisation.findOne({where: {userIduser: id}})
  }
  
  const deleteToken = (id) => {
    return Authorisation.destroy({where: {userIduser: id}})
  }

module.exports = {Authorisation, addToken, getToken, deleteToken};
