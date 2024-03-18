const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
// const Block=require("../models/block").Block


  
  const User = sequelize.define('User', {
    iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    emailphone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
   /* blockIdblock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'block',
        key: 'idblock'
      }
    },
    reservationIdreservation: {
      type: DataTypes.INTEGER,
      allowNull: true
    }*/
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false
  });
  
  module.exports = User;
  



  const getOneUser = (iduser) => {
    return User.findOne({where: {emailphone: iduser}})

  }
  
  const addUser = (data) => {
    return User.create(data)
  }
  
  
  const editUser = (id, data) => {
    return User.update(data, {where: {iduser: id}})
  }
  
  // const getAll = () => {
  //   return User.findAll({include:Block})
  // }

  const findClients = () => {
    return User.findAll({
      where: {
        role: "client"
      }
    });
    }
    const findadmins = () => {
      return User.findAll({
        where: {
          role: "admin"
        }
      });
      }
      const deleteUser=(id)=>{
        return User.destroy({where :{iduser:id}})
      }
    

    module.exports = {User, getOneUser, addUser, editUser,  findClients, findadmins,deleteUser} 

 

 