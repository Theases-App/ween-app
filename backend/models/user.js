const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Block=require("../models/block").Block

const User = sequelize.define('user', {
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    }
  }, {
    tableName: 'user',
    timestamps: false
  });
  // User.belongsTo(Block)

  const getOneUser = (iduser) => {
    return User.findOne({where: {iduser: iduser}})
  }
  
  const addUser = (data) => {
    return User.create(data)
  }
  
  
  const editUser = (id, data) => {
    return User.update(data, {where: {iduser: id}})
  }
  
  const getAll = () => {
    return User.findAll({include:Block})
  }

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
    
    module.exports = {User, getOneUser, addUser, editUser, getAll, findClients, findadmins,deleteUser} 

 

 