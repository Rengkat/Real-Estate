import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png";
import { CgMenuGridO } from "react-icons/cg";
import { RiMenu5Line } from "react-icons/ri";
import { useContext } from "react";
import { Context } from "../Contexts/AppContext";
const NavBar = () => {
  const { isMobileMenuOpen, openMobileMenu } = useContext(Context);
  // console.log(isMobileMenuOpen);
  // const handleClickOpenMenu=()=>{

  // }
  return (
    <header>
      <nav className=" bg-darkBg py-8">
        <div className="container w-[85%] mx-auto flex justify-between md:justify-sta">
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
          <div className="md:flex w-[60%] hidden ">
            <div className="flex space-x-7 text-textWhite">
              <NavLink className=" navLink" to="/">
                Home
              </NavLink>
              <NavLink className=" navLink" to="/shop">
                Shop
              </NavLink>
              <NavLink className=" navLink" to="/about">
                About
              </NavLink>
              <NavLink className=" navLink" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
          {/* ......close and opne menu */}
          <div className=" md:hidden">
            <CgMenuGridO
              onClick={openMobileMenu}
              fontSize={50}
              className=" text-textWhite cursor-pointer "
            />
          </div>
        </div>

        {/* .........mobile nav ......... */}

        <div
          className={`bg-darkBg h-[100vh] fixed z-20 inset-0 transition-all duration-700 linear ${
            isMobileMenuOpen ? " top-0 " : "-top-[500%]"
          } `}>
          <div>
            <RiMenu5Line
              onClick={openMobileMenu}
              className=" text-textWhite absolute text-5xl top-6 right-6"
            />
          </div>
          <div className="flex justify-center text-center  w-full h-screen mt-[10rem]">
            <div className="flex flex-col ml-10 font-bold text-xl text-textWhite">
              <Link onClick={openMobileMenu} className="py-4" to="/">
                Home
              </Link>
              <Link onClick={openMobileMenu} className="py-4" to="/shop">
                Shop
              </Link>
              <Link onClick={openMobileMenu} className="py-4" to="/about">
                About
              </Link>
              <Link onClick={openMobileMenu} className="py-4" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
