import { FcHome, FcShop, FcLibrary } from "react-icons/fc";
import Card from "./Card";
import FeaturePro from "./FeaturePro";
import FeaturePro2 from "./FeaturePro2";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" grid grid-cols-1 gap-2 p-7 bg-darkBg">
        <Card
          icon={<FcHome />}
          heading="Buy a Home"
          paragraph="Find your place with an immerasive photo experiance and the most listings, including things you won't find anywhere else"
        />
        <Card
          icon={<FcShop />}
          heading="Rent a Home"
          paragraph="Find your place with an immerasive photo experiance and the most listings, including things you won't find anywhere else"
        />
        <Card
          icon={<FcLibrary />}
          heading="Sell a Home"
          paragraph="Find your place with an immerasive photo experiance and the most listings, including things you won't find anywhere else"
        />
      </div>
      <FeaturePro />
      <FeaturePro2 />
    </div>
  );
};

export default Home;
