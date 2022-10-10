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
          const {
            coverPhoto,
            price,
            isVerified,
            area,
            completionStatus,
            furnishingStatus,
            purpose,
            rentFrequency,
            rooms,
            title,
            baths,
            geography,
            agency,
          } = property;
          return (
            <div
              key={property.id}
              lat={Number(property?.geography?.lat)}
              lng={Number(property?.geography?.lng)}>
              <img src={coverPhoto?.url} alt="Image" className="w-[5rem]" />
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
