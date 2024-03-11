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

const addToblock = (data) => {
  return Block.create(data)
}

const getBlocked =()=>{
  return Block.findAll()
}

const getOneBlocked = (id) => {
  return Block.findOne({where:{userIduser: id}})
}

const removefromblock=(id)=>{
  return Block.destroy({where:{user_iduser:id}})
}

module.exports = {Block,addToblock,getBlocked,getOneBlocked,removefromblock};
