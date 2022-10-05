import React from "react";
import AboutHero from "../About/AboutHero";
import Location from "./Location";

const Contact = () => {
  return (
    <div>
      <AboutHero
        header="Contact Us "
        paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic officiis nihil dolorem cumque provident."
      />
      <div className=" p-5  md:w-[70%] md:mx-auto md:my-24">
        <h1 className="text-2xl text-darkBg font-bold md:text-5xl md:py-5">
          Find Our Closest Office to You
        </h1>
        <div className="md:grid grid-cols-2">
          <Location
            states="Lagos"
            email="lagos@olaproperties.com"
            para="12 Lorem ipsum dolor sit amet consectetur adipisicing"
            phone="+234845633, +234566764"
          />
          <Location
            states="Abuja"
            email="abuja@olamiproperties.com"
            para="34 Consectetur adipisicing elit. Ut hic officiis"
            phone="+234845633, +234566764"
          />
          <Location
            states="Jos"
            email="jos@olamideproperties.com"
            para="74B Lorem ipsum dolor sit amet consectetur adipisicing"
            phone="+234845633, +234566764"
          />
          <Location
            states="Kano"
            email="kano@olamiproperties.com"
            para="86 Ipsum dolor sit amet consectetur adipisicing"
            phone="+234845633, +234566764"
          />
        </div>
      </div>
      <div className="my-5">
        <h1 className=" font-bold text-center text-darkBg text-2xl md:text-4xl md:py-5">
          Send us feedback
        </h1>
        <div className=" list-none justify-center flex w-full md:w-[60%] md:mx-auto ">
          <div className="w-[80%]">
            <li>
              <input
                type="text"
                className="border-2 py-2 w-full my-1 px-3 border-[grey] rounded-md"
                placeholder="First name"
              />
            </li>
            <li>
              <input
                type="text"
                className="border-2 py-2 w-full my-1 px-3 border-[grey] rounded-md"
                placeholder="Surname"
              />
            </li>
            <li>
              <input
                type="email"
                className="border-2 py-2 w-full my-1 px-3 border-[grey] rounded-md"
                placeholder="Email"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                className="border-2 py-2 w-full  my-1 px-3 border-[grey] rounded-md"></textarea>
            </li>
            <li>
              <button className=" bg-darkBg w-full md:w-[20%] font-semibold rounded-md shadow py-2 px-7 md:py-3 md:px-10 md:text-2xl text-textWhite">
                Send
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
