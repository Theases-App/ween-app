const Favorit = require("../models/favorit");
const {Event}=require("../models/event");
const {User} = require("../models/user");

exports.getFavorits = async (req, res) => {
  try {
    const userId = req.params.userId; 

    const favorits = await Event.findAll({
      include:{
        model:User,
         where: { iduser: userId } 
      }
      
    });

    res.status(200).json(favorits);
  } catch (error) {
    console.error('Error retrieving favorits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createFavorit = (req, res) => {
  Favorit.create({
    user_iduser: req.body.user_iduser,
    event_idevent: req.body.event_idevent
  })
  .then((favorit) => {
    console.log('Favorit entry created successfully:', favorit);
    res.status(201).json({ message: 'Favorit entry created successfully' });
  })
  .catch((error) => {
    console.error('Error creating favorit entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.deleteFavoritByEventId = async (req, res) => {
  try {
    const eventId = req.params.idevent;

  
    const favorits = await Favorit.findAll({
      where: {
        event_idevent:eventId
      }
    });

    if (favorits.length === 0) {
      return res.status(404).json({ error: 'No favorit entries found for the event' });
    }

    
    await Favorit.destroy({
      where: {
        event_idevent: eventId
      }
    });

    res.status(200).json({ message: 'Favorit entries deleted successfully' });
  } catch (error) {
    console.error('Error deleting favorit entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
