const express = require("express");
const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/placeController");

const router = express.Router();

// Fetch all places
router.get("/", getPlaces);

// Fetch a specific place by ID
router.get("/:id", getPlaceById);

// Create a new place
router.post("/", createPlace);

// Update a place by ID
router.put("/:id", updatePlace);

// Delete a place by ID
router.delete("/:id", deletePlace);

module.exports = router;
