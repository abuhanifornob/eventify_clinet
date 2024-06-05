import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileUpdateForm from "./ProfileUpdateForm";
import toast from "react-hot-toast";

const EditProfile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (user) {
      fetch(`https://eventify-server-pe8m.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <div>Loading event details...</div>;
  }
  const handleProfileUpdate = async (updatedData) => {
    fetch(`https://eventify-server-pe8m.vercel.app/users/${user.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Profile Update Success");
        setUserInfo(data); // Update local state with the new user info
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ProfileUpdateForm user={userInfo} onSubmit={handleProfileUpdate} />
    </div>
  );
};

export default EditProfile;
