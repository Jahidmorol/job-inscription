import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilitis/fakeDb";
import Ajob from "./Ajob";

const Applied = () => {
  const aData = useLoaderData();
  //   const [jobs, setJobs] = useState([]);
  const [aJobs, setAjobs] = useState([]);

  useEffect(() => {
    const storedJobs = getShoppingCart();
    let savedJobs = [];

    for (const id in storedJobs) {
      const addedJobs = aData.find((data) => data.id == id);
      if (addedJobs) {
        savedJobs.push(addedJobs);
      }
      setAjobs(savedJobs);
    }
  }, [aData]);
  //   console.log(aJobs);
  return (
    <div className="my-container">
      {aJobs.map((aJob) => (
        <Ajob key={aJob.id} job={aJob}></Ajob>
      ))}
    </div>
  );
};

export default Applied;
