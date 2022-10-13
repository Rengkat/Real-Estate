import GoogleMapReact from "google-map-react";

const SingleMap = () => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBO-Z5LT-3LMNWcZ0kotJc30PJMVe5E7GQ" }}
        // defaultCenter={coordinates}
        // center={coordinates}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          // styles: mapStyles,
        }}
        // onChange={(e) => {
        //   getMapBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClick(child)}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}></GoogleMapReact>
    </div>
  );
};

export default SingleMap;
