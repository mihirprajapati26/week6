const Location = require("./model");

// get all Goals
const getLocations = async (req, res) => {
  const locations = await Location.find({});
  res.status(200).json(locations);
};

// Add one Goal
const addLocation = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const newLocation = new Location({ name, address, latitude, longitude });
  await newLocation.save();
  res.status(201).json(newLocation);
};

// Get Goal by ID
const getLocation = async (req, res) => {
  const { id } = req.params;

  const location = await Location.findById(id);
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json(location);
};

// Delete Goal by ID
const deleteLocation = async (req, res) => {
  const { id } = req.params;

  const location = await Location.findByIdAndDelete({ _id: id });
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json({ message: "Location deleted successfully" });
};

// Delete all Books
const deleteAllLocations = async (req, res) => {
  const result = await Location.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} Locations successfully` });
};

// Update Goal by ID
const updateLocation = async (req, res) => {
  const { id } = req.params;
  const updatedLocation = req.body;
  const location = await Location.findOneAndUpdate({ _id: id }, updatedLocation);
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json(location);
};

module.exports = {
  getLocations,
  addLocation,
  getLocation,
  deleteLocation,
  deleteAllLocations,
  updateLocation,
};
