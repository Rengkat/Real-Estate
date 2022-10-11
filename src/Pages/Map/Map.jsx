import GoogleMapReact from "google-map-react";
import { useContext } from "react";
import { Context } from "../../Contexts/AppContext";

const Map = () => {
  const { coordinates, placesLocations, bounds, getMapBound, data } =
    useContext(Context);
  return (
    <div className="h-[100vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBO-Z5LT-3LMNWcZ0kotJc30PJMVe5E7GQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          // styles: mapStyles,
        }}
        onChange={(e) => {
          getMapBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClick(child)}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}>
        {data?.map((property) => {
          const { coverPhoto, title, geography } = property;
          return (
            <div
              className="w-[6rem] bg-textWhite"
              key={property.id}
              lat={Number(geography?.lat)}
              lng={Number(geography?.lng)}>
              <img src={coverPhoto?.url} alt="Image" className="w-full" />
              <div className="text-xs p-1">
                <h1 className=" lowercase">{title.substring(0, 30)}</h1>
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
