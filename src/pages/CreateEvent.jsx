import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const EventForm = () => {
  const { user } = useAuth();

  const initialFormState = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    image: "",
    creatorName: user?.displayName,
  };

  const [event, setEvent] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };
  console.log(event);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Event Create Successful");
        setEvent(initialFormState);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-y-4 bg-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-12">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an Event
          </h2>
        </div>
        <form className="mt-8 space-y-12 gap-y-4 " onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event Title"
                value={event.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                autoComplete="description"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event Description"
                value={event.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="date" className="sr-only">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={event.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="time" className="sr-only">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={event.time}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="location"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Event Location"
                value={event.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={event.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Category
                </option>

                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Meetup">Meetup</option>
                <option value="Webinar">Webinar</option>
                <option value="Social Event">Social Event</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Festival">Festival</option>
                <option value="Sports Event">Sports Event</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Seminar">Seminar</option>
                <option value="">Select Event Type</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="sr-only">
                Event Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Provide Images URL"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="creatorName" className="sr-only">
                Creator Name
              </label>
              <input
                id="creatorName"
                name="creatorName"
                type="text"
                autoComplete="creatorName"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Creator Name"
                value={user?.displayName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
