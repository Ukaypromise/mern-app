import React from "react";
import { useSelector } from "react-redux";

const EventItem = ({ event }) => {
  return (
    // <div>
    //   <div>{new Date(event.createdAt).toLocaleString("en-US")}</div>
    //   <h3>{event.name}</h3>
    // </div>
    <div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 ">
      <div className="p-8 bg-white border rounded shadow-sm">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
            Date
          </a>{" "}
          <span className="text-gray-600">— {event.registrationEndDate}</span>
        </p>
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
              {event.name}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author{" "}
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
