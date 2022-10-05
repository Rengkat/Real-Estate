import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsPeopleFill,
  BsFillPersonFill,
  BsGlobe,
} from "react-icons/bs";
import { MdOutlineBedroomChild, MdOutlineBathtub } from "react-icons/md";
import { FaVectorSquare, FaHome } from "react-icons/fa";
import hero1 from "../../assets/Image/hero1.jpg";
import Hero from "./Hero";
import Statistics from "./Statistics";

const data = [
  {
    title: "Pinacle Real Estate",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 300,
  },
  {
    title: "Joyous Hmes",
    image:
      "https://images.pexels.com/photos/10628468/pexels-photo-10628468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 300,
  },
  {
    title: "Creekside Apartments",
    image:
      "https://images.pexels.com/photos/6422929/pexels-photo-6422929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 300,
  },
  {
    title: "Banana Estate",
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 300,
  },
  {
    title: "Ikoyi Club Estate",
    image:
      "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 300,
  },
];

const FeaturePro2 = () => {
  return (
    <div className=" bg-lightBg relative overflow-hidden ">
      {/* ...flex of green and slider btn... */}
      <div className="top flex">
        {/* ...green ..*/}
        <div className=" bg-darkBg h-[30vh] md:h-[60vh] py-3 w-[67%] md:mb-[20rem] md:w-[70%] md:pl-[8rem] shadow-md my-5">
          <div className="pl-6 pr-2 text-textWhite md:w-[70%]">
            <h1 className=" font-bold text-xl py-2 md:py-6 md:text-6xl md:leading-snug ">
              Our Featured Properties
            </h1>
            <p className=" text-sm md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              eum blanditiis
            </p>
          </div>
        </div>
        {/* ...slider btn ... */}
        <div className="flex mt-[8rem] justify-center w-[40%] md:hidden">
          <div className="flex space-x-3 text-yellowBtn">
            <BsArrowLeftCircle fontSize={25} />
            <BsArrowRightCircle fontSize={25} />
          </div>
        </div>
      </div>
      {/* ....card....... */}
      <div className="absolute top-[20%] md:top-[20%] space-x-3 h-[35vh] md:h-[60vh] flex  md:p-2">
        {data.map((display, i) => {
          return (
            <div
              key={i}
              className=" shadow-md bg-textWhite w-[11rem] md:w-[30%] px-3 py-4 rounded-lg ">
              <div className="flex relative">
                <div className="circle w-10 h-10 rounded-full"></div>
                <div className=" absolute top-3 md:top-2 ml-1">
                  <h1 className="top-6 ml-4 text-darkBg font-semibold text-sm md:text-xl">
                    {display.title}
                  </h1>
                  <p className="ml-9 -mt-1 text-xs md:text-sm">Contry</p>
                </div>
              </div>
              {/* ...ICON.... */}
              <div className="icons flex justify-between py-2 md:pt-5">
                <div className="flex items-center space-x-1">
                  <MdOutlineBedroomChild /> <span>5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineBathtub /> <span>10</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaVectorSquare /> <span>12</span>
                </div>
              </div>

              <img
                src={display.image}
                alt=""
                className=" rounded-md md:h-[30vh] object-cover"
              />
              <p className=" text-xs md:text-sm md:pt-2">Rent price</p>
              <div className="flex justify-between ">
                <h1 className="md:text-xl">{display.price}</h1>
                <button className="font-semibold text-[gray] rounded-md text-sm md:text-xl py-[1px] px-[3px] border-2 border-[grey]">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-wite mt-[18rem] md:pb-[20rem] md:min-h-[80vh] md:flex justify-between md:w-[80%] md:mt-[20rem] space-x-5 mx-auto ">
        <div className="w-1/2">
          <img
            src={hero1}
            alt="image"
            className="w-[70%] hidden md:block md:w-full mx-auto md:h-[65vh] md:mx-2"
          />
        </div>
        <div className=" text-center p-4 my-7 md:w-[40%] md:my-0 md:p-0">
          <h1 className="font-bold text-darkBg text-2xl py-2 md:text-5xl">
            Our Last 12 years of achiefments
          </h1>
          <p className="md:text-xl md:py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            voluptatem eligendi pariatur rerum nemo cumque obcaecati, similique,
            suscipit nam nesciunt inventore!
          </p>
          <div className="icons grid grid-cols-2 py-5 ">
            <Statistics
              icon={<FaHome className=" text-[#4aaeb5]" />}
              num="10000+"
              paragraph="Property Listed"
              iconStyle="#4aaeb5"
            />
            <Statistics
              icon={<BsFillPersonFill className=" text-[#fda604]" />}
              num="3 Million"
              iconStyle="#fda604"
              paragraph="Total Users"
            />
            <Statistics
              icon={<BsPeopleFill className=" text-[#51d151]" />}
              num="10000+"
              iconStyle="#51d151"
              paragraph="Clients"
            />

            <Statistics
              icon={<BsGlobe className=" text-[#4aaeb5]" />}
              num="35"
              paragraph="Countries"
              iconStyle="#4aaeb5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePro2;
