import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SingleJobDetails from "./SingleJobDetails";

const JobDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location?.pathname]);
  return (
    <div className="">
      <div className="flex flex-col gap-5 justify-center items-center h-[250px]">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide">
          Job Details
        </h1>
        <p className=" flex justify-center items-center gap-3">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-pink-500 transition-all duration-300 cursor-pointer"
          >
            Home
          </Link>{" "}
          ||{" "}
          <span className="text-lg font-semibold tracking-wide text-violet-600">
            job details
          </span>
        </p>
      </div>
      {/* single job details */}

      <div>
        <SingleJobDetails />
      </div>
      {/* single job details */}
    </div>
  );
};

export default JobDetails;
