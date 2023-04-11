import React from "react";
import { Link } from "react-router-dom";

const HomeCover = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between lg:flex-row">
      <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
        <div className="max-w-xl mb-6 lg:mt-8">
          <h2 className="max-w-lg mb-6 font-sans font-semibold tracking-tight text-gray-900 text-4xl sm:text-5xl sm:leading-none md:text-6xl md:leading-none">
            One Step
            <br className="block sm:hidden md:block" /> Closer To Your <br />
            <span className="inline-block  text-purple-400">Dream Job</span>
          </h2>
          <p className="text-gray-700 text-sm lg:max-w-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Link to="/" className="btn md:w-auto md:mr-4">
            <button className="mx-3">Visit Store</button>
          </Link>
        </div>
      </div>
      <div className="md:w-2/3 lg:w-1/2">
        <img src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default HomeCover;
