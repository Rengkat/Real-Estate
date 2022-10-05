import React from "react";

const Inspection = ({ heading, paragraph }) => {
  return (
    <div className=" border-[5px] border-lightBg my-3 p-5 rounded-md shadow-md">
      <h1 className=" text-darkBg font-bold md:font-bold md:text-2xl md:py-3">
        {heading}
      </h1>
      <p className="md:text-xl">{paragraph}</p>
    </div>
  );
};

export default Inspection;
