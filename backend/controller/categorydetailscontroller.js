const {geteventcat} = require('../models/categorydetails')


const geteventcategory = async(req,res)=>{
  const id=req.params.eventIdevent
   await geteventcat(id)
   .then((result)=>{

  res.status(200).json(result)
  })
  .catch((err)=>{
    console.log(err)
  res.status(500).json(err)
   })
}

module.exports= {geteventcategory}