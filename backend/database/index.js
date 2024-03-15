
const { Sequelize } =require('sequelize')
require('dotenv').config()



<<<<<<< HEAD
const sequelize = new Sequelize('ween', 'root', '22802888', {
=======

const sequelize = new Sequelize('ween', 'root', 'hamouda3', {
>>>>>>> 48a816a3cf0f2187109d614099c5ef01f3bc3888
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


module.exports = sequelize