const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

// Middleware
app.use(express.json()); // for parsing JSON request bodies
app.use(logger); // custom logger middleware

// Routes
app.use("/", userRoutes);

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
