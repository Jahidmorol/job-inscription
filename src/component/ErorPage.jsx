import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { ExclamationCircleIcon,FaceFrownIcon } from "@heroicons/react/24/solid";
const ErorPage = () => {
    const { error, status } = useRouteError();
  return (
    <div>
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <div>
          <p className="flex justify-center">
            <FaceFrownIcon className="h-40 w-40 text-purple-400" />
          </p>
          <p className="text-3xl text-center font-semibold text-red-700">
            oppes!!
          </p>
          <h1 className="text-white text-3xl my-5 font-bold uppercase">
            {error.message}
          </h1>
          <Link className="flex justify-center" to="/">
            <button className="btn ">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErorPage;
