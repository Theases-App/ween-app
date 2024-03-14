const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');



const Reservation = sequelize.define('reservation', {
  idreservation:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  userid:{
    type: DataTypes.INTEGER,
    foreignKey:true,
    allowNull:false
  },
  categorydetails_idcategorydetails:{
    type: DataTypes.INTEGER,
    foreignKey:true,
    allowNull:false
  }

});


const getreservations=(id)=>{
  return Reservation.findAll(id)
}




module.exports = {Reservation,getreservations};
