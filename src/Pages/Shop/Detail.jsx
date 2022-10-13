import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Contexts/AppContext";
import axios from "axios";
import { singleData } from "./cloneApi";
import SingleMap from "../Map/SingleMap";
import { useState } from "react";
// import { useState } from "react";

const Detail = () => {
  const { getSinglePropertyID } = useContext(Context);
  const { id } = useParams();

  console.log(singleData);
  const [getBound, setGetBound] = useState({});
  // const fetchSingleProperty = () => {
  //   const singleProductOptions = {
  //     method: "GET",
  //     url: "https://bayut.p.rapidapi.com/properties/detail",
  //     params: { externalID: id },
  //     headers: {
  //       "X-RapidAPI-Key": "96d5c63021mshc715d3e1b56eef3p117ad3jsn4ce74ce1d95e",
  //       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(singleProductOptions)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // console.error(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchSingleProperty();
  //   getSinglePropertyID(id);
  // }, [id]);
  // console.log(id);
  return (
    <div>
      <div className="">
        <img src={singleData?.coverPhoto?.url} alt="" />
      </div>
      <div className="flex justify-between w-[80%] mx-auto -mt-[1.5rem] ">
        {singleData?.photos?.slice(0, 4).map((photo) => {
          return (
            <div key={photo.id} className=" shadow bg-textWhite">
              <img
                src={photo.url}
                alt="image"
                className=" w-16 h-16 object-cover p-1"
              />
            </div>
          );
        })}
      </div>
      <div className="w-[80%] mx-auto ">
        <h1 className="font-semibold text-xl py-2">{singleData.title}</h1>
        <p className=" text-darkBg pt-1">
          Price: ${singleData.price.toLocaleString()} /{" "}
          {singleData.rentFrequency}
        </p>
        <p>Refrence No: {singleData?.referenceNumber}</p>
        <p className="pb-5">Permint No: {singleData?.permitNumber}</p>
      </div>
      <div>{/* <p>{singleData.slug}</p> */}</div>
      <div className=" text-center px-5">
        <h1 className="font-bold text-2xl ">Description</h1>
        <p>{singleData?.description.substring(0, 350)}</p>
      </div>
      <div className="flex flex-col w-[80%] mx-auto justify-between">
        <div className="my-5">
          <h1 className="py-3 font-bold text-xl">Other Facilities</h1>
          <ul>
            <li>{singleData.area.toFixed(1)} Square Area</li>
            <li>{singleData.baths} Bathroom</li>
            <li>{singleData.rooms} Rooms</li>
          </ul>
          <ul>
            {singleData?.amenities?.map((amin) => {
              const { amenities } = amin;
              return (
                <ul>
                  {amenities?.map((am) => {
                    return <li>{am.text}</li>;
                  })}
                </ul>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 className="py-3 font-bold text-xl">Contact Agency</h1>
          <p>Name: {singleData?.agency?.name}</p>
          <p>Phone: {singleData?.phoneNumber?.mobile}</p>
          <p>
            {singleData?.agency?.licenses?.map((age, i) => {
              return (
                <div key={i}>
                  <p>Licenses No: {age.number}</p>
                  <p>Authority: {age.authority}</p>
                </div>
              );
            })}
          </p>
        </div>
      </div>
      {/* map */}
      <div>
        <SingleMap coordinates={singleData.geography} />
      </div>
    </div>
  );
};

export default Detail;
