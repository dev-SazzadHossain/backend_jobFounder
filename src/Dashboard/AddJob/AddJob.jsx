import React, { useEffect, useState } from "react";
import { useAllCategoryQuery } from "../../Features/Category/CategoryApi";
import { useAddJobMutation } from "../../Features/AddJob/AddJobApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// const jon={
//     logo,
//     companyName,
//     location,
//     position,
//     duration,
//     description,
//     salary,
// }

const AddJob = () => {
  const { data, isLoading, isSuccess, error, isError } = useAllCategoryQuery();
  const [addJob, { data: jobData, isLoading: JobLoading }] =
    useAddJobMutation();
  console.log(JobLoading);
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState({
    logo: "",
    companyName: "",
    location: "",
    position: "",
    duration: "",
    description: "",
    salary: "",
    category: "",
    experience: "",
    qualification: "",
    level: "",
    applied: "",
    applicationEnd: "",
  });

  const [preview, setPreview] = useState(null);

  const handelFile = (e) => {
    const selectFile = e.target.files[0];
    setJobsData((prv) => ({ ...prv, logo: selectFile }));
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectFile);
  };

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJobsData((prv) => ({ ...prv, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", jobsData.logo);
    formData.append("companyName", jobsData.companyName);
    formData.append("location", jobsData.location);
    formData.append("position", jobsData.position);
    formData.append("duration", jobsData.duration);
    formData.append("description", jobsData.description);
    formData.append("salary", jobsData.salary);
    formData.append("category", jobsData.category);
    formData.append("experience", jobsData.experience);
    formData.append("qualification", jobsData.qualification);
    formData.append("level", jobsData.level);
    formData.append("applied", jobsData.applied);
    formData.append("applicationEnd", jobsData.applicationEnd);

    try {
      await addJob(formData);
      // Handle success if needed
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    if (jobData?.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${jobData?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  }, [jobData]);

  return (
    <div className="px-3 flex flex-col justify-center items-center py-10">
      <form
        onSubmit={handelSubmit}
        className="lg:w-[600px] w-full shadow-md p-5 flex flex-col  justify-center  gap-5"
      >
        <div className="flex items-center">
          <label htmlFor="logo" className="w-[200px]">
            Company Logo :
          </label>
          <label
            for="uploadFile1"
            class=" bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded  cursor-pointer mx-auto font-[sans-serif]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 mr-2 fill-white inline"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
              />
            </svg>
            {Boolean(jobsData?.logo) ? "Update" : " Upload"}
            <input
              onChange={handelFile}
              type="file"
              id="uploadFile1"
              class="hidden"
            />
          </label>

          {preview && (
            <div className="w-[20%] shadow-md  h-[70px] rounded-lg relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full bg-cover h-full object-contain rounded-lg"
              />
            </div>
          )}
        </div>
        {/* company name */}
        <div className="flex gap-3 items-center">
          <label htmlFor="companyName" className="w-[200px]">
            CompanyName :
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="companyName"
            id=""
            placeholder="company Name"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>

        {/* company location */}
        <div className="flex gap-3 items-center">
          <label htmlFor="companyLocation" className="w-[200px]">
            CompanyLocation :
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="location"
            id=""
            placeholder="company Location"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>

        {/* company position */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            JobPosition :
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="position"
            id=""
            placeholder="company position"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        {/* company experience */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            Experience :
          </label>
          <input
            onChange={handelChange}
            type="number"
            name="experience"
            id=""
            placeholder="Experience"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>

        {/* Company Duration */}
        <div className="flex gap-3 items-center">
          <label htmlFor="duration" className="w-[200px]">
            Duration :
          </label>
          <select
            onChange={handelChange}
            name="duration"
            id=""
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          >
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="intern">Intern</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        {/* company position */}
        <div className="flex gap-3 items-center">
          <label htmlFor="description" className="w-[200px]">
            Description :
          </label>
          <textarea
            onChange={handelChange}
            rows="3"
            type="text"
            name="description"
            id=""
            placeholder="Description"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        {/* company position */}
        <div className="flex gap-3 items-center">
          <label htmlFor="description" className="w-[200px]">
            Salary :
          </label>
          <input
            onChange={handelChange}
            type="number"
            name="salary"
            id=""
            placeholder="Salary"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>

        {/* Company category */}
        <div className="flex gap-3 items-center">
          <label htmlFor="category" className="w-[200px]">
            Category :
          </label>
          <select
            onChange={handelChange}
            name="category"
            id=""
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          >
            {isLoading
              ? "Loading"
              : isSuccess &&
                data?.data?.map((category) => (
                  <option key={category?._id} value={category?.categoryName}>
                    {category?.categoryName}
                  </option>
                ))}
          </select>
        </div>
        {/* company qualification */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            Qualification :
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="qualification"
            id=""
            placeholder="Qualification"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        {/* company level */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            Level :
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="level"
            id=""
            placeholder="Level"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        {/* company applied */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            Applied :
          </label>
          <input
            onChange={handelChange}
            type="number"
            name="applied"
            id=""
            placeholder="Applied"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        {/* company applicationEnd */}
        <div className="flex gap-3 items-center">
          <label htmlFor="jobLocation" className="w-[200px]">
            ApplicationEnd :
          </label>
          <input
            onChange={handelChange}
            type="date"
            name="applicationEnd"
            id=""
            placeholder="Application End"
            className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
          />
        </div>
        <div className=" flex  justify-center items-center">
          <button
            type="submit"
            disabled={JobLoading}
            className={` group border-none outline-none text-lg tracking-wide hover:tracking-wider transition-all duration-300  hover:text-white px-10 py-3  text-white rounded-lg flex justify-center items-center group/arrowOpacity ${
              JobLoading ? "bg-black" : "bg-red-400"
            }`}
          >
            {JobLoading ? "Loading " : "Add Job"}

            <div>
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
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
