const mongoose = require("mongoose");
const Place = require("./models/Place");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");

    // List indexes for the 'places' collection
    const indexes = await Place.collection.getIndexes();
    console.log("Indexes for 'places' collection:", indexes);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
