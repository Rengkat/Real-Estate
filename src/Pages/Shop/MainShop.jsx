import React from "react";
import { useContext } from "react";
import { Context } from "../../Contexts/AppContext";
import Filter from "./Filter";
import Display from "./Display";
import { Link } from "react-router-dom";

const MainShop = () => {
  const { data } = useContext(Context);
  return (
    <div>
      <Filter />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-[90%] mx-auto">
          {data?.map((property) => {
            return (
              <Link to={`/${property.id}`} key={property.id}>
                <Display property={property} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
