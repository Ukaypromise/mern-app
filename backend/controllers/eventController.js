const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

// Get all of the events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user });
  res.status(200).json(events);
});

// Show all user events that they created.
const userEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user });
  res.status(200).json(events);
});

// Get a single event
const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.status(200).json(event);
});

// Create a new event
const createEvent = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(404);
    throw new Error("name of event is required");
  }
  const event = await Event.create({
    user: req.user.id, // This is the user that is logged in.
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
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  // Check if the user is the owner of the event
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (req.user.id !== event.user.toString()) {
    res.status(401);
    throw new Error("You are not authorized to update this event");
  }
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedEvent);
});

// Delete an event
const deleteEvents = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  // Check if the user is the owner of the event
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (req.user.id !== event.user.toString()) {
    res.status(401);
    throw new Error("You are not authorized to update this event");
  }

  // await event.remove();
  // res.status(200).json({ id: req.params.id });

  // Alternatively, you can use the following code:
  const deletedEvent = await Event.findByIdAndDelete(req.params.id);
  res.status(200).json({ deletedEvent, id: req.params.id });
});

module.exports = {
  getEvents,
  userEvents,
  getEvent,
  createEvent,
  updateEvents,
  deleteEvents,
};
