const express = require("express");
const app = express();

const connectDB = require("./db");
const {
    getPets,
    addPet,
    deletePet,
    deleteAllPets
} = require("./controller");

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/pets", getPets);
app.post("/pets", addPet);
app.delete("/pets", deleteAllPets);

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});