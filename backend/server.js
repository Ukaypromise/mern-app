const express = require("express");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
// Import connectDB function from db.js
const connectDB = require("./config/db");

// Connect to database
connectDB();

const port = process.env.PORT || 5001;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
// Middleware for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Handle Routes coming from routes folder
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serving to frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

// Middleware for error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
