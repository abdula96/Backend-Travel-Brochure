const express = require("express");
const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  upload,
} = require("../controllers/placeController");

const router = express.Router();

// Fetch all places
router.get("/", getPlaces);

// Fetch a specific place by ID
router.get("/:id", getPlaceById);

// Create a new place
router.post("/", upload.single("image"), createPlace); // Use upload middleware

// Update a place by ID
router.put("/:id", upload.single("image"), updatePlace); // Use upload middleware

// Delete a place by ID
router.delete("/:id", deletePlace);

module.exports = router;
