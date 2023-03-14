const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

app.get("/api/events", (req, res)=>{
    res.status(200).json({title: "Event 1", description: "This is the first event"})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
