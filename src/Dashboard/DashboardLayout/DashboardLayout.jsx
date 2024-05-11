import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { MdOutlineMenuOpen, MdOutlineRestaurantMenu } from "react-icons/md";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWidthSize(width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    widthSize > 1024 && setOpen(false);
  }, [widthSize]);
  return (
    <div className=" flex ">
      <div>
        <div
          className={`lg:static md:static sm:absolute absolute ${
            !open ? "left-[-300px]" : "left-0"
          }  top-0 transition-all duration-300 z-50 bg-slate-300 h-screen overflow-auto `}
        >
          <Sidebar setOpen={setOpen} open={open} />
        </div>
        <div
          className={`lg:hidden md:hidden  w-full shadow-md absolute left-0 top-0 ${
            open ? "transition-all duration-300" : "transition-all duration-300"
          } flex justify-between items-center px-3 py-3`}
        >
          {!open ? (
            <span>
              <MdOutlineMenuOpen
                onClick={() => setOpen((prv) => !prv)}
                fontSize="38px"
              />
            </span>
          ) : (
            <span>
              <MdOutlineRestaurantMenu
                onClick={() => setOpen((prv) => !prv)}
                fontSize="38px"
              />
            </span>
          )}
          <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-700 to-pink-600 rounded-full"></div>
        </div>

        {/* mobile */}
      </div>

      <div className="lg:pt-3 md:pt-3 pt-16 w-full h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
