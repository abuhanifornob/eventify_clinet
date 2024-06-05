import { useEffect, useState } from "react";
import SingalEventForEdit from "./SingalEventForEdit";

const EditabelAllEvents = () => {
  const [editableEvent, setEditableEvent] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => {
        setEditableEvent(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Render loading state while fetching
  }
  const handleDeleteProduct = (id) => {
    setEditableEvent(editableEvent.filter((evnet) => evnet._id !== id));
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {editableEvent.map((event) => (
          <SingalEventForEdit
            key={event._id}
            event={event}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default EditabelAllEvents;
