const {geteventcat,addcat} = require('../models/categorydetails')


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
const addcategory=async(req,res)=>{

  const id=req.params.idcategorydetails

  const id2=req.params.eventIdevent

  const {feature,price} =req.body
  await addcat({feature:feature,price:price},id,id2)
   .then(()=>{
          res.status(200).json(result)
      })
      .catch((err)=>{
          res.send(err)
      })
  }

module.exports= {geteventcategory,addcategory}