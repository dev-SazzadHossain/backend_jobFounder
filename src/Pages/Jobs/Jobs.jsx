import React from "react";
import SingleJobs from "../SingleJobs/SingleJobs";
import img from "../../assets/1.webp";
import { useAllJobsApiQuery } from "../../Features/AddJob/AddJobApi";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { search } = useSelector((state) => state);
  const { data, isLoading, isError, isSuccess, error } = useAllJobsApiQuery({
    name: search?.name.toLowerCase(),
    city: search?.city.toLowerCase(),
    category: search?.category.toLowerCase(),
  });
  let content = null;

  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <p className="text-red-500 font-Poppins">{error.message}</p>;
  }
  if (!isLoading && !isError && data?.data.length === 0) {
    content = <div>jobs Filed is Empty</div>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((job) => <SingleJobs key={job?._id} job={job} />);
  }
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {content}
    </div>
  );
};

export default Jobs;
