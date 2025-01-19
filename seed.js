const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Place = require("./models/Place.js"); // Adjust the path if needed

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const samplePlaces = [
  {
    name: "Eiffel Tower",
    location: { city: "Paris", country: "France" },
    description:
      "An iconic symbol of Paris, known for its stunning architecture and panoramic views of the city.",
    facts: [
      "The Eiffel Tower was completed in 1889 as the entrance arch for the 1889 World's Fair.",
      "It was the tallest man-made structure in the world until the completion of the Chrysler Building in New York in 1930.",
      "The tower is repainted every seven years to protect it from rust.",
    ],
    image: "/images/Eiffel_Tower.jpeg",
    averageRating: 4.8,
  },
  {
    name: "Great Wall of China",
    location: { city: "Beijing", country: "China" },
    description:
      "A monumental feat of ancient engineering, stretching over 13,000 miles.",
    facts: [
      "The Great Wall of China is not a single continuous wall, but a series of walls and fortifications.",
      "It was originally constructed to protect against invasions from nomadic tribes.",
      "Construction of the wall began as early as the 7th century BC.",
    ],
    image: "/images/Great_Wall_of_China.jpeg",
    averageRating: 4.7,
  },
  {
    name: "Statue of Liberty",
    location: { city: "New York", country: "USA" },
    description:
      "A symbol of freedom and democracy, located on Liberty Island in New York Harbor.",
    facts: [
      "The statue was a gift from France to the United States in 1886.",
      "It was designed by French sculptor Frédéric Auguste Bartholdi and built by Gustave Eiffel.",
      "The statue's full name is 'Liberty Enlightening the World.'",
    ],
    image: "/images/Statue_of_Liberty.jpeg",
    averageRating: 4.9,
  },
  {
    name: "Machu Picchu",
    location: { city: "Cusco Region", country: "Peru" },
    description:
      "A historical sanctuary and one of the New Seven Wonders of the World, known for its stunning archaeological sites and breathtaking views.",
    facts: [
      "Machu Picchu was built in the 15th century by the Inca emperor Pachacuti.",
      "The site was abandoned in the 16th century during the Spanish Conquest.",
      "It is located at an altitude of about 2,430 meters (7,970 feet) above sea level.",
    ],
    image: "/images/Machu_Picchu.jpeg",
    averageRating: 4.8,
  },
  {
    name: "Sydney Opera House",
    location: { city: "Sydney", country: "Australia" },
    description:
      "A UNESCO World Heritage Site and one of the most famous and distinctive buildings in the world, known for its unique design and cultural significance.",
    facts: [
      "The Sydney Opera House was designed by Danish architect Jørn Utzon.",
      "It was opened by Queen Elizabeth II on 20 October 1973.",
      "The roof is made up of over 1 million white tiles.",
    ],
    image: "/images/Sydney_Opera_House.jpeg",
    averageRating: 4.7,
  },
  {
    name: "Santorini",
    location: { city: "Santorini", country: "Greece" },
    description:
      "A picturesque island in the Aegean Sea, known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    facts: [
      "Santorini is part of the Cyclades group of islands.",
      "It was formed by a volcanic eruption around 3,600 years ago.",
      "The island is famous for its blue-domed churches and narrow streets.",
    ],
    image: "/images/Santorini.jpeg",
    averageRating: 4.9,
  },
  {
    name: "Mount Fuji",
    location: { city: "Shizuoka", country: "Japan" },
    description:
      "An active volcano and the highest mountain in Japan, known for its iconic shape and cultural significance.",
    facts: [
      "Mount Fuji is considered one of Japan's 'Three Holy Mountains.'",
      "The mountain has been a source of inspiration for artists and poets for centuries.",
      "The last recorded eruption of Mount Fuji was in 1707.",
    ],
    image: "/images/Mount_Fuji.jpeg",
    averageRating: 4.8,
  },
];

const seedDB = async () => {
  await Place.deleteMany({});
  await Place.insertMany(samplePlaces);
  console.log("Database seeded with sample places");
};

seedDB().then(() => {
  mongoose.connection.close();
});
