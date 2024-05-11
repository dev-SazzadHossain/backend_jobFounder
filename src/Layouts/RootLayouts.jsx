import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const RootLayouts = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto  px-5 lg:px-0 md:px-0 sm:px-0 ">
          <Navbar />
        </div>
      </div>

      <div className="container mx-auto  px-5 lg:px-0 md:px-0 sm:px-0">
        <Outlet />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayouts;
