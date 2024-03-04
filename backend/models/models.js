const sequelize = require('../database/index')

const Authorisation=require("./authorisation").Authorisation
const Block=require("./block")
const Categorydetails=require("./categorydetails")
const Chat=require("./chat")
const Event=require("./event").Event
const Favorit=require("./favorit")
const Message=require("./message")
const Notification=require("./notification")
const Payment=require("./payment")
const Reports=require("./reports")
const Reservation=require("./reservation")
const User=require("./user").User
const Userhaschat = require('./userhaschat')

User.belongsToMany(Chat, { through: 'userhaschat', foreignKey: 'user_iduser' });
// User.belongsTo(Authorisation, { foreignKey: 'authorisation_idauthorisation' });
// User.belongsTo(Block, { foreignKey: 'block_idblock' });
User.hasMany(Event)
User.belongsTo(Favorit)
User.belongsTo(Reservation)
User.hasMany(Categorydetails)
User.belongsTo(Payment)
User.hasMany(Reports)
User.hasMany(Message)
User.hasMany(Notification)

Event.belongsTo(Favorit)
Event.hasOne(Categorydetails)
Event.hasMany(Reservation)
Event.belongsTo(User)

Categorydetails.hasMany(Reservation)
Categorydetails.belongsTo(Payment)
Categorydetails.belongsTo(Event)
Categorydetails.belongsTo(User)

Notification.belongsTo(User)

Payment.belongsTo(User)
Payment.belongsTo(Categorydetails)

Reservation.belongsTo(User)
Reservation.belongsTo(Categorydetails)
Reservation.belongsTo(Event)

Reports.belongsTo(User)

Favorit.hasMany(Event)
Favorit.belongsTo(User)

Authorisation.belongsTo(User)

Block.belongsTo(User)

Message.belongsTo(User)

Chat.hasMany(Userhaschat)

Userhaschat.belongsTo(User)

// Event.belongsTo(User, { foreignKey: 'user_iduser' });
// Event.belongsTo(Favorit, { foreignKey: 'favorit_idfavorit' });
// Event.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });
// Favorit.belongsTo(User, { foreignKey: 'user_iduser' });
// Categorydetails.belongsTo(User, { foreignKey: 'user_iduser' });
// Message.belongsTo(User, { foreignKey: 'user_iduser' });
// Reports.belongsTo(User, { foreignKey: 'user_iduser' });
// Reservation.belongsTo(Event, { foreignKey: 'event_idevent' });
// Reservation.belongsTo(User, { foreignKey: 'user_iduser' });
// Reservation.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });
// Payment.belongsTo(User, { foreignKey: 'user_iduser' });
// Payment.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });


sequelize.sync()
.then(()=>{
    console.log("done")
})
.catch((err)=>{
    console.log(err)
})

 

