import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Applied from "./component/Applied";
import Blog from "./component/Blog";
import ErorPage from "./component/ErorPage";
import Home from "./component/Home";
import JobDetails from "./component/JobDetails";
import Statistics from "./component/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErorPage></ErorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => await fetch("/featured.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: async () => await fetch("/featured.json"),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const jobs = await fetch("/featured.json");
          const newJob = await jobs.json();
          const singleJob = newJob.find((jb) => jb.id == params.id);
          return singleJob;
        },
        // loader: () => fetch('featured.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
