const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

app.use("/api/events", require("./routes/eventRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
