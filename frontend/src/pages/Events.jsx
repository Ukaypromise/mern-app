import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import EventItem from "../components/EventItem";
import { getEvents, reset } from "../features/events/eventSlice";

const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { events, isLoading, isError, message } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getEvents());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="px-4 py-16 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Event Dashboard
        </p>
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Hey!!
                <br className="hidden md:block" />
                Welcome
                <span className="inline-block text-blue-400">
                  {user && user.name}
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <div className="mb-4 text-base text-gray-700">
                {events.length}
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="mb-4 text-base text-gray-700">
          {events.length > 0 ? (
            <div className="grid grid-cols-2">
              {events.map((event) => {
                return <EventItem key={event._id} event={event} />;
              })}
            </div>
          ) : (
            <p>You have not Created any events</p>
          )}
        </div>

        <Link
          to="/eventform"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Event
        </Link>
      </div>
    </div>
  );
};

export default Events;
