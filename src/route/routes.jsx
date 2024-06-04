import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivetRoute from "./ProvetRoute/PrivetRoute";
import ErrorPage from "../pages/ErrorPage";

import MyEvent from "../pages/dashboard/MyEvent";
import DashboardLayout from "../layouts/DashboardLayout";
import EventForm from "../pages/CreateEvent";
import Events from "../pages/events/Events";
import EditEvent from "../pages/dashboard/EditEvent";

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
        path: "my-event",
        element: (
          <PrivetRoute>
            <MyEvent></MyEvent>
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
    ],
  },
]);
