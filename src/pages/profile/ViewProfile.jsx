import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileCard from "./ProfileCard";

const ViewProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
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
  console.log(userInfo);
  if (loading) {
    return <div>Loading User details...</div>;
  }
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <ProfileCard user={userInfo} />
    </div>
  );
};

export default ViewProfile;
