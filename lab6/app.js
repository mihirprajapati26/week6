const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getLocations,
  addLocation,
  getLocation,
  deleteLocation,
  deleteAllLocations,
  updateLocation,
} = require("./controller");


app.use(express.json());

connectDB();

// Routes
// GET all Locations
app.get("/locations", getLocations);

// POST a new Location
app.post("/locations", addLocation);

// GET a single Location
app.get("/locations/:id", getLocation);

// Update Location using PUT
app.put("/locations/:id", updateLocation);

// DELETE a Location
app.delete("/locations/:id", deleteLocation);

// DELETE all Location
app.delete("/locations", deleteAllLocations);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
