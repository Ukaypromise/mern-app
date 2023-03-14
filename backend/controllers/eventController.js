const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

// Get all of the events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  res.status(200).json(events);
});
// Create a new event
const createEvent = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(404);
    throw new Error("name of event is required");
  }
  const event = await Event.create({
    name: req.body.name,
    description: req.body.description,
    registrationEndDate: req.body.registrationEndDate,
    startDateTime: req.body.startDateTime,
    endDateTime: req.body.endDateTime,
    place: req.body.place,
    price: req.body.price,
  });
  res.status(200).json(event);
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
