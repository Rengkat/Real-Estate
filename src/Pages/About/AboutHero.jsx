import React from "react";

const AboutHero = ({ header, paragraph }) => {
  return (
    <div className="heroAbout h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center">
      <div className="absolute z-10">
        <div className="p-10 text-textWhite">
          <h1 className=" text-3xl font-bold py-3 md:text-5xl"> {header}</h1>
          <p className="md:text-xl">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
