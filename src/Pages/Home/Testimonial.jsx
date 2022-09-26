import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const testimotials = [
  {
    heading: "Excelent Experience",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Alexander Rengkat",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Happy Client",
  },
  {
    heading: "Great Business",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Isaac Alexander",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Happy Client",
  },
  {
    heading: "Good Experience",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Kamshinen Dewan",
    image:
      "https://images.pexels.com/photos/10628468/pexels-photo-10628468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Constant Client",
  },
  {
    heading: "Wanderful Experiance",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis vero, nihil quia unde voluptatibus voluptas dolorum rem quos tempora?",
    name: "Sylvia Danan",
    image:
      "https://images.pexels.com/photos/6422929/pexels-photo-6422929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reaction: "Great Client",
  },
];
const Testimonial = () => {
  return (
    <div className=" bg-textWhite flex -mt-[5rem] top-[10%] justify-center">
      {testimotials.map((test, i) => {
        return (
          <div
            key={i}
            className=" absolute bg-textWhite w-[75%] rounded-md shadow-md px-5 py-3">
            <h1 className="font-bold text-xl py-2">{test.heading}</h1>
            <p className="py-3">{test.testimony}</p>
            <img
              src={test.image}
              alt="image"
              className="w-10 h-10 rounded-full my-1"
            />
            <div className="flex justify-between">
              <div>
                <h1 className="font-semibold">{test.name}</h1>
                <p className="text-sm">{test.reaction}</p>
              </div>
              <div className="flex space-x-3 text-yellowBtn">
                <BsArrowLeftCircle fontSize={25} />
                <BsArrowRightCircle fontSize={25} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
