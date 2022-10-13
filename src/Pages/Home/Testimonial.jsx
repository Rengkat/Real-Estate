import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Context } from "../../Contexts/AppContext";
const testimotials = [
  {
    heading: "Excelent Experience",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Alexander Rengkat",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Happy Client",
    id: 1,
  },
  {
    heading: "Great Business",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Isaac Alexander",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Happy Client",
    id: 2,
  },
  {
    heading: "Good Experience",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Kamshinen Dewan",
    image:
      "https://images.pexels.com/photos/10628468/pexels-photo-10628468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Constant Client",
    id: 3,
  },
  {
    heading: "Wanderful Experiance",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Sylvia Danan",
    image:
      "https://images.pexels.com/photos/6422929/pexels-photo-6422929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Great Client",
    id: 4,
  },
];
const Testimonial = () => {
  const { handleNextTestimony, currentTestimony, handlePrevTestimony } =
    useContext(Context);
  return (
    <div className=" bg-textWhite md:h-[90hv] flex -mt-[5rem] top-[10%] md:top-0 md:-mt-[15rem] justify-center">
      {testimotials.map((test, i) => {
        return (
          <div
            key={i}
            className={`absolute ${
              test.id === currentTestimony
                ? " right-[10%] transition-all duration-700 ease-linear"
                : "right-[100%] transition-all duration-700 ease-linear"
            } testimony`}>
            <h1 className="font-bold text-xl md:text-2xl py-2">
              {test.heading}
            </h1>
            <p className="py-3 md:text-xl md:pb-10">{test.testimony}</p>
            <img
              src={test.image}
              alt="image"
              className="w-10 h-10 rounded-full my-1 md:w-20 md:h-20 object-cover"
            />
            <div className="flex justify-between md:pb-10">
              <div>
                <h1 className="font-semibold md:text-xl">{test.name}</h1>
                <p className="text-sm ">{test.reaction}</p>
              </div>
              <div className="flex space-x-3 text-yellowBtn cursor-pointer">
                <BsArrowLeftCircle
                  fontSize={25}
                  onClick={() => handlePrevTestimony(testimotials.length)}
                />
                <BsArrowRightCircle
                  fontSize={25}
                  onClick={() => handleNextTestimony(testimotials.length)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
