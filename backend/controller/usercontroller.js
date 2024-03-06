require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const {getOneUser, addUser, editUser, deleteUser,getAll,findClients,findadmins} = require('../models/user')
const secretKey = 'ween'
console.log(secretKey)

const signUp = async (req, res) => {
    const {fullname, emailphone, password, role ,image ,age,country} = req.body
    try{
        const pswHashed = await bcrypt.hash(password, 10)
        const result = addUser({
            fullname: fullname,
            emailphone: emailphone,
            password: pswHashed,
            role: role,
            image:image,
            age:age,
            country:country
        })
        res.status(201).json(result)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const signIn = async (req, res) => {
    const {emailphone, password} = req.body
    try{
        getOneUser(emailphone)
        .then(async (result)=>{
            if(!!result){
                try{
                    const isMatch = await bcrypt.compare(password, result.password)
                    if(isMatch){
                        const token = jwt.sign({emailphone: emailphone}, secretKey)
                        res.status(200).json({msg: 'user found' ,iduser: result.iduser, role: result.role,token})
                    }
                    else{
                        res.status(401).json("wrong email or password")
                    }
                } 
                catch(err){
                    res.status(500).json(err)
                }
            }
            else {
                res.status(404).json('User not found')
              }
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {fullname, emailphone, password, role ,image ,age,country} = req.body
    try{
        const Hashed = await bcrypt.hash(password, 10)
        editUser(id, {
            fullname:fullname,
            emailphone: emailphone,
            password: Hashed,
            role: role,
            image: image,
            age:age,
            country:country
        })
        res.status(201).json('data updated')
    }
    catch(err){
        res.status(500).json(err)
    }
}

const destroyUser = async (req, res) => {
    const id = req.params.id
    try{
        deleteUser(id)
        res.status(204).send('user deleted successfully')
    }
    catch(err){
        res.status(500).json(err)
    }
}
const getusers = async (req,res) => {
const x= await getAll()
try{
    res.send(x)
}
catch(err){
    console.log(err);
}
}

const getClients = async (req,res) =>{

    const x= await findClients()
    try{
        res.send(x)
    }
    catch(err){
console.log(err);
    }
}

const getadmins = async (req,res) =>{

    const x= await findadmins()
    try{
        res.send(x)
    }
    catch(err){
console.log(err);
    }

}
const getOne = async (req, res) => {
    const email = req.params.email
    try {
        const user = await getOneUser(email)
        res.send(user)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {signUp, signIn, updateUser, destroyUser, getusers, getClients, getadmins,getOne}
