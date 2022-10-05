import { SiReactos, SiAmazonaws } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";

const Brands = () => {
  return (
    <div className="  h-32 mt-[23rem] md:mt-[35rem] md:h-[40vh] py-7">
      <h1 className="font-bold text-2xl text-center md:text-5xl md:my-5">
        Brand Patners
      </h1>
      <div className="flex justify-center space-x-3 md:space-x-10 py-5 text-[4rem]">
        <SiReactos />
        <SiAmazonaws />
        <GiReactor />
        <FcGoogle />
      </div>
    </div>
  );
};

export default Brands;
