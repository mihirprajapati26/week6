const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getInventories,
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
  deleteAllInventories,
} = require("./controller");


app.use(express.json());

connectDB();

// Routes
// GET all Goals
app.get("/inventories", getInventories);

// POST a new Goal
app.post("/inventories", addInventory);

// GET a single Goal
app.get("/inventories/:id", getInventory);

// Update Goal using PUT
app.put("/inventories/:id", updateInventory);

// DELETE a Goal
app.delete("/inventories/:id", deleteInventory);

// DELETE all Goal
app.delete("/inventories", deleteAllInventories);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
