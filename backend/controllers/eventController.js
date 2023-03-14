const getEvents=(req,res)=>{
    res
        .status(200)
        .json({ title: "Event 1", description: "This is the first event" });
}

const createEvent = (req, res) => {
  res
    .status(200)
    .json({ title: "Event 3", description: "This is the first event" });
};

const updateEvents = (req, res) => {
  res
    .status(200)
    .json({ title: "Event 1", description: "This is the first event" });
};

const deleteEvents = (req, res) => {
  res
    .status(200)
    .json({ title: "Event 1", description: "This is the first event" });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvents,
  deleteEvents,
};