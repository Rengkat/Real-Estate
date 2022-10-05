import { ImLocation2 } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Location = ({ states, para, phone, email }) => {
  return (
    <div className="my-2 md:my-3">
      <h1 className="text-2xl font-semibold py-3 md:text-3xl">{states}</h1>

      <div className="">
        <div>
          <div className="flex py-1">
            <ImLocation2 className="text-3xl md:text-4xl mr-2 text-[#4aaeb5]" />{" "}
            <p className="md:text-xl">{para}</p>
          </div>
          <div className="flex py-1">
            <FaPhoneSquareAlt className="text-2xl md:text-4xl mr-2  text-[#fda604]" />{" "}
            <p className="md:text-xl">{email}</p>
          </div>
          <div className="flex py-1">
            <MdEmail className="text-2xl md:text-4xl mr-2 text-[#51d151]" />{" "}
            <p className="md:text-xl">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
