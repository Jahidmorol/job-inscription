import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Fjob = ({ fJob }) => {
  const {
    img,
    jobTitle,
    company,
    remoteOrOnsite,
    fullOrHalfTime,
    jobLocation,
    salary,
    id,
  } = fJob;
  return (
    <div className="p-6 md:p-12 border rounded-md">
      <img className="w-44 h-12" src={img} alt="" />
      <h1 className="font-bold text-3xl pt-4 text-gray-600">{jobTitle}</h1>
      <p className="font-semibold pt-1 text-xl text-gray-500">{company}</p>
      <div className="flex pt-4 gap-6">
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-purple-300 ">
          {remoteOrOnsite}
        </p>
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-purple-300 ">
          {fullOrHalfTime}
        </p>
      </div>
      <div className="flex pt-4  pb-8 gap-6 md:gap-12">
        <p className="inline-flex">
          <MapPinIcon className="h-6 w-6 text-gray-400" />
          {jobLocation}
        </p>
        <p className="inline-flex ">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
          {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default Fjob;
