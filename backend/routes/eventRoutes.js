const express = require("express");
const {
  getEvents,
  userEvents,
  getEvent,
  createEvent,
  updateEvents,
  deleteEvents,
} = require("../controllers/eventController");
const router = express.Router();
const { protect } = require("../middleware/authMidleware");

// router.route('/').get(getEvents).post(setEvent);
// router.route('/:id').put(updateEvents).delete(deleteEvents);

router.get("/", protect, getEvents);
router.get("/myevents", userEvents);
router.get("/:id", getEvent);
router.post("/", protect, createEvent);
router.put("/:id", protect, updateEvents);
router.delete("/:id", protect, deleteEvents);

module.exports = router;
