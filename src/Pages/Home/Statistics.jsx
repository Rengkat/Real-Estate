import React from "react";

const Statistics = ({ icon, num, paragraph, iconStyle }) => {
  return (
    <div className=" flex space-x-3 items-center my-3 text-darkBg w-[75%] mx-auto">
      <div className={`text-[${iconStyle}] bg-textWhite p-2 rounded-full`}>
        {icon}
      </div>
      <aside className="text-start">
        <h1 className="font-semibold text-xl">{num}</h1>
        <p className="-mt-1 text-xs">{paragraph}</p>
      </aside>
    </div>
  );
};

export default Statistics;
