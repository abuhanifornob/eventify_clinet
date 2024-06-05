import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const EventForm = () => {
  const { user } = useAuth();
  console.log(user);

  const initialFormState = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    image: "",
    creatorEmail: user?.email,
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
    const token = localStorage.getItem("token");
    await fetch("https://eventify-server-pe8m.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
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
      <div className="w-[60%] mx-auto space-y-12">
        <div>
          <h2 className="mt-12 text-center text-3xl font-extrabold text-gray-900">
            Create an Event
          </h2>
        </div>
        <form className="mt-8 space-y-12 gap-y-4 " onSubmit={handleSubmit}>
          <div className="rounded-lg shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="font-serif text-xl ms-3">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Event Title"
                value={event.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="font-serif text-xl ms-3">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                autoComplete="description"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Event Description"
                value={event.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="date" className="font-serif text-xl ms-3">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                value={event.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="time" className="font-serif text-xl ms-3">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                value={event.time}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="font-serif text-xl ms-3">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="location"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Event Location"
                value={event.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category" className="font-serif text-xl ms-3">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
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
              <label htmlFor="image" className="font-serif text-xl ms-3">
                Event Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Provide Images URL"
                required
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="creatorName" className="font-serif text-xl ms-3">
                creatorEmail
              </label>
              <input
                id="creatorEmail"
                name="creatorEmail"
                type="email"
                autoComplete="creatorEmail"
                className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Creator Name"
                value={user?.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative w-[50%] flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
