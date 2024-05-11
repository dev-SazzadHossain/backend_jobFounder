import React from "react";
import SingleCategory from "../SingleCategory/SingleCategory";
import { useAllCategoryQuery } from "../../Features/Category/CategoryApi";
const categoryList = [
  { name: "Web Design", jobs: 33 },
  { name: "Web Development", jobs: 34 },
  { name: "React", jobs: 56 },
  { name: "Mern Stack Development", jobs: 567 },
];

const Category = () => {
  const { data, isLoading, isSuccess, error, isError } = useAllCategoryQuery();

  let content = null;

  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <p className="text-red-500 font-Poppins">{error.message}</p>;
  }
  if (!isLoading && !isError && data?.data.length === 0) {
    content = <div>Category Filed is Empty</div>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((category) => (
      <SingleCategory key={category?._id} category={category} />
    ));
  }
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
        {content}
      </div>
    </div>
  );
};

export default Category;
