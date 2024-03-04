const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Block = sequelize.define('block', {
  idblock: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  tableName: 'block',
  timestamps: false
});


module.exports = Block;
