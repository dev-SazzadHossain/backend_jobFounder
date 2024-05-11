import React from "react";
import { useMyPostApiQuery } from "../../Features/AddJob/AddJobApi";
import SinglePost from "../SinglePost/SinglePost";

const MyPost = () => {
  const { data, isLoading, isError, isSuccess, error } = useMyPostApiQuery();
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
    content = data?.data?.map((post) => (
      <SinglePost key={post?._id} post={post} />
    ));
  }
  return (
    <div className="pt-[100px] pb-10">
      <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
        {content}
      </div>
    </div>
  );
};

export default MyPost;
