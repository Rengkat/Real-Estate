import hero1 from "../../assets/Image/hero1.jpg";

const Hero = () => {
  return (
    <div className="h-[60vh] md:h-[70vh] hero-image">
      <div className=" absolute z-10 w-[70%] md:w-[43%] ml-8 md:ml-[7rem] mt-[10vh]  text-[white]">
        <h1 className="font-bold text-3xl md:text-6xl md:leading-snug">
          Everyone Deserve the Opportunity of Home
        </h1>
        <p className="py-2 md:py-4 md:text-2xl">
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
