const Notifications=require("../models/notification")
const Event=require("../models/event")

exports.getnot = async (req, res) => {
    try {
      const eventid = req.params.idevent; 
  
      const notification = await Notifications.findAll({
        include:{
          model:Event,
          where: { event_idevent: eventid } 
        }
        
      });
  
      res.status(200).json(notification);
    } catch (error) {
      console.error('Error retrieving notifications:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };