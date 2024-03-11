const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');


const Event = sequelize.define('event', {
  idevent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  eventname: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  eventcategory: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  location: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  placename: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  payment: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  reservation: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  map: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  map2: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  phonenumber: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  facebook: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  instagram: {
    type: DataTypes.STRING(225),
    allowNull: true
  },
  numberpeople: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  adminmessage: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0
  },
  new: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  userIduser: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'user',
      key: 'iduser'
    }
  }
}, {
  tableName: 'event',
  timestamps: false
});

module.exports = Event;




const getAllEventcategory = (categroy) => {
  return Event.findAll({where:{eventcategory:categroy}} )
}
const getAllEvent=(id)=>{
  return Event.findAll({where:{idevent:id}})
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
const getEventByName = (eventName) => {
  return Event.findOne({ where: { eventname: eventName } });
};


module.exports = {Event,getAllEvent,addevent,editevent,deleteevent,getAllEventcategory,getAllEvents,getEventByName}
