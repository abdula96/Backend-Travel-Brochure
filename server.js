const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const placeRoutes = require("./routes/PlaceRoutes.js");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/places", placeRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
