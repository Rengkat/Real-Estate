import React from "react";

const Inspection = ({ heading, paragraph }) => {
  return (
    <div className=" border-[5px] border-lightBg my-3 p-5 rounded-md shadow-md">
      <h1 className=" text-darkBg font-bold">{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Inspection;
