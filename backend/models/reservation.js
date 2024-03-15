const { DataTypes, where } = require('sequelize');
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
  },
      idevent:{
      type: DataTypes.INTEGER,
      foreignKey:true,
      allowNull:false
    }
  }

);


const getreservations=(id)=>{
  return Reservation.findAll(id)
}
const getreservation=(userid,idevent)=>{
  console.log(userid,idevent);
  return Reservation.findAll({where :{userid:userid, idevent:idevent}})
  
}


module.exports = {Reservation,getreservations,getreservation};
