import { useEffect, useState } from "react";
import Event from "../../pages/events/Event";
import { Link } from "react-router-dom";

const FavoriteEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("Fetching events...");
        const response = await fetch("http://localhost:3000/events");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Data fetched:", data);
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-20">
      <div className="mx-20">
        <h1 className="text-6xl text-center text-orange-400 font-bold my-20">
          {" "}
          Favorits Event Avelabel Now!!!!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(1, 4).map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </div>
      </div>
      <Link
        className=" flex justify-center items-center mx-auto font-bold text-6xl w-[60%] hover:bg-stone-500 rounded-lg py-12 text-orange-400 my-20"
        to={"/event"}
      >
        All Event Hears!!!
      </Link>
    </div>
  );
};

export default FavoriteEvents;
