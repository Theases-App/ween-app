const{getAllEvent,getAllEvents,addevent,editevent,deleteevent, getAllEventcategory,getAllbyCountry}=require('../models/event')


const getAll = (req, res) => {
    getAllEvents({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getevent = async(req,res)=>{
const id=req.params.id
    await getAllEvent(id).then((result)=>{
res.status(200).json(result)
}).catch((err)=>{
res.status(500).json(err)
})
}

const getByCountry = async(req,res)=>{
    const cntry=req.params.country
     await getAllbyCountry(cntry).then((result)=>{
    res.status(200).json(result)
    }).catch((err)=>{
    res.status(500).json(err)
     })
}


const   geteventbycategory = async(req,res)=>{
    const name=req.params.eventcategory
     await getAllEventcategory(name)
    .then((result)=>{
    res.status(200).json(result)
    }).catch((err)=>{
    res.status(500).json(err)
    })
    }

const addevents=async(req,res)=>{
    const id=req.params.id
    const {eventname,eventcategory,image,price,country,location,placename,date,time,payment,reservation,description,map,map2,phonenumber,email,facebook,instagram,numberpeople,adminmessage} =req.body
    await addevent({eventname:eventname,eventcategory:eventcategory,image:image,price:price,country:country,location:location,placename:placename,date:date,time:time,payment:payment,reservation:reservation,description:description,map:map,map2:map2,phonenumber:phonenumber,email:email,facebook:facebook,instagram:instagram,numberpeople:numberpeople,adminmessage:adminmessage},id)
     .then(()=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

const updateevent=async(req,res)=>{
    const {eventname,eventcategory,image,price,country,location,placename,date,time,payment,reservation,description,map,map2,phonenumber,email,facebook,instagram,numberpeople,adminmessage} =req.body
    const id=req.params.id
    await editevent({eventname:eventname,eventcategory:eventcategory,image:image,price:price,country:country,location:location,placename:placename,date:date,time:time,payment:payment,reservation:reservation,description:description,map:map,map2:map2,phonenumber:phonenumber,email:email,facebook:facebook,instagram:instagram,numberpeople:numberpeople,adminmessage:adminmessage},id).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}
const deletedevents=async(req,res)=>{
    const id=req.params.id
    await deleteevent(id).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}



module.exports = {addevents,deletedevents,getAll,updateevent,getevent,geteventbycategory,getByCountry}