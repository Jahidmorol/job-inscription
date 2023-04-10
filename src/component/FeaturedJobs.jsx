import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Fjob from "./Fjob";

const FeaturedJobs = () => {
  const [fJobs, setFjobs] = useState([]);
  const [hide, setHide] = useState(false);
  const jobs = useLoaderData();
  useEffect(() => {
    const slicing = jobs.slice(0, 4);
    setFjobs(slicing);
    setHide(true);
  }, []);

  const seeMoreBtn = () => {
    setFjobs(jobs);
    setHide(false);
  };

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
        {fJobs.map((fJob) => (
          <Fjob key={fJob.id} fJob={fJob}></Fjob>
        ))}
      </div>
      <div className="text-center mt-5">
        <button onClick={seeMoreBtn} className={hide ? "btn" : "hidden"}>
          See More
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
