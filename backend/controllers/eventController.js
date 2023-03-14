const asyncHandler = require("express-async-handler");

// Get all of the events
const getEvents = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ title: "Event 1", description: "This is the first event" });
});
// Create a new event
const createEvent = asyncHandler(async  (req, res) => {
  if (!req.body.content) {
    res.status(404);
    throw new Error("Content is required");
  }
  res
    .status(200)
    .json({ title: "Event 3", description: "This is the first event" });
});

// Update an event
const updateEvents = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ title: "Event 1", description: "This is the first event" });
});

// Delete an event
const deleteEvents = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ title: "Event 1", description: "This is the first event" });
});

module.exports = {
  getEvents,
  createEvent,
  updateEvents,
  deleteEvents,
};
