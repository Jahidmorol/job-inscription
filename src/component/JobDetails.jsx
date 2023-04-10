import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const getId = useParams();
  console.log(getId);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("../../featured.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
//   for (const sData of data) { 
    const details = data.find(singleData => singleData.id === getId.id)
    console.log(details);
  

  return (
    <div>
      <p>its job details</p>
    </div>
  );
};

export default JobDetails;
