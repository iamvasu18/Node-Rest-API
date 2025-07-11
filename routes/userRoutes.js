const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validateUser = require("../middleware/validator");

// Routes
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/user", validateUser, userController.createUser);
router.put("/user/:id", validateUser, userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
