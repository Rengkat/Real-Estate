import { SiReactos, SiAmazonaws } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";

const Brands = () => {
  return (
    <div className=" bg-textWhite h-32 mt-[23rem] pt-4">
      <h1 className="font-bold text-2xl text-center">Brand Patners</h1>
      <div className="flex justify-center space-x-3 py-5 text-[4rem]">
        <SiReactos />
        <SiAmazonaws />
        <GiReactor />
        <FcGoogle />
      </div>
    </div>
  );
};

export default Brands;
