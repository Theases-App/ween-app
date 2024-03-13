
const Favorit = require("../models/favorit");

// const getfavs = async (req, res) => {
//   try {
//     const userId = req.params.userId; 
//     const favorites = await getUserFavs(iduser);
//     res.send(favorites);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error retrieving favorites");
//   }
// }
exports.getFavorits = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user ID is passed as a route parameter

    // Retrieve favorits for the specified user ID
    const favorits = await Favorit.findAll({
      where: { user_iduser: userId } // Filter by user_iduser
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

