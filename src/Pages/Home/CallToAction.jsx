import React from "react";

const CallToAction = () => {
  return (
    <div className=" mx-auto p-8">
      <div className="w-[90%] mx-auto">
        {/* heading */}
        <div>
          <h1 className="font-bold text-darkBg text-2xl">
            Reach quanity renters and fill vacancies faster
          </h1>
          <p className="py-3">
            We have marketing solutions for landlords, agents, and multifamily
            professionals
          </p>
        </div>
        <div>
          {/* num.... */}
          <div className="flex py-3 space-x-3 items-center">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center  ">
              1
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            <div className="border-2 hidden"></div>
          </div>
          <div className="flex py-3 space-x-3 items-center ">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center  ">
              2
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            <div className="border-2 hidden"></div>
          </div>
          <div className="flex py-3 space-x-3 items-center ">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center ">
              3
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            <div className="border-2 hidden"></div>
          </div>
          {/* .....action */}
          <div className="flex py-5 space-x-5 items-center ">
            <aside className="text-center ">
              <h1 className="font-semibold text-sm">
                Unlock Our Premium Features
              </h1>
              <p className="text-xs ">
                Advertise with us to optimize your leasing success
              </p>
            </aside>
            <aside className="w-[40%]">
              <button className="text-xs font-bold bg-[#fda604] text-textWhite rounded-md shadow-md py-3 px-4">
                Check Our Pricing
              </button>
            </aside>
            <div className="border-2 hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
