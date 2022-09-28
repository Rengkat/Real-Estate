import React from "react";
import Brands from "../Home/Brands";
import AboutHero from "./AboutHero";
import Mission from "./Mission";

const About = () => {
  return (
    <div>
      <AboutHero
        header="About Us"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            esse!"
      />
      <Mission />
      {/* <Brands /> */}
    </div>
  );
};

export default About;
