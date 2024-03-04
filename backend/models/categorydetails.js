const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const CategoryDetails = sequelize.define('categorydetails', {
  idcategorydetails: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  feature1: DataTypes.STRING(45),
  feature2: DataTypes.STRING(45),
  feature3: DataTypes.STRING(45),
  feature4: DataTypes.STRING(45),
  price1: DataTypes.STRING(45),
  price2: DataTypes.STRING(45),
  price3: DataTypes.STRING(45),
  price4: DataTypes.STRING(45)
}, {
  tableName: 'categorydetails',
  timestamps: false
});



module.exports = CategoryDetails;
