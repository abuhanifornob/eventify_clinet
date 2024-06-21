import { useEffect, useState } from "react";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://eventify-server-beta.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);
  return (
    <div className="mt-20">
      <div className="mx-20">
        <h1 className="text-4xl text-center text-orange-400 font-bold my-20 mt-8">
          {" "}
          Ours All Events Hears !!!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
