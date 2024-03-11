const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Event = sequelize.define('event', {
  idevent: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  eventname: DataTypes.STRING(45),
  eventcategory: DataTypes.STRING(45),
  image: DataTypes.STRING(45),
  price: DataTypes.INTEGER,
  country: DataTypes.STRING(45),
  location: DataTypes.STRING(45),
  placename: DataTypes.STRING(45),
  date: DataTypes.DATE,
  time: DataTypes.TIME,
  payment: DataTypes.INTEGER,
  reservation: DataTypes.INTEGER,
  description: DataTypes.STRING(225),
  map: DataTypes.STRING(225),
  map2: DataTypes.STRING(225),
  phonenumber: DataTypes.INTEGER,
  email: DataTypes.STRING(45),
  facebook: DataTypes.STRING(225),
  instagram: DataTypes.STRING(225),
  numberpeople: DataTypes.INTEGER,
  adminmessage: DataTypes.STRING(225),
  new: DataTypes.INTEGER
}, {
  tableName: 'event',
  timestamps: false
});





const getAllEventcategory = (categroy) => {
  return Event.findAll({where:{eventcategory:categroy}} )
}
const getAllEvent=(id)=>{
  return Event.findAll({where:{idevent:id}})
}
const getAllbyCountry=(countrys)=>{
  return Event.findAll({where:{country:countrys}})
}
const getAllEvents=()=>{
  return Event.findAll()
}
const addevent=(data)=>{
  return Event.create(data)
}
const editevent=(data,id)=>{
  return Event.update(data,{where:{idevent:id}})
}
const deleteevent=(id)=>{
  return Event.destroy({where :{idevent:id}})
}

module.exports = {Event,getAllEvent,addevent,editevent,deleteevent,getAllEventcategory,getAllEvents,getAllbyCountry}
