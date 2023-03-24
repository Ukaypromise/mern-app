import React from "react";
import {  useDispatch } from "react-redux";
import {deleteEvent} from "../features/events/eventSlice"

const EventItem = ({ event }) => {

  const dispatch = useDispatch();
  return (
    <div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 ">
      <div className="p-8 bg-white border rounded shadow-sm">
        <div className="flex mb-3 text-xs font-semibold tracking-wide uppercase">
          <button onClick={()=> dispatch(deleteEvent(event._id))} className="flex-end rounded-md bg-orange-400 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Delete
          </button>
        </div>

        <a
          href="/"
          aria-label="Article"
          title="Jingle Bells"
          className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          {event.name}
        </a>
        <p className="mb-5 text-gray-700">
          {event.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          obcaecati? Nesciunt nisi labore natus amet!
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Date:
              <span className="text-gray-600">{event.registrationEndDate}</span>
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Time:
              <span className="text-gray-600">
                {new Date(event.createdAt).toLocaleString("en-US")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
