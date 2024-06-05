import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileCard from "./ProfileCard";

const ViewProfile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user?.email}`)
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
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <ProfileCard user={userInfo} />
    </div>
  );
};

export default ViewProfile;
