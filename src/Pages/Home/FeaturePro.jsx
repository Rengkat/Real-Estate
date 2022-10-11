import React from "react";
import Inspection from "./Inspection";
import hero1 from "../../assets/Image/hero1.jpg";
import video from "../../assets/Videio/video.mp4";
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const FeaturePro = () => {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying((previousPlay) => !previousPlay);
    if (isPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className=" px-6 pt-6 pb-5 md:py-[15rem] bg-lightBg ">
      <div className="md:w-[80%] lg:w-[80%] mx-auto">
        <div className="top pb-4 text-center md:w-[45%] md:flex justify-start">
          <div>
            <h1 className="font-bold text-2xl text-darkBg md:text-5xl">
              The New Way to Rent
            </h1>
            <p className=" md:text-2xl md:py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              ad hic.
            </p>
          </div>
        </div>
        <div className=" my-5 md:flex justify-between">
          <div>
            <Inspection
              heading="Tour Virtually"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Inspection
              heading="Reserve Now"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Inspection
              heading="Apply Now"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>

          <div className="w-[100%] md:w-[52%] mt-10 md:mt-2  relative">
            <video
              src={video}
              loop
              controls={false}
              muted
              type="video/mp4"
              // className="h-[90vh]"
              ref={vidRef}
            />
            <div className=" flex items-center justify-center top-14 right-[40%] absolute md:top-[20%] md:right-[40%]">
              <div
                onClick={handlePlay}
                className="center w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-yellowBtn flex justify-center items-center ">
                {isPlaying ? (
                  <FaPause className=" text-yellowBtn text-4xl cursor-pointer" />
                ) : (
                  <FaPlay className="text-yellowBtn  text-4xl cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePro;
