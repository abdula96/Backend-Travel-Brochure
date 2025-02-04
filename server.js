const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const favicon = require("serve-favicon");
const cors = require("cors");
const placeRoutes = require("./routes/PlaceRoutes.js");
const authRoutes = require("./routes/authRoutes.js"); // Import authentication routes
const { protect } = require("./middleware/authMiddleware.js"); // Import protect middleware

dotenv.config();

const app = express();

// Middleware to serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
app.use("/api/places", placeRoutes);
app.use("/api/auth", authRoutes); // Add authentication routes

// Protected route example (use protect middleware)
app.get("/api/user", protect, (req, res) => {
  res.json(req.user);
});

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
