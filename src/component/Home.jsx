import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";
import HomeCover from "./HomeCover";
import JobCatagory from "./JobCatagory";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <HomeCover></HomeCover>
      </div>
      <div className="my-container">
        <JobCatagory></JobCatagory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
