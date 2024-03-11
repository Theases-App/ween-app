
const { Sequelize } =require('sequelize')
require('dotenv').config()



const sequelize = new Sequelize('ween', 'root', 'hamouda3', {
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