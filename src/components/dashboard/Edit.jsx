import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const Edit = () => {
  const eventInfo = useLoaderData();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch(
      `https://eventify-server-beta.vercel.app/events/${eventInfo?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Data Update is Successful");
        navigate(from);
        reset();
      });
  };

  if (!eventInfo) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="title" className="font-serif text-xl">
              Title
            </label>
            <input
              {...register("title", { required: true })} // Use register for validation
              id="title"
              name="title"
              type="text"
              autoComplete="title"
              className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Event Title"
              defaultValue={eventInfo?.title} // Pre-populate with fetched data
            />
            {errors.title && (
              <span className="text-red-500">
                {errors.title.message || "Title is required"}
              </span>
            )}{" "}
            {/* Display validation errors */}
          </div>
          <div>
            <label htmlFor="description" className="font-serif text-xl">
              Description
            </label>
            <textarea
              {...register("description", { required: true })} // Use register for validation
              id="description"
              name="description"
              autoComplete="description"
              className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Event Description"
              defaultValue={eventInfo?.description} // Pre-populate with fetched data
            />
            {errors.description && (
              <span className="text-red-500">
                {errors.description.message || "Description is required"}
              </span>
            )}{" "}
            {/* Display validation errors */}
          </div>
          <Controller
            control={control}
            name="date"
            defaultValue={eventInfo.date} // Pre-populate with fetched data
            render={({ field: { value, onChange } }) => (
              <div>
                <label htmlFor="date" className="font-serif text-xl">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  value={value} // Use value from controller
                  onChange={onChange} // Use onChange from controller
                />
                {errors.date && (
                  <span className="text-red-500">
                    {errors.date.message || "Date is required"}
                  </span>
                )}{" "}
                {/* Display validation errors */}
              </div>
            )}
          />
          <Controller
            control={control}
            name="time"
            defaultValue={eventInfo.time} // Pre-populate with fetched data
            render={({ field: { value, onChange } }) => (
              <div>
                <label htmlFor="time" className="font-serif text-xl">
                  Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  value={value}
                  onChange={onChange}
                />
                {errors.time && (
                  <span className="text-red-500">
                    {errors.time.message || "Time is required"}
                  </span>
                )}{" "}
              </div>
            )}
          />
          <Controller
            control={control}
            name="category"
            defaultValue={eventInfo.category} // Pre-populate with fetched data
            render={({ field: { value, onChange } }) => (
              <div>
                <label htmlFor="category" className="font-serif text-xl">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  value={value} // Use value from controller
                  onChange={onChange} // Use onChange from controller
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
                </select>
                {errors.category && (
                  <span className="text-red-500">
                    {errors.category.message || "Category is required"}
                  </span>
                )}{" "}
              </div>
            )}
          />
          <div>
            <label htmlFor="location" className="font-serif text-xl">
              Event Location
            </label>
            <input
              id="location"
              name="location" // Maintain name for potential future editability
              type="text"
              autoComplete="location"
              className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Location "
              value={eventInfo?.location}
            />
          </div>
          <div>
            <label htmlFor="image" className="font-serif text-xl">
              Image
            </label>
            <input
              {...register("image", { required: true })} // Use register for validation
              id="image"
              name="image"
              type="text"
              autoComplete="image"
              className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Image Url"
              defaultValue={eventInfo?.image} // Pre-populate with fetched data
            />
            {errors.image && (
              <span className="text-red-500">
                {errors.image.message || "Image URL required"}
              </span>
            )}{" "}
            {/* Display validation errors */}
          </div>

          <div>
            <label htmlFor="creatorName" className="font-serif text-xl">
              creatorEmail
            </label>
            <input
              id="creatorEmail"
              name="creatorEmail" // Maintain name for potential future editability
              type="email"
              autoComplete="creatorEmail"
              className="text-xl block w-full px-3 py-3 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
              placeholder="Creator Name"
              value={user?.creatorEmail || "N/A"} // Display "N/A" if user?.displayName is null or undefined
              readOnly // Make the field read-only
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary font-semibold">
            Update Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
