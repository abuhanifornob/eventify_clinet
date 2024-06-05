import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const ProfileLayout = () => {
  const { user, logout, passworrReset } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(() => {
      toast.success("Logout Seccessful!!!");
    });
  };
  const handleChangePassword = async () => {
    await passworrReset(user.email).then(() => {
      toast.success(`Please check your email: ${user.email}`);
      navigate("/");
    });
  };

  return (
    <>
      <Navbar />

      <div className="drawer lg:drawer-open mt-16 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-20">
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-300 text-black text-2xl font-serif">
            {/* Sidebar content here */}
            <img
              className="w-32 h-32 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h3 className="text-orange-400 font-semibold text-3xl my-10">
              {user?.displayName}
            </h3>
            <li>
              <Link to={"viewProfile"}>View Profile</Link>
            </li>
            <li>
              <Link to={"editProfile"}>Edit Profile</Link>
            </li>
            <li>
              <button onClick={handleChangePassword}>Change Password</button>
            </li>
            <li>
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
