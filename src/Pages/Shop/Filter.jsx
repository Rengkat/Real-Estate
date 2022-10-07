import { useState, useContext } from "react";
import { filterData } from "../../Contexts/Search";
import { Context } from "../../Contexts/AppContext";

//

//

const Filter = () => {
  const { addSearchProperties, searchProperties } = useContext(Context);
  // const [filter, setFilter] = useState("");

  // console.log(searchProperties);
  return (
    <div className="bg-lightBg pb-[5rem]">
      <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 p-3">
        {filterData.map((select) => {
          // console.log(select);
          return (
            <div key={select.queryName}>
              <select
                onClick={(e) =>
                  addSearchProperties({ [select.queryName]: e.target.value })
                }
                placeholder={select.placeholder}
                className="w-full py-2 px-4 bg-lightBg ">
                <option value="" disabled className="">
                  {select.placeholder}
                </option>
                {select?.items?.map((filt, i) => {
                  return (
                    <option
                      key={filt.value}
                      value={filt.value}
                      className="py-1 text-xl">
                      {filt.name}
                    </option>
                  );
                })}
                {/* <option value="" disabled></option> */}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
