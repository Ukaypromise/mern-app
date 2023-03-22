import React from "react";

const EventItem = ({ event }) => {
  return (
    <div>
      <div>{new Date(event.createdAt).toLocaleString("en-US")}</div>
      <h3>{event.name}</h3>
    </div>
  );
};

export default EventItem;
