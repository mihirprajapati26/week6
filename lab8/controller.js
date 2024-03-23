const Message = require("./model");

// get all Messages
const getMessages = async (req, res) => {
  const messages = await Message.find({});
  res.status(200).json(messages);
};

// Add one Message
const addMessage = async (req, res) => {
  const { sender, recipient, content } = req.body;

  const newMessage = new Message({ sender, recipient, content });
  await newMessage.save();
  res.status(201).json(newMessage);
};

// Get Message by ID
const getMessage = async (req, res) => {
  const { id } = req.params;

  const message = await Message.findById(id);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json(goal);
};

// Delete Message by ID
const deleteMessage = async (req, res) => {
  const { id } = req.params;

  const message = await Message.findByIdAndDelete({ _id: id });
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json({ message: "Message deleted successfully" });
};

// Delete all Message
const deleteAllMessages = async (req, res) => {
  const result = await Message.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} Messages successfully` });
};

// Update Message by ID
const updateMessage = async (req, res) => {
  const { id } = req.params;
  const updatedMessage = req.body;
  const message = await Goal.findOneAndUpdate({ _id: id }, updatedMessage);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json(Message);
};

module.exports = {
  getMessages,
  addMessage,
  getMessage,
  deleteMessage,
  deleteAllMessages,
  updateMessage,
};
