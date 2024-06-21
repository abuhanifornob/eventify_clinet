/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const SingalEventForEdit = ({ event, onDelete }) => {
  const { category, date, description, image, location, time, _id } = event;
  const token = localStorage.getItem("token");
  const handleDelete = async () => {
    await fetch(`https://eventify-server-beta.vercel.app/events/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("delete Success Fullay");
        onDelete(_id);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="card overflow-hidden shadow-lg">
        <figure>
          <img className="w-full h-48 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {category}
            <div className="badge badge-secondary">Booking Runing</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="font-bold text-xl ">Loaction: {location}</div>
            <div className="text-xl font-bold ">Event Date: {date}</div>
            <div className="text-xl font-bold ">Time: {time}</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="btn btn-primary">
              <Link to={`edit-event/${_id}`}>
                <span className="flex justify-center items-center gap-4 text-xl font-bold">
                  <CiEdit className="text-xl font-bold" />
                  Edit
                </span>
              </Link>
            </button>
            <button onClick={handleDelete} className="btn bg-red-600">
              {" "}
              <span className="flex justify-center items-center gap-4 text-xl font-bold">
                <MdDelete className="text-xl font-bold" /> Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingalEventForEdit;
