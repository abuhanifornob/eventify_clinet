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
import ProfileLayout from "../layouts/ProfileLayout";
import ProfileHome from "../pages/profile/ProfileHome";
import ViewProfile from "../pages/profile/ViewProfile";

import EditProfile from "../pages/profile/EditProfile";

import SearchPage from "../pages/search/SearchPage";

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
        path: "/search",
        element: <SearchPage />,
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
          fetch(`https://eventify-server-beta.vercel.app/events/${params.id}`),
      },
    ],
  },
  {
    path: "profile",
    element: (
      <PrivetRoute>
        {" "}
        <ProfileLayout />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivetRoute>
            <ProfileHome />
          </PrivetRoute>
        ),
      },
      {
        path: "viewProfile",
        element: (
          <PrivetRoute>
            <ViewProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "editProfile",
        element: (
          <PrivetRoute>
            <EditProfile />
          </PrivetRoute>
        ),
      },
    ],
  },
]);
