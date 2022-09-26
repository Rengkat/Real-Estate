import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png";
import { CgMenuGridO } from "react-icons/cg";
const NavBar = () => {
  return (
    <header>
      {/* .......top..... */}

      <div className="h-12 bg-[#132f30] w-full flex items-center justify-center">
        <div className="topText flex justify-between text-textWhite w-[63%]">
          <p>+234 8067581175</p>
          <p>Login/Sign Up</p>
        </div>
      </div>
      <nav className=" bg-darkBg py-5">
        <div className="container w-[85%] mx-auto flex justify-between">
          {/* ..... Logo..... */}
          <Link to="/">
            <div className="flex ">
              <img src={Logo} alt="Logo" className="w-12 h-12" />
              <div className="pl-1">
                <h1 className="font-bold text-xl text-yellowBtn">OLAMIDE</h1>
                <p className="-mt-1 tracking-[5px] text-sm text-textWhite">
                  Properties
                </p>
              </div>
            </div>
          </Link>
          {/* ......close and opne menu */}
          <CgMenuGridO
            fontSize={50}
            className=" text-textWhite cursor-pointer relative"
          />
        </div>
      </nav>
      {/* .........mobile nav ......... */}
      <div className=" flex hidden absolute w-full justify-center transition-all duration-500 text-center h-[80vh] items-center bg-[#132f30] pb-2">
        <div className="flex flex-col ml-10 font-bold text-xl text-textWhite">
          <Link className="py-4" to="/">
            Home
          </Link>
          <Link className="py-4" to="/shop">
            Shop
          </Link>
          <Link className="py-4" to="/about">
            About
          </Link>
          <Link className="py-4" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
