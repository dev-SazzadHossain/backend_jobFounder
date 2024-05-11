import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  categoryAction,
  cityAction,
  nameAction,
} from "../../Features/Search/searchSlice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div className=' bg-[url("https://img.freepik.com/free-photo/coworkers-having-work-meeting-office_23-2148985459.jpg?t=st=1713867625~exp=1713871225~hmac=b45c99d69afc92be53121b006b19413c0d834322cf0b485b4f3abecb7a8097e7&w=740")] lg:h-[400px] md:h-[400px] h-[500px] w-full bg-center bg-no-repeat bg-cover relative flex flex-col  justify-center items-center'>
      <div className=" ">
        <h2 className=" relative z-10 text-white lg:text-5xl text-3xl font-Poppins text-center font-semibold">
          {" "}
          <span className=" text-violet-500">2,568</span> jobs available{" "}
        </h2>
        <h2 className=" relative z-10 text-white lg:text-5xl text-4xl font-Poppins text-center font-semibold tracking-wide pt-2">
          You can choose your dream job
        </h2>
        <p className=" lg:text-xl text-xl text-white relative z-10 font-Poppins text-center pt-5">
          Find great job for build your bright career. Have many job in this
          plactform.
        </p>
      </div>

      {/* search filed */}
      <form className=" relative z-10 text-center w-full flex flex-wrap justify-center lg:gap-3 lg:px-0 px-2 pt-5">
        <div className="lg:w-[300px] md:w-1/2 w-full lg:pr-0 md:pr-2 lg:pb-0 md:pb-0 pb-3">
          <input
            onChange={(e) => dispatch(nameAction(e.target.value))}
            type="text"
            name="jobs_title"
            id=""
            placeholder="jobs title or keywords"
            className="px-2 lg:py-5 md:py-5 py-3 border-none outline-none rounded-md font-Poppins text-lg font-medium w-full"
          />
        </div>
        <div className="flex items-center justify-center lg:w-[300px] md:w-1/2 w-full lg:pl-0 md:pl-2 lg:pb-0 md:pb-0 pb-3">
          <select
            onChange={(e) => dispatch(cityAction(e.target.value))}
            name="city"
            className=" appearance-auto px-2 lg:py-5 md:py-5 py-3 border-none outline-none rounded-md text-lg w-full"
          >
            <option value="" className="font-Poppins text-lg font-medium ">
              Choose City
            </option>
            <option
              value="newWork"
              className="font-Poppins text-lg font-medium "
            >
              New Work{" "}
            </option>
            <option value="dubai" className="font-Poppins text-lg font-medium ">
              Dubai
            </option>
          </select>
        </div>
        <div className="flex items-center justify-center lg:w-[300px] md:w-1/2 w-full lg:pr-0 md:pr-2">
          <select
            onChange={(e) => dispatch(categoryAction(e.target.value))}
            className=" appearance-auto px-2 lg:py-5 md:py-5 py-3 border-none outline-none rounded-md text-lg w-full"
          >
            <option
              className="font-Poppins text-lg font-medium "
              value="web design"
            >
              Web Design
            </option>
            <option
              className="font-Poppins text-lg font-medium "
              value="web development"
            >
              Web Development{" "}
            </option>
            <option
              className="font-Poppins text-lg font-medium "
              value="react developer"
            >
              React
            </option>
            <option
              className="font-Poppins text-lg font-medium "
              value="next js"
            >
              Next js
            </option>
            <option
              className="font-Poppins text-lg font-medium "
              value="mern stack development"
            >
              Mern Stack Development
            </option>
          </select>
        </div>
        <div className="lg:w-[300px] md:w-1/2 w-full lg:pl-0 md:pl-2">
          <div className="lg:block flex justify-center items-center lg:pt-0 pt-3 w-full">
            <button
              type="submit"
              className=" group border-none outline-none text-lg tracking-wide hover:tracking-wider transition-all duration-300  hover:text-white px-2 lg:py-5 md:py-5 py-3 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-between items-center group/arrowOpacity w-full"
            >
              Search{" "}
              <span className="group-hover:translate-x-2 transition-all duration-300  group-hover/arrowOpacity:opacity-100 opacity-0 flex">
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
                </svg>{" "}
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
          </div>
        </div>
      </form>
      {/* search filed */}
      <div className=" absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>
    </div>
  );
};

export default Hero;
