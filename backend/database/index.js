const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()







const sequelize = new Sequelize('ween', 'root', 'kh@lilbou@rrouj69', {



    host:'localhost',
    dialect:'mysql',
    define:{timestamps:false}
})



sequelize.authenticate()
.then(()=>{
    console.log('connection done');
})
.catch(err=>{
    console.log(err,'no connection');
})

 sequelize.sync()
 .then(()=>{
    console.log("done")
 })
.catch((err)=>{
     console.log(err)
})


module.exports = sequelize