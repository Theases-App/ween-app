const {getreservations,addreservation,Reservation,getreservation}=require("../models/reservation")

const getallres=async(req,res)=>{
    await getreservations()
    .then((result)=>{
    res.json(result)
    }).catch((err)=>{
      res.json(err)
    })
}
const getoneres=async(req,res)=>{
  const {userid,idevent} =req.params
  await getreservation(userid,idevent)
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
     const id3=req.params.idevent
   
  const add= await Reservation.create({userid:id,categorydetails_idcategorydetails:id2,idevent:id3})
    

    res.send(add)
  }

catch(err){
      res.status(404).json(err)
    }
}


module.exports={doreservation,getallres,getoneres}