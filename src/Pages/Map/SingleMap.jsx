import GoogleMapReact from "google-map-react";

const SingleMap = ({ coordinates, coverPhoto, title }) => {
  return (
    <div className="h-[60vh] mt-5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBO-Z5LT-3LMNWcZ0kotJc30PJMVe5E7GQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          // styles: mapStyles,
        }}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}>
        <div
          className="w-[6rem] bg-textWhite rounded-md"
          // lat={Number(coordinates?.lat)}
          // lng={Number(coordinates?.lng)}
        >
          <img src={coverPhoto} alt="Image" className="w-full rounded-t-md" />
          <div className="text-xs p-1">
            <h1 className=" lowercase">{title && title?.substring(0, 30)}</h1>
          </div>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default SingleMap;
