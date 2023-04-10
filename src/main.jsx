import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Applied from "./component/Applied";
import Blog from "./component/Blog";
import Home from "./component/Home";
import JobDetails from "./component/JobDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => await fetch("../featured.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch('')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
