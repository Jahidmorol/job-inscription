import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Ajob = ({ job }) => {
  const {
    salary,
    jobTitle,
    jobLocation,
    id,
    img,
    company,
    remoteOrOnsite,
    fullOrHalfTime,
  } = job;
  return (
    <div className="md:flex justify-between items-center border rounded-lg my-6 p-5">
      <div className=" md:flex gap-5 items-center">
        <div className=" bg-slate-200 h-40 w-40 flex items-center rounded-lg">
          <img className="w-28 mx-auto text-center" src={img} alt="" />
        </div>
        <div className="">
          <h1 className="font-semibold py-3 text-2xl text-gray-700">
            {jobTitle}
          </h1>
          <h2>{company}</h2>
          <div className="flex pt-4 gap-6">
            <p className="py-1.5 px-4 border rounded-sm  font-semibold  border-blue-400 text-green-500 ">
              {remoteOrOnsite}
            </p>
            <p className="py-1.5 px-4 border rounded-sm font-semibold  border-blue-400 text-green-500 ">
              {fullOrHalfTime}
            </p>
          </div>
          <div className="flex py-4   gap-7">
            <p className="inline-flex">
              <MapPinIcon className="h-6 w-6 text-gray-400" />
              {jobLocation}
            </p>
            <p className="inline-flex ">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              <span>Salary : {salary}</span>
            </p>
          </div>
        </div>
      </div>

      <Link to={`/job/${id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default Ajob;
