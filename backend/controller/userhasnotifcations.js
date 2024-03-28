const Userhasnotifcations=require("../models/UserHasNotifications")
const {User}=require("../models/user")

exports.getusernotifications=async(req,res)=>{
    try{
        const userid=req.params.iduser
        const usernotif=await Userhasnotifcations.findAll({
            where:{
                user_iduser:userid
            },
            include:{
                model:User

            }
            
        })
        res.status(200).json(usernotif)

    }
catch(error){
    console.error('Error retrieving notifications:', error);
    res.status(500).json({ error: 'Internal server error' });

}
}