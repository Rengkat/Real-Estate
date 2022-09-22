import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const FeaturePro2 = () => {
  return (
    <div className=" bg-lightBg">
      <div className="top flex">
        <div className=" bg-darkBg h-[40vh] py-3 w-[60%] my-5">
          <div className="pl-6 text-textWhite">
            <h1 className=" font-bold text-xl ">Our Featured Properties</h1>
            <p className=" text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              eum blanditiis
            </p>
          </div>
        </div>
        <div className="flex mt-20 justify-center w-[40%]">
          <div className="flex space-x-3 text-yellowBtn">
            <BsArrowLeftCircle fontSize={25} />
            <BsArrowRightCircle fontSize={25} />
          </div>
        </div>
      </div>
      <div className="pix"></div>
      <div className="bottom">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FeaturePro2;
