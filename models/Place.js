const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { city: String, country: String },
  description: { type: String, required: true },
  image: { type: String },
  averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Place", placeSchema);
