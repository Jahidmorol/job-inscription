import React from "react";
import { useLoaderData } from "react-router-dom";
import Fjob from "./Fjob";

const FeaturedJobs = () => {
    const fJobs = useLoaderData()
    console.log(fJobs);
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-3">Featured Jobs</h2>
        <p className="text-sm text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-5 mt-5">
        {
            fJobs.map(fJob => <Fjob key={fJob.id} fJob={fJob} ></Fjob>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
