import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilitis/fakeDb";
import Ajob from "./Ajob";

const Applied = () => {
  const aData = useLoaderData();
  const [aJobs, setAjobs] = useState([])
  const [bJobs, setBjobs] = useState([])
 
  useEffect(() => {
    const storedJobs = getShoppingCart();
    let savedJobs = [];

    for (const id in storedJobs) {
      const addedJobs = aData.find((data) => data.id == id);
      if (addedJobs) {
        savedJobs.push(addedJobs);
      }
      setAjobs(savedJobs)
      setBjobs(savedJobs)
    }
  }, [aData]);

  useEffect(()=>{
    
  },[])
  const handleRemote = () => {
    const remote = bJobs.filter(aJob => aJob.remoteOrOnsite == 'Remote')
    setAjobs(remote)
  }
  const handleOnsite = () => {
    const onsite = bJobs.filter(aJob => aJob.remoteOrOnsite == 'Onsite')
    setAjobs(onsite)
  }


  return (
    <div className="my-container">
      <h1 className="text-3xl text-center text-gray-700 font-bold">Applied Jobs </h1>
      <div className="text-right">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="flex items-center h-7 bg-slate-200 p-5 rounded m-1"
          >
            <span>Filter By</span>
            <ChevronDownIcon className="h-6 w-6 text-blue-500" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleRemote}>See Remote jobs</a>
            </li>
            <li>
              <a onClick={handleOnsite}>See Onsite jobs</a>
            </li>
          </ul>
        </div>
      </div>
      {aJobs.map((aJob) => (
        <Ajob key={aJob.id} job={aJob}></Ajob>
      ))}
    </div>
  );
};

export default Applied;
