import { MdVerified } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import millify from "millify";
const Display = ({ property }) => {
  // agency.logo.url
  const {
    coverPhoto,
    price,
    isVerified,
    area,
    completionStatus,
    furnishingStatus,
    location,
    purpose,
    rentFrequency,
    rooms,
    title,
    referenceNumber,
    baths,

    agency,
  } = property;
  console.log(property);
  return (
    <div className="w-[90%] mx-auto my-5 shadow-lg md:p-3">
      <img
        src={coverPhoto?.url}
        alt="Image"
        className=" md:w-[100%] md:h-[15rem]"
      />
      <div className="py-5 px-3">
        <div className="text-xl font-semibold ">
          <div className="flex list-none items-center justify-between">
            <div className="flex items-center space-x-1">
              <li>{isVerified && <MdVerified className=" text-[green]" />}</li>
              <li className=" capitalize">
                USD {millify(price)}/{rentFrequency && rentFrequency}
              </li>
            </div>

            <li>
              <img
                src={agency?.logo?.url}
                alt="image"
                className="w-10 h-10 object-cover"
              />
            </li>
          </div>
        </div>
        <div className="flex justify-between list-none space-x-2 py-1 ">
          <li className="flex items-center">
            {rooms}
            <span>
              <FaBed className=" text-[#056905] ml-2 text-2xl" />
            </span>
          </li>
          |
          <li className="flex items-center">
            {baths}
            <span>
              <FaBath className="text-[#056905] ml-2 text-2xl" />
            </span>
          </li>
          |
          <div className="flex items-center space-x-1">
            <li>{area.toFixed(1)}</li> <li>sqft</li>
            <li>
              <RiLayoutGridFill className="text-[#056905] text-2xl" />
            </li>
          </div>
        </div>
        <div className="">
          <h1>{title.substring(0, 40)}...</h1>
        </div>
      </div>
    </div>
  );
};

export default Display;
