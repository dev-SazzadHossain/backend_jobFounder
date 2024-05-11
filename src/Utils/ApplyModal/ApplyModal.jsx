import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
function ApplyModal({ open, setOpen }) {
  return (
    <div className=" w-full relative">
      <Modal
        open={open}
        center
        blockScroll={true}
        showCloseIcon={false}
        animationDuration={600}
        styles={{
          modal: {
            background: "#fff",
            boxShadow: "1px 1px 5px 0px  #000",
            borderRadius: "10px",
            display: "inline-block",
            minWidth: "60%",
            position: "relative",
          },
          overlay: {
            background: "none",
          },
          modalContainer: {
            width: "100%",
            maxWidth: "90%",
            margin: "0 auto",
          },
        }}
      >
        <form className="w-full p-5 flex flex-col  justify-center  gap-5 ">
          {/* company name */}
          <div className="flex gap-3 items-center w-full mt-10">
            <label htmlFor="companyName" className="w-[200px]">
              Your Full Name :
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Full Name"
              className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
            />
          </div>

          {/* company location */}
          <div className="flex gap-3 items-center">
            <label htmlFor="companyLocation" className="w-[200px]">
              Your Email Address :
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email Address"
              className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
            />
          </div>

          {/* company position */}
          <div className="flex gap-3 items-center">
            <label htmlFor="jobLocation" className="w-[200px]">
              Your Phone Number :
            </label>
            <input
              type="number"
              name="phoneNumber"
              id=""
              placeholder="Your Phone Number"
              className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
            />
          </div>

          {/* company position */}
          <div className="flex gap-3 items-center">
            <label htmlFor="description" className="w-[200px]">
              Description :
            </label>
            <textarea
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
              Expected Salary :
            </label>
            <input
              type="number "
              name="salary"
              id=""
              placeholder="Salary"
              className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
            />
          </div>

          {/* Company category */}
          <div className="flex gap-3 items-center">
            <label htmlFor="category" className="w-[200px]">
              Resume :
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              className="outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90  w-full"
            />
          </div>
          <div className=" flex  justify-center items-center">
            <button
              type="submit"
              className=" group border-none outline-none text-lg tracking-wide hover:tracking-wider transition-all duration-300  hover:text-white px-10 py-3 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity"
            >
              Submit
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
          </div>
        </form>
        <button
          onClick={() => setOpen(false)}
          className=" absolute right-5 top-5 hover:rotate-180 duration-300 hover:shadow-lg hover:shadow-red-600/55 transition-all px-1 py-1 rounded-lg"
        >
          <MdOutlineClose size="28px" />
        </button>
      </Modal>
    </div>
  );
}

export default ApplyModal;
