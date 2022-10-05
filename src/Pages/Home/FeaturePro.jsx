import React from "react";
import Inspection from "./Inspection";
import hero1 from "../../assets/Image/hero1.jpg";

const FeaturePro = () => {
  return (
    <div className=" px-6 pt-6 pb-5 md:py-[15rem] bg-lightBg ">
      <div className="md:w-[80%] lg:w-[80%] mx-auto">
        <div className="top pb-4 text-center md:w-[45%] md:flex justify-start">
          <div>
            <h1 className="font-bold text-2xl text-darkBg md:text-5xl">
              The New Way to Rent
            </h1>
            <p className=" md:text-2xl md:py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              ad hic.
            </p>
          </div>
        </div>
        <div className=" my-5 md:flex justify-between">
          <div>
            <Inspection
              heading="Tour Virtually"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Inspection
              heading="Reserve Now"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Inspection
              heading="Apply Now"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>

          <div className="w-[100%] md:w-[50%] mt-10 md:mt-2">
            <img
              src={hero1}
              alt=""
              className="w-[100%] h-[30vh] md:h-[60vh] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePro;
