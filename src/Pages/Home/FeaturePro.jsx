import React from "react";
import Inspection from "./Inspection";
import hero1 from "../../assets/Image/hero1.jpg";

const FeaturePro = () => {
  return (
    <div className=" px-6 pt-6 pb-5 bg-lightBg">
      <div>
        <div className="top pb-4 text-center">
          <h1 className="font-bold text-2xl text-darkBg">
            The New Way to Rent
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ad
            hic.
          </p>
        </div>
        <div className=" my-5">
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

          <div className="w-[100%] mt-10">
            <img src={hero1} alt="" className="w-[100%] h-[30vh] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePro;
