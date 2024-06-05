import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivetRoute from "./ProvetRoute/PrivetRoute";
import ErrorPage from "../pages/ErrorPage";

import DashboardLayout from "../layouts/DashboardLayout";
import EventForm from "../pages/CreateEvent";
import Events from "../pages/events/Events";
import EditEvent from "../pages/dashboard/EditEvent";
import Edit from "../components/dashboard/Edit";
import DashboardHome from "../pages/dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/event",
        element: <Events />,
      },
      {
        path: "/create-event",
        element: (
          <PrivetRoute>
            <EventForm />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        {" "}
        <DashboardLayout />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivetRoute>
            <DashboardHome />
          </PrivetRoute>
        ),
      },

      {
        path: "editabelAllEvent",
        element: (
          <PrivetRoute>
            <EditEvent />
          </PrivetRoute>
        ),
      },
      {
        path: "editabelAllEvent/edit-event/:id",
        element: (
          <PrivetRoute>
            <Edit />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
    ],
  },
]);
