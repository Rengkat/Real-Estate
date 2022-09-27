import Logo from "../assets/Logo/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[30vh] bg-darkBg mt-[6rem] pt-10 flex justify-center w-full">
      <div className="pt-3 text-[white] mx-auto">
        <div className="flex items-center ">
          <img src={Logo} alt="Logo" className="w-12  h-16" />
          <div className="pl-1">
            <h1 className="font-bold text-xl text-yellowBtn">OLAMIDE</h1>
            <p className="-mt-1 tracking-[5px] text-sm text-textWhite">
              Properties
            </p>
          </div>
        </div>

        <div className="flex justify-center text-2xl space-x-5 py-4">
          <div className="iconBottom">
            <FaFacebookF />
          </div>
          <div className="iconBottom">
            {" "}
            <FaTwitter />
          </div>
          <div className="iconBottom">
            <FaInstagram />
          </div>
          <div className="iconBottom">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
