import { Link } from "react-router-dom";
import eventifyLogo from "../assets/images/eventify.png";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout().then(() => {
      toast.success("Logout Seccessful!!!");
    });
  };

  return (
    <div>
      <div className="navbar bg-slate-600 lg:text-slate-50  text-black top-0 fixed z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/event"}>Events</Link>
              </li>
              <li>
                <Link to={"/create-event"}>CreateEvent</Link>
              </li>

              {!user && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/registration"}>Register</Link>
                  </li>
                </>
              )}

              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12 h-12 rounded-full" src={eventifyLogo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/event"}>Events</Link>
            </li>
            <li>
              <Link to={"/create-event"}>CreateEvent</Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/registration"}>Register</Link>
                </li>
              </>
            )}

            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
        {user && (
          <div className="navbar-end">
            <img
              className="rounded-full h-12 w-12"
              src={user?.photoURL}
              alt=""
            />
            <Link className="btn mx-2">Profile</Link>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
