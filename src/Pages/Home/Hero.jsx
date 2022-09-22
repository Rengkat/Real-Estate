import hero1 from "../../assets/Image/hero1.jpg";

const Hero = () => {
  return (
    <div className="h-[60vh] hero-image">
      <div className=" absolute z-10 w-[70%] ml-8 mt-[10vh]  text-textWhite">
        {/* <div className=" "> */}
        <h1 className="font-bold text-3xl ">
          Everyone Deserve the {""}
          Opportunity of Home
        </h1>
        <p className="py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          doloribus excepturi
        </p>
        <button className=" bg-yellowBtn text-textWhite rounded-md shadow-md font-semibold py-3 px-5">
          Check Out
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
