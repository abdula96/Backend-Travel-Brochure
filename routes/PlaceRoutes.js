const express = require("express");
const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  upload,
} = require("../controllers/placeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch all places
router.get("/", getPlaces);

// Fetch a specific place by ID
router.get("/:id", getPlaceById);

// Create a new place
router.post("/", protect, upload.single("image"), createPlace); // Use upload middleware and protect middleware

// Update a place by ID
router.put("/:id", protect, upload.single("image"), updatePlace); // Use upload middleware and protect middleware

// Delete a place by ID
router.delete("/:id", protect, deletePlace);

module.exports = router;
