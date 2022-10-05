import React from "react";

const CallToAction = () => {
  return (
    <div className=" md:w-[75%] mx-auto p-8 md:py-[10rem]">
      <div className="w-[90%] mx-auto">
        {/* heading */}
        <div>
          <h1 className="font-bold text-darkBg text-2xl md:text-6xl md:text-center md:leading-snug">
            Reach quanity renters and fill vacancies faster
          </h1>
          <p className="py-3 md:text-center md:text-2xl">
            We have marketing solutions for landlords, agents, and multifamily
            professionals
          </p>
        </div>
        <div className="md:flex md:py-5">
          {/* num.... */}
          <div className="flex py-3 space-x-3 items-center md:text-xl">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center  ">
              1
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            {/* <div className="border-2 hidden"></div> */}
          </div>
          <div className="flex py-3 space-x-3 items-center md:text-xl ">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center  ">
              2
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            {/* <div className="border-2 hidden"></div> */}
          </div>
          <div className="flex py-3 space-x-3 items-center md:text-xl ">
            <aside className="w-10 h-10 rounded-full text-textWhite font-semibold bg-[#1b9e93] flex items-center justify-center ">
              3
            </aside>
            <aside className="w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, porro.{" "}
              </p>
            </aside>
            {/* <div className="border-2 hidden"></div> */}
          </div>
          {/* .....action */}
          <div className="flex flex-col py-6 space-x-5 items-center md:hidden">
            <aside className="text-center ">
              <h1 className="font-semibold text-xl">
                Unlock Our Premium Features
              </h1>
              <p className="text-xs ">
                Advertise with us to optimize your leasing success
              </p>
            </aside>
            <aside className="w-[60%] py-4">
              <button className="text-xs font-bold bg-[#fda604] text-textWhite rounded-md shadow-md py-3 px-4">
                Check Our Pricing
              </button>
            </aside>
            {/* ...........end.... */}
          </div>
        </div>
        <div className="hidden md:flex justify-between w-[90%] mx-auto py-20">
          <aside className=" ">
            <h1 className="font-semibold text-4xl">
              Unlock Our Premium Features
            </h1>
            <p className="text-2xl ">
              Advertise with us to optimize your leasing success
            </p>
          </aside>
          <aside className=" ">
            <button className="text-xl font-bold bg-[#fda604] text-textWhite rounded-md shadow-md py-5 px-10">
              Check Our Pricing
            </button>
          </aside>
          {/* ...........end.... */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
