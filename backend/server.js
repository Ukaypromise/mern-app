const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
// Middleware for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Handle Routes coming from routes folder
app.use("/api/events", require("./routes/eventRoutes"));

// Middleware for error handling
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
