const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessages,
  addMessage,
  getMessage,
  deleteMessage,
  deleteAllMessages,
  updateMessage,
} = require("./controller");


app.use(express.json());

connectDB();

// Routes
// GET all messages
app.get("/messages", getMessages);

// POST a new messages
app.post("/messages", addMessage);

// GET a single messages
app.get("/messages/:id", getMessage);

// Update messages using PUT
app.put("/messages/:id", updateMessage);

// DELETE a messages
app.delete("/messages/:id", deleteMessage);

// DELETE all messages
app.delete("/messages", deleteAllMessages);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
