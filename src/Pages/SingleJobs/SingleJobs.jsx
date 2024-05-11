import React from "react";
import { Link } from "react-router-dom";

const SingleJobs = ({ job }) => {
  const {
    logo,
    companyName,
    location,
    position,
    duration,
    description,
    salary,
    _id,
  } = job;
  return (
    <div className=" shadow-lg shadow-gray-500/70 rounded-lg p-5 h-[400px] cursor-pointer">
      <div className="flex  items-center gap-5 ">
        <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
          <img
            className=" w-[100px] h-[100px] hover:scale-150 object-cover transition-all duration-300 rounded-full shadow-md shadow-violet-900/65"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <h2 className="pb-2 font-Poppins tracking-wide text-xl uppercase font-bold text-gray-700 hover:tracking-wider transition-all duration-300">
            {companyName}
          </h2>
          <h3 className=" font-Poppins tracking-wide text-sm font-bold  capitalize text-gray-500">
            {location}
          </h3>
        </div>
      </div>
      <h3 className="pt-5 font-Poppins text-xl font-semibold text-gray-600 capitalize">
        {position}
      </h3>
      <h5 className="py-2 text-violet-600 font-bold capitalize">{duration}</h5>
      <p className=" text-sm text-gray-500 h-[100px]  flex items-center">
        {description.length > 200
          ? `${description.slice(0, 200)}.......`
          : description}
      </p>
      <p className=" py-3 font-bold"> ${salary} /month</p>

      <div>
        <Link to={`/jobDetails/${_id}`}>
          <button className=" group border-none outline-none text-lg tracking-wide hover:tracking-wider transition-all duration-300  hover:text-white px-5 py-2 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity ">
            Apply Now{" "}
            <span className="group-hover:translate-x-2 transition-all duration-300    group-hover/arrowOpacity:opacity-100 opacity-0">
              <svg
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleJobs;
