const {addToken, deleteToken, getToken} = require('../models/authorisation')

const saveToken = (req,res) => {
    const id = req.params.id
    const token = req.body.token
    addToken({token: token, userIduser: id})
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(401).send(err)
    })
}

const checkToken = (req, res) => {
    const id = req.params.id
    getToken(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(403).status(err)
    })
}

const destroyToken = async (req,res) => {
    const id = req.params.id
    try{
        deleteToken(id)
        res.status(200).send('token deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {saveToken, checkToken, destroyToken}