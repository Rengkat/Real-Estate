import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Contexts/AppContext";
import axios from "axios";
// import { singleData } from "./cloneApi";
import SingleMap from "../Map/SingleMap";
import { useState } from "react";
import { Link } from "react-router-dom";
import InspectionFee from "./InspectionFee";

const Detail = () => {
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);
  const { addProperty, property } = useContext(Context);
  const { id } = useParams();

  // console.log(singleData);

  const fetchSingleProperty = () => {
    setLoading(true);
    const singleProductOptions = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/properties/detail",
      params: { externalID: id },
      headers: {
        "X-RapidAPI-Key": "96d5c63021mshc715d3e1b56eef3p117ad3jsn4ce74ce1d95e",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };

    axios
      .request(singleProductOptions)
      .then(function (response) {
        setLoading(false);
        // console.log(response.data);
        setSingleData(response?.data);
      })
      .catch(function (error) {
        setLoading(false);
        // console.error(error);
      });
  };
  useEffect(() => {
    fetchSingleProperty();
    // getSinglePropertyID(id);
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" w-full h-[70vh] font-bold text-3xl flex items-center justify-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="">
          <div className="">
            <img
              src={singleData?.coverPhoto?.url}
              alt=""
              className="md:w-[90%] mx-auto md:h-[80vh] md:object-cover"
            />
          </div>
          <div className="flex justify-between w-[80%] mx-auto -mt-[1.5rem] md:-mt-[5rem] ">
            {singleData.photos &&
              singleData?.photos?.slice(0, 4).map((photo) => {
                return (
                  <div key={photo?.id} className=" shadow bg-textWhite">
                    <img
                      src={photo?.url}
                      alt="image"
                      className=" w-16 h-16 object-cover p-1 md:p-3 md:w-[15rem]  md:h-[12rem]"
                    />
                  </div>
                );
              })}
          </div>
          <div className="md:flex md:w-[80%] md:mx-auto md:my-[5rem]">
            <div className="w-[80%] mx-auto md:text-xl">
              <h1 className="font-semibold text-xl py-2 md:text-3xl md:font-bold">
                {singleData?.title}
              </h1>
              <p className=" text-darkBg pt-1">
                Price: ${singleData?.price?.toLocaleString()} /{" "}
                {singleData?.rentFrequency}
              </p>
              <p>
                Agent Fee: ${((10 / 100) * singleData?.price)?.toLocaleString()}
              </p>
              <p>Refrence No: {singleData?.referenceNumber}</p>
              <p className="pb-5">Permint No: {singleData?.permitNumber}</p>
            </div>

            <div className=" text-center pb-20 px-5 md:text-start md:w-[100%]">
              <h1 className="font-bold text-2xl md:text-3xl md:my-5 ">
                Description
              </h1>
              <p className="md:text-xl">
                {singleData?.description?.substring(0, 500)}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%] mx-auto justify-between">
            <div className="my-5 bg-darkBg md:text-xl ">
              <div className=" px-10 py-5 md:py-10 md:px-16 text-[#dedada] md:w-[90%] mx-auto">
                <h1 className="py-3 font-bold text-xl md:text-3xl">
                  Other Facilities
                </h1>
                <ul>
                  <li>{singleData?.area?.toFixed(1)} Square Area</li>
                  <li>{singleData?.baths} Bathroom</li>
                  <li>{singleData?.rooms} Rooms</li>
                </ul>
                <ul>
                  {singleData?.amenities?.map((amin) => {
                    // const { amenities } = amin;
                    return (
                      <ul key={Math.random()}>
                        {amin &&
                          amin?.amenities?.map((am) => {
                            return <li key={Math.random()}>{am?.text}</li>;
                          })}
                      </ul>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="px-8 py-2 md:w-[90%] md:px-16 mx-auto md:text-xl">
              <h1 className="py-3 font-bold text-xl md:text-3xl">
                Contact Agency
              </h1>
              <p>Name: {singleData?.agency?.name}</p>
              <p>Phone: {singleData?.phoneNumber?.mobile}</p>
              <p>
                {singleData?.agency?.licenses?.map((age) => {
                  return (
                    <div key={age.id}>
                      <p>Licenses No: {age?.number}</p>
                      <p>Authority: {age?.authority}</p>
                    </div>
                  );
                })}
              </p>
            </div>
            <div className="flex space-x-3 justify-between py-3 px-10 md:w-[35%] mx-auto">
              <Link to="/shop">
                <button className=" bg-darkBg text-textWhite md:py-4 md:px-6 py-2 px-4 md:text-2xl rounded shadow font-semibold">
                  Back to Shop
                </button>
              </Link>

              <button
                onClick={() =>
                  addProperty({
                    title: singleData?.title,
                    price: singleData?.price,
                  })
                }
                className=" bg-darkBg md:text-2xl text-textWhite md:py-4 md:px-6 py-2 px-4 rounded shadow font-semibold">
                <InspectionFee />
              </button>
            </div>
          </div>
          {/* map */}
          <div className="md:mt-[8rem]">
            <h1 className="ml-5 md:ml-[9rem] font-bold text-xl md:text-3xl md:py-5 mt-5">
              Check Property Location:
            </h1>
            <SingleMap
              coordinates={singleData?.geography}
              coverPhoto={singleData?.coverPhoto?.url}
              title={singleData?.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
