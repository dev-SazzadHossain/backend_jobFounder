import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Heading from "../../Utils/Heading/Heading";
import Category from "../Category/Category";
import Jobs from "../Jobs/Jobs";
import Process from "../Process/Process";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location?.pathname]);

  return (
    <div className=" pt-[100px]">
      <Hero />
      <div>
        <Heading
          heading="Popular Category"
          subHeading="Many desktop publishing packages and web page editors"
        />
        <Category />
      </div>
      <div>
        <Heading
          heading="Recent Job Circulars"
          subHeading="Many desktop publishing packages and web page editors"
        />
        <Jobs />
      </div>
      <div>
        <Heading
          heading="How It Work?"
          subHeading="Many desktop publishing packages and web page editors"
        />
        <Process />
      </div>
    </div>
  );
};

export default Home;
