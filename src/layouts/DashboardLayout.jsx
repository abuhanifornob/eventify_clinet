import { Link, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />

      <div className="drawer lg:drawer-open mt-16 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center m-20">
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
          <ul className="menu p-4 w-60 min-h-full bg-slate-500 text-white font-serif">
            {/* Sidebar content here */}
            <h3 className="text-orange-400 font-semibold text-xl my-10">
              Your All Information Hear
            </h3>
            <li>
              <Link to={"editabelAllEvent"}>Edit Event</Link>
            </li>
            <li>
              <Link to={"event"}>My Event</Link>
            </li>
            <li>
              <Link to={"booking"}>Booking List</Link>
            </li>
            <li>
              <Link to={"statistic"}>statistic</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
