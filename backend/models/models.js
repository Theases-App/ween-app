const sequelize = require('../database/index')

const {User} = require('./user')
const Block = require('./block').Block
const Authorization = require('./authorisation').Authorisation
const Event = require('./event')
const CategoryDetails = require('./categorydetails')
const Favorit = require('./favorit');
const Notifications = require('./notification');
const Reservation = require('./reservation');
const Payment = require('./payment');
const Reports = require('./reports');
const UserHasNotifications = require('./userhasnotifications');
const ChatRoom = require('./chatroom');
const UserHasChat = require('./userhaschat');
const Message = require('./message');


User.hasOne(Block, { foreignKey: 'userIduser' });
Block.belongsTo(User, { foreignKey: 'userIduser' });

User.hasMany(Authorization);
Authorization.belongsTo(User, { foreignKey: 'userIduser' });

// User.hasMany(Event, { foreignKey: 'userIduser' });
// Event.belongsTo(User, { foreignKey: 'userIduser' });

// Event.hasMany(CategoryDetails, { foreignKey: 'eventIdevent' });
// CategoryDetails.belongsTo(Event, { foreignKey: 'eventIdevent' });

// // User.belongsToMany(Event, { through: Favorit, foreignKey: 'user_iduser' });
// Event.belongsToMany(User, { through: Favorit, foreignKey: 'event_idevent' });

// Event.hasMany(Notifications, { foreignKey: 'event_idevent' });
// Notifications.belongsTo(Event, { foreignKey: 'event_idevent' });

CategoryDetails.hasMany(Reservation, { foreignKey: 'categorydetails_idcategorydetails' });
Reservation.belongsTo(CategoryDetails, { foreignKey: 'categorydetails_idcategorydetails' });

Reservation.hasOne(Payment, { foreignKey: 'categorydetails_has_user_idCategoryUser' });
Payment.belongsTo(Reservation, { foreignKey: 'categorydetails_has_user_idCategoryUser' });

User.hasMany(Reports, { foreignKey: 'userIduser' });
Reports.belongsTo(User, { foreignKey: 'userIduser' });

User.belongsToMany(Notifications, { through: UserHasNotifications, foreignKey: 'user_iduser' });
Notifications.belongsToMany(User, { through: UserHasNotifications, foreignKey: 'notifications_idnotification' });

// Event.hasOne(ChatRoom, { foreignKey: 'event_idevent' });
// ChatRoom.belongsTo(Event, { foreignKey: 'event_idevent' });

User.belongsToMany(ChatRoom, { through: UserHasChat, foreignKey: 'user_iduser' });
ChatRoom.belongsToMany(User, { through: UserHasChat, foreignKey: 'chat_idchat' });

User.hasMany(Message, { foreignKey: 'user_iduser' });
Message.belongsTo(User, { foreignKey: 'user_iduser' });

ChatRoom.hasMany(Message, { foreignKey: 'chatRoom_idchat' });
Message.belongsTo(ChatRoom, { foreignKey: 'chatRoom_idchat' });


// sequelize.sync()
// .then(()=>{
//     console.log("done")
// })
// .catch((err)=>{
//     console.log(err)
// })














// const Authorisation=require("./authorisation").Authorisation
// const Block=require("./block").Block
// const Categorydetails=require("./categorydetails")
// const Chat=require("./chat")
// const Event=require("./event").Event
// const Favorit=require("./favorit")
// const Message=require("./message")
// const Notification=require("./notification")
// const Payment=require("./payment")
// const Reports=require("./reports")
// const Reservation=require("./reservation")
// const User=require("./user").User
// const Userhaschat = require('./userhaschat')

// User.belongsToMany(Chat, { through: 'userhaschat', foreignKey: 'user_iduser' });
// // User.belongsTo(Authorisation, { foreignKey: 'authorisation_idauthorisation' });
// // User.belongsTo(Block, { foreignKey: 'block_idblock' });
// User.hasMany(Event)
// User.belongsTo(Favorit)
// User.belongsTo(Reservation)
// User.hasMany(Categorydetails)
// User.belongsTo(Payment)
// User.hasMany(Reports)
// User.hasMany(Message)
// User.hasMany(Notification)

// Event.belongsTo(Favorit)
// Event.hasOne(Categorydetails)
// Event.hasMany(Reservation)
// Event.belongsTo(User)

// Categorydetails.hasMany(Reservation)
// Categorydetails.belongsTo(Payment)
// Categorydetails.belongsTo(Event)
// Categorydetails.belongsTo(User)

// Notification.belongsTo(User)

// Payment.belongsTo(User)
// Payment.belongsTo(Categorydetails)

// Reservation.belongsTo(User)
// Reservation.belongsTo(Categorydetails)
// Reservation.belongsTo(Event)

// Reports.belongsTo(User)

// Favorit.hasMany(Event)
// Favorit.belongsTo(User)

// Authorisation.belongsTo(User)

// User.hasMany(Block)

// Message.belongsTo(User)

// Chat.hasMany(Userhaschat)

// Userhaschat.belongsTo(User)

// // Event.belongsTo(User, { foreignKey: 'user_iduser' });
// // Event.belongsTo(Favorit, { foreignKey: 'favorit_idfavorit' });
// // Event.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });
// // Favorit.belongsTo(User, { foreignKey: 'user_iduser' });
// // Categorydetails.belongsTo(User, { foreignKey: 'user_iduser' });
// // Message.belongsTo(User, { foreignKey: 'user_iduser' });
// // Reports.belongsTo(User, { foreignKey: 'user_iduser' });
// // Reservation.belongsTo(Event, { foreignKey: 'event_idevent' });
// // Reservation.belongsTo(User, { foreignKey: 'user_iduser' });
// // Reservation.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });
// // Payment.belongsTo(User, { foreignKey: 'user_iduser' });
// // Payment.belongsTo(Categorydetails, { foreignKey: 'categorydetails_idcategorydetails' });


