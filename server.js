const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const favicon = require("serve-favicon");
const placeRoutes = require("./routes/PlaceRoutes.js");

dotenv.config();

const app = express();

// Middleware to serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.json());

// Routes
app.use("/api/places", placeRoutes);

// Add a root route
app.get("/", (req, res) => {
  res.send("Welcome to the Travel Brochure API");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
