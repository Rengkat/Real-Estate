import React from "react";
import Testimonial from "./Testimonial";

const FooterHome = () => {
  return (
    <div className="footerHome h-[35vh] md:h-[50vh] w-full pt-12 ">
      <div className=" absolute z-10 text-textWhite p-5 text-center">
        <h1 className="font-bold text-2xl py-5 md:text-5xl md:pl-[12rem] ">
          Some of Our Happy Clients
        </h1>
        <p className="md:pl-[10rem] md:text-xl md:py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, sequi.
        </p>
        <p className="hidden md:block md:pl-[4rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi!
        </p>
      </div>
    </div>
  );
};

export default FooterHome;
