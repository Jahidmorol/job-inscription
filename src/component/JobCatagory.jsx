import React, { useEffect, useState } from "react";
import Job from "./Job";

const JobCatagory = () => {
    const [jobs, setJobs] = useState([])
    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } ,[])
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-3">Job Category List</h2>
        <p className="text-sm text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 ">
        {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default JobCatagory;
