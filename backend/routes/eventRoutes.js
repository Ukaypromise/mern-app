const express = require("express");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvents,
  deleteEvents,
} = require("../controllers/eventController");
const router = express.Router();

// router.route('/').get(getEvents).post(setEvent);
// router.route('/:id').put(updateEvents).delete(deleteEvents);

router.get("/", getEvents);
router.get("/:id", getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvents);
router.delete("/:id", deleteEvents);

module.exports = router;
