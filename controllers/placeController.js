const Place = require("../models/Place");

// Get all places
const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new place
const createPlace = async (req, res) => {
  try {
    const { name, location, description, image } = req.body;
    const newPlace = new Place({ name, location, description, image });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPlaces, createPlace };
