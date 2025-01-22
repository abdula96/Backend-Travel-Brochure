const Place = require("../models/Place");
const multer = require("multer");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, "uploads/");
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    try {
      cb(null, Date.now() + "-" + file.originalname);
    } catch (error) {
      cb(error);
    }
  },
});

const upload = multer({ storage: storage });

// Get all places
const getPlaces = async (req, res) => {
  try {
    const places = await Place.find(); // Fetch all places from MongoDB
    res.status(200).json(places); // Send the list of places as JSON
  } catch (error) {
    console.error("Error fetching places:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch places. Please try again later." });
  }
};

// Get a single place by ID
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id); // Fetch place by ID
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(place);
  } catch (error) {
    console.error("Error fetching place:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch the place. Please try again later." });
  }
};

// Create a new place
const createPlace = async (req, res) => {
  try {
    const { name, city, country, description } = req.body;
    const image = req.file ? req.file.path : null;

    // Validate required fields
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required." });
    }

    const newPlace = new Place({
      name,
      location: { city, country },
      description,
      image,
      user: req.user._id, // Associate the place with the user ID
    });

    await newPlace.save(); // Save the new place to MongoDB
    res.status(201).json(newPlace); // Send the created place as JSON
  } catch (error) {
    console.error("Error creating place:", error); // Log the full error
    console.error(error.stack); // Log the error stack for detailed insight
    res
      .status(500)
      .json({ message: "Failed to create place. Please try again later." });
  }
};

// Update a place by ID
const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    if (place.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this place" });
    }

    Object.assign(place, req.body);
    if (req.file) {
      place.image = req.file.path;
    }
    const updatedPlace = await place.save();

    res.status(200).json(updatedPlace);
  } catch (error) {
    console.error("Error updating place:", error.message);
    res
      .status(500)
      .json({ message: "Failed to update place. Please try again later." });
  }
};

// Delete a place by ID
const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    if (place.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this place" });
    }

    await place.remove();
    res.status(200).json({ message: "Place deleted successfully." });
  } catch (error) {
    console.error("Error deleting place:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete place. Please try again later." });
  }
};

module.exports = {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  upload,
};
