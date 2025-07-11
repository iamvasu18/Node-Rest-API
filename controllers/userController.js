const users = require('../data/users');
exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

exports.createUser = (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users[userIndex] = { id: req.params.id, ...req.body };
  res.json(users[userIndex]);
};

exports.deleteUser = (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
};
