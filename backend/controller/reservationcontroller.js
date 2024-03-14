const {getreservations,addreservation,Reservation}=require("../models/reservation")

const getallres=async(req,res)=>{
    await getreservations()
    .then((result)=>{
    res.json(result)
    }).catch((err)=>{
      res.json(err)
    })
}


const doreservation=async (req,res)=>{
  try{   
     const id=req.params.userid
    const id2=req.params.categorydetails_idcategorydetails

   
  const add= await Reservation.create({userid:id,categorydetails_idcategorydetails:id2})
    

    res.send(add)
  }

catch(err){
      res.status(404).json(err)
    }
}


module.exports={doreservation,getallres}