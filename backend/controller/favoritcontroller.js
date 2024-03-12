
const { getUserFavs } = require("../models/favorit");

const getfavs = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const favorites = await getUserFavs(iduser);
    res.send(favorites);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving favorites");
  }
}

module.exports = { getfavs };
