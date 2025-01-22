const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true }, // Add index to name
  location: {
    city: { type: String, index: true }, // Add index to city
    country: { type: String, index: true }, // Add index to country
  },
  description: { type: String, required: true },
  image: { type: String },
  averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, index: true }, // Add index to createdAt
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Add user field
});

module.exports = mongoose.model("Place", placeSchema);
