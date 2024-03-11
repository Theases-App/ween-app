const {addToblock,getBlocked,removefromblock, getOneBlocked} = require('../models/block')

const addBlock = async (req,res) => {
    const x= await addToblock(req.body)
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const getallblocked= async (req,res)=>{
    const x= await getBlocked()
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const deleteFromblock= async (req,res)=>{
    const x= await removefromblock(req.params.id)
    try{
        res.send("deleted")
    }
    catch(err){
   console.log(err);
    }
}

const checkBlock = (req, res) => {
    const id = req.params.id
    getOneBlocked(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(err).send(err)
    })
}

module.exports={addBlock,getallblocked,deleteFromblock, checkBlock}