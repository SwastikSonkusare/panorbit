import React from "react";

import { GoogleMap } from "@react-google-maps/api";

import "./Map.css";

const Map = ({ state }) => {
  return (
    <>
      <GoogleMap
        zoom={7}
        center={{ lat: +state.address.geo.lat, lng: +state.address.geo.lng }}
        mapContainerClassName="map-container"
      />
      <div className="coords">
        <div>
          <h5>Lat : </h5>
          <small>{state.address.geo.lat}</small>
        </div>
        <div>
          <h5>Lng : </h5>
          <small>{state.address.geo.lng}</small>
        </div>
      </div>
    </>
  );
};

export default Map;
