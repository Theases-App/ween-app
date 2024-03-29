const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const CategoryDetails = sequelize.define('categorydetails', {
  idcategorydetails: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  feature: DataTypes.STRING(45),
  price: DataTypes.INTEGER,
});


const geteventcat = (id) => {
  return CategoryDetails.findAll({where:{eventIdevent:id}})
}
const addcat=(data)=>{
  return CategoryDetails.create(data)
}




module.exports = {CategoryDetails,geteventcat,addcat};
