// controller1.js
const getEndpoint1 = (req, res) => {
  res.json({ message: "I am Mihir Prajapati but I get Job" });
};

// controller2.js
const getEndpoint2 = (req, res) => {
  res.json({ message: "I am Mihir Prajapati but I get Food" });
};

// controller3.js
const getEndpoint3 = (req, res) => {
  res.json({ message: "I am Mihir Prajapati but I get Sleep" });
};

// controller4.js
const getEndpoint4 = (req, res) => {
  res.json({
    message: `I am Mihir Prajapati but I get ${req.params.something}`,
  });
};

// controller5.js
const getRoot = (req, res) => {
  res.json({ message: "I am Mihir Prajapati /" });
};

module.exports = {
  getEndpoint1,
  getEndpoint2,
  getEndpoint3,
  getEndpoint4,
  getRoot,
};
