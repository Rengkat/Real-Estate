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
        <div className=" bg-darkBg h-[30vh] py-3 w-[65%] shadow-md my-5">
          <div className="pl-6 text-textWhite">
            <h1 className=" font-bold text-xl ">Our Featured Properties</h1>
            <p className=" text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              eum blanditiis
            </p>
          </div>
        </div>
        {/* ...slider btn ... */}
        <div className="flex mt-[8rem] justify-center w-[40%]">
          <div className="flex space-x-3 text-yellowBtn">
            <BsArrowLeftCircle fontSize={25} />
            <BsArrowRightCircle fontSize={25} />
          </div>
        </div>
      </div>
      {/* ....card....... */}
      <div className="absolute top-[15%] space-x-3 h-[40vh] flex mb-[100rem]">
        {data.map((display, i) => {
          return (
            <div
              key={i}
              className=" shadow-md bg-textWhite w-[11rem] px-3 py-4 rounded-lg ">
              <div className="flex relative">
                <div className="circle w-10 h-10 rounded-full"></div>
                <div className=" absolute top-3 ml-1">
                  <h1 className="top-6 ml-4 text-darkBg font-semibold text-sm">
                    {display.title}
                  </h1>
                  <p className="ml-9 -mt-1 text-xs">Contry</p>
                </div>
              </div>
              {/* ...ICON.... */}
              <div className="icons flex justify-between py-2">
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

              <img src={display.image} alt="" className=" rounded-md" />
              <p className=" text-xs">Rent price</p>
              <div className="flex justify-between">
                <h1>{display.price}</h1>
                <button className="font-semibold text-[gray] rounded-md text-sm py-[1px] px-[3px] border-2 border-[grey]">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-wite mt-[15rem]">
        <div>
          {" "}
          <img src={hero1} alt="image" className="w-[70%] mx-auto" />
        </div>
        <div className=" text-center p-4 my-7">
          <h1 className="font-bold text-darkBg text-2xl py-2">
            Our Last 12 years of achiefments
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            voluptatem eligendi pariatur rerum nemo cumque obcaecati, similique,
            suscipit nam nesciunt inventore!
          </p>
          <div className="icons grid grid-cols-2  ">
            <Statistics
              icon={<FaHome />}
              num="10000+"
              paragraph="Property Listed"
              iconStyle="#4aaeb5"
            />
            <Statistics
              icon={<BsFillPersonFill />}
              num="3 Million"
              iconStyle="#fda604"
              paragraph="Total Users"
            />
            <Statistics
              icon={<BsPeopleFill />}
              num="10000+"
              iconStyle="#51d151"
              paragraph="Clients"
            />

            <Statistics
              icon={<BsGlobe />}
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
