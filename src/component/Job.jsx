import React from "react";

const job = ({ job }) => {
  return (
    <div className="bg-gray-100 p-8 h-52 rounded-lg">
      <div className="mb-6 bg-gray-200 w-14 h-14 rounded flex items-center justify-center">
        <img src={job.img} alt="" />
      </div>
      <h3 className="font-bold text-gray-700">{job.title}</h3>
      <p className="text-gray-500">{job.availableNumber} Jobs Available</p>
    </div>
  );
};

export default job;
