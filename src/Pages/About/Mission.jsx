import { FaAdn, FaWarehouse } from "react-icons/fa";
import { MdSupervisedUserCircle } from "react-icons/md";
import { GrFreebsd } from "react-icons/gr";

const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:w-[70%] w-[95%] mx-auto text-center my-5">
      <div className="mission">
        <div className="abouIcons ">
          <FaAdn className="text-[#4aaeb5]" />
        </div>
        <h1 className="headingMision md:text-2xl">About Us</h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          laboriosam officia maiores distinctio. Enim in dolore ratione rerum
          non? Ut architecto a delectus nulla facilis saepe sit perferendis,
          vitae consequatur?
        </p>
      </div>
      <div className="mission">
        <div className="abouIcons ">
          <FaWarehouse className=" text-[#fda604]" />
        </div>
        <h1 className="headingMision md:text-2xl">Our Mission</h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sequi
          minima. A ab ipsum natus possimus nesciunt facilis eligendi neque.
        </p>
      </div>
      <div className="mission">
        <div className="abouIcons">
          <MdSupervisedUserCircle className=" text-[#51d151]" />
        </div>
        <h1 className="headingMision md:text-2xl">Our Vision</h1>
        <p className="md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
          dolorem autem tempora, nobis nisi eius amet iste illo iure?
        </p>
      </div>
      <div className="mission">
        <div className="abouIcons ">
          <GrFreebsd className="text-[#4aaeb5]" />
        </div>
        <h1 className="headingMision md:text-2xl">Our Philosophy</h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed vero
          iure dolorum atque alias?
        </p>
      </div>
    </div>
  );
};

export default Mission;
