/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Event = ({ event }) => {
  const { category, date, description, image, location, time } = event;
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Welcome to {category}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="card w-96 overflow-hidden shadow-lg hover:scale-110">
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
            <button className="btn btn-primary">See Details</button>

            <button
              className="btn bg-rose-500"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
