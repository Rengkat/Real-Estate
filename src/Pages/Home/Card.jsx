import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="card my-3  p-6 rounded-md shadow-md text-textWhite">
      <div className="icon text-3xl md:text-5xl inline-block shadow p-2 rounded-md">
        {icon}
      </div>
      <h1 className="font-bold text-2xl md:text-3xl py-2 md:py-5">
        {" "}
        {heading}
      </h1>
      <p className=" text-justify "> {paragraph}</p>
      <Link className="flex space-x-1 text-yellowBtn font-semibold md:my-5">
        <span> Learn Now </span>
        <span className="pt-2">
          <CgArrowLongRight />
        </span>
      </Link>
    </div>
  );
};

export default Card;
