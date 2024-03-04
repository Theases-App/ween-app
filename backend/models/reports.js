const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Reports = sequelize.define('reports', {
  idreports: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  report: DataTypes.STRING(225),
  namereporter: DataTypes.STRING(45)
}, {
  tableName: 'reports',
  timestamps: false
});



module.exports = Reports;
