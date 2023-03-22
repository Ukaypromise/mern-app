import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent} from "../features/events/eventSlice"

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    registrationEndDate: "",
    startDateTime: "",
    endDateTime: "",
    price: "",
    place: "",
  });

  const {
    name,
    description,
    registrationEndDate,
    startDateTime,
    endDateTime,
    price,
    place,
  } = formData;
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    dispatch(createEvent(formData));
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an Event
            </h3>
          </div>
        </div>
        <form onSubmit={submitForm} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">description</label>
            <input
              type="text"
              name="description"
              id="description"
              required
              value={description}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Date:</label>
            <input
              type="date"
              id="registrationEndDate"
              name="registrationEndDate"
              required
              value={registrationEndDate}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium"> Starts At:</label>
            <input
              type="time"
              id="startDateTime"
              required
              name="startDateTime"
              value={startDateTime}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium"> Ends At:</label>
            <input
              type="time"
              id="endDateTime"
              required
              name="endDateTime"
              value={endDateTime}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium"> Location</label>
            <input
              type="text"
              id="place"
              required
              name="place"
              value={place}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium"> Price:</label>
            <input
              type="number"
              id="price"
              required
              name="price"
              value={price}
              onChange={onChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Create Event
          </button>
        </form>
      </div>
    </main>
  );
};

export default EventForm;
