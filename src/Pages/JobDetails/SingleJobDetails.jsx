import React, { useState } from "react";
import img from "../../assets/1.webp";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import ApplyModal from "../../Utils/ApplyModal/ApplyModal";

function SingleJobDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="lg:flex justify-between items-center bg-[#fff] px-10 py-10 rounded-lg shadow-md shadow-gray-600/80">
        <div className="flex gap-5 w-full">
          <figure className=" w-[100px] h-[100px] bg-blue-100 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={img}
              alt=""
            />
          </figure>
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-gray-700">
              Senior Web Developer
            </h2>
            <h5 className="text-lg text-gray-500 font-medium">
              Obelus Concepts Ltd
            </h5>
            <div className="lg:flex md:flex sm:flex block gap-3 items-center justify-start pt-3 text-gray-700">
              <div className="flex items-center gap-1 justify-start ">
                <span>
                  {" "}
                  <IoLocationOutline size="17px" />
                </span>
                <p>yew york ,USA</p>
              </div>
              <div className="flex items-center gap-1 lg:pt-0 md:pt-0 sm:pt-0 pt-2">
                <span>
                  <FaPhone size="13px" />
                </span>
                <p>+340608934</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]  text-end flex flex-col justify-end items-end gap-4 lg:pt-0 pt-5">
          <p className="text-xl text-gray-700 font-semibold">6000/month</p>
          <div>
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 shadow-lg text-lg font-bold border-none outline-none rounded-lg bg-green-400 hover:bg-inherit hover:ring-2 hover:ring-pink-400 duration-300 transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* description and summery */}
      <div className="lg:flex justify-between  py-10 gap-5">
        <div className="lg:w-[70%] w-full  ">
          <h2 className="text-2xl font-bold tracking-wide">Description</h2>
          <p className=" text-justify text-lg leading-6 text-gray-500 pt-5">
            It is a long established fact that a reader will be distracted the
            readable content of page when looking atits layout. The point of
            using is that has more-or-less normal a distribution of letters, as
            opposed to usin content publishing packages web page editors. It is
            a long established fact that a reader will be distracts by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that has look like readable publishing packages
            and web page editors.
          </p>
          <h2 className="text-2xl font-bold tracking-wide pt-10">Benefits</h2>
          <div>
            <ul>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Work in a flat organization where your voice is always heard.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Provident fund.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Gratuity.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Medical Fund.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Having Corporate deals with multiple Hospitals.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Performance bonus.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Increment: Yearly.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Festival Bonus: 2 (Yearly)
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Lunch Facilities: Full Subsidize.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Unlimited Tea, Coffee & Snacks.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Annual tour.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Team Outing.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Marriage Bonus and Marriage Leave.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Paternity and Maternity Leave.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Yearly Family Tour.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Knowledge Sharing Session.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Leave Encashment Facilities.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Work with a vibrant team and amazing products.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Table Tennis (Ping Pong).
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Training and learning materials to improve skills.
                </li>
              </div>
              <div className="flex items-center gap-2 justify-start text-gray-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
                <li className=" text-justify text-lg  text-gray-500 pt-1">
                  Last but not the least, WorldClass Work Environment.
                </li>
              </div>
            </ul>
          </div>
        </div>
        {/* summery */}
        <div className="lg:w-[30%] w-full bg-gray-200 px-5 py-5 lg:mt-0 mt-10 h-[600px] sticky top-[80px] rounded-lg shadow-lg shadow-gray-700/85">
          <div className="">
            <h2 className="text-2xl font-bold tracking-wide pb-3">Summery</h2>
            <div className="w-[20%] h-[4px] bg-green-500"></div>
          </div>

          <ul className=" pt-5">
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
            {/* one item */}
            <div className="flex justify-start items-center gap-5 pb-3">
              <li className=" w-[40%] text-gray-500  text-lg font-medium tracking-tight">
                Job Type
              </li>{" "}
              <span className="flex-1">:</span>
              <li className="w-[50%]  text-sm font-semibold tracking-tight text-gray-500">
                full time job
              </li>
            </div>
            {/* one item */}
          </ul>
        </div>
      </div>
      {/* description and summery */}
      {/* apply modal */}
      {open && <ApplyModal open={open} setOpen={setOpen} />}
    </div>
  );
}

export default SingleJobDetails;
