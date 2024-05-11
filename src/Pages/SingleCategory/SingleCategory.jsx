import React from "react";

const SingleCategory = ({ category }) => {
  const { categoryName, jobCount } = category;
  return (
    <div className="lg:mb-0 md:mb-0 sm:mb-0 mb-3">
      <div className=" bg-gradient-to-r  from-violet-500 to-pink-500 p-10 rounded-md shadow-md shadow-violet-500/30 group transition-all duration-300 hover:shadow-2xl cursor-pointer hover:shadow-pink-500/40 flex justify-between items-center">
        <p className=" font-Poppins text-white font-semibold flex justify-between tracking-wide text-xl group-hover:tracking-wider transition-all duration-300 capitalize">
          {categoryName}
        </p>
        <span className="font-Poppins text-white font-semibold  tracking-wide text-xl group-hover:tracking-wider transition-all duration-300">
          {jobCount}
        </span>
      </div>
    </div>
  );
};

export default SingleCategory;
