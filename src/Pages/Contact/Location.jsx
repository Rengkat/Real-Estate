import { ImLocation2 } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Location = ({ states, para, phone, email }) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl font-semibold py-3">{states}</h1>

      <div className="">
        <div>
          <div className="flex py-1">
            <ImLocation2 className="text-3xl mr-2 text-[#4aaeb5]" />{" "}
            <p>{para}</p>
          </div>
          <div className="flex py-1">
            <FaPhoneSquareAlt className="text-2xl mr-2  text-[#fda604]" />{" "}
            <p>{email}</p>
          </div>
          <div className="flex py-1">
            <MdEmail className="text-2xl mr-2 text-[#51d151]" /> <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
